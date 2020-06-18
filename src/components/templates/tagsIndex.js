import React from "react"
import { graphql } from "gatsby"

import Layout from "../layout/layout"
import Seo from "../../elements/seo"
import TagItems from "../../elements/tagItems"
import {
  Container
} from 'react-bootstrap'

const TagsIndex = ({ data, pageContext, location }) => {
  const { tags, tagsCount } = pageContext
  //const { edges } = data.allMarkdownRemark;
  const siteTitle = data.site.siteMetadata.title
  const author = data.site.siteMetadata.author

  return (
    <Layout title={siteTitle} author={author} location={location} >
      <Seo title="tag" />
      <Container>
        <p>{tagsCount}種類のタグがあります</p>
        <TagItems key={tags} tags={tags} />
      </Container>
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
