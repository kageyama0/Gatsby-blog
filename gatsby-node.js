const path = require(`path`)
// const shortid = require('shortid');
const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const filePath = createFilePath({ node, getNode })
//     //console.log(node.fileAbsolutePath)
//     // console.log(filePath)

//     // 新しく作ったフィールド"slug"の値として受け取る変数名をvalueにしないとなぜかバグる
//     const id = shortid.generate()
//     const value = filePath + id
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const filePath = createFilePath({ node, getNode })
    // 新しく作ったフィールド"slug"の値として受け取る変数名をvalueにしないとなぜかバグる
    const value = filePath
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // このgraphQL文を実行して、ブログたちのデータを取得する
  const result = await graphql(
    `{
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
            }
          }
        }
      }
    }`
  )

  if (result.errors) {
    throw result.errors
  }

  // articles = これまで作成したブログたち
  const articles = result.data.allMarkdownRemark.edges
  var tagsArray = []

  articles.forEach((post, index) => {
    const previous = index === articles.length - 1 ? null : articles[index + 1].node
    const next = index === 0 ? null : articles[index - 1].node
    const tags = post.node.frontmatter.tags
    tagsArray = tagsArray.concat(tags)

    createPage({
      path: post.node.fields.slug,
      tags: post.node.frontmatter.tags,
      component: path.resolve(`./src/components/templates/blog-post.js`),
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  var tags = Array.from(new Set(tagsArray))

  var tagsCount = tags.length
  // タグ一覧ページを作成。URL: {root_url}/tags
  createPage({
    path: `tags/`,
    component: path.resolve(`./src/components/templates/tagsIndex.js`),
    context: {
      tags,
      tagsCount
    },
  })

  // タグ詳細ページを作成。URL: {root_url}/tags/...
  tags.forEach(tag => {
    createPage({
      path: `tags/${tag}`,
      component: path.resolve(`./src/components/templates/tagPage.js`),
      context: {
        tag
      },
    })
  })

}
