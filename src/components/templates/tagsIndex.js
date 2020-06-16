import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../layout/layout"
//import Seo from "../elements/seo"

const TagsIndex = ({ data, pageContext, location }) => {
  const { tags, tagsCount } = pageContext
  //const { edges } = data.allMarkdownRemark;
  const siteTitle = data.site.siteMetadata.title
  const author = data.site.siteMetadata.author

  return (
    <Layout title={siteTitle} author={author} location={location} >
      <div>
        {tags.map((tag) =>
          <p key={tag}>{tag}</p>
        )}
        <p>{tagsCount}種類のタグがあります</p>
        <p>
          <Link to="/tags">All tags</Link>
        </p>
      </div>
    </Layout>
  );
};
export default TagsIndex

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
