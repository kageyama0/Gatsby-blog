// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Article from "../components/article"
import Seo from "../elements/seo"

// 使うデータの定義
type Data = {
  site: {
    siteMetadata: {
      title: string
      author: {
        name: string
        summary: string
      }
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
          tags: string[]
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const author = data.site.siteMetadata.author
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout title={siteTitle} author={author}>
      <Seo title="Home" />
      {posts.map(({ node }) => (
        <Article key={node.fields.slug} node={node} />
      ))}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
          summary
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
