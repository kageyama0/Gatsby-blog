// Gatsby supports TypeScript natively!
import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../layout/layout"
import Seo from "../../elements/seo"
import {
  Container
} from 'react-bootstrap'

const TagPage = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${tag}のタグがついた投稿が${totalCount} 件ヒットしました`
  const siteTitle = data.site.siteMetadata.title
  const author = data.site.siteMetadata.author

  return (
    <Layout title={siteTitle} author={author}>
      <Seo title={tagHeader} />
      <Container>
        <h1>{tagHeader}</h1>
        <ul>
          {edges.map(({ node: { fields: { slug }, frontmatter: { title } } }) => (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          ))}
        </ul>
        <p>
          <Link to="/tags">タグ一覧へ</Link>
        </p>
      </Container>
    </Layout>
  );
};

export default TagPage

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
        author {
          name
          summary
        }
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
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
      totalCount
    }
  }
`
