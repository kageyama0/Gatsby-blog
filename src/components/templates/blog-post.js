import React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../layout/layout"
import Seo from "../../elements/seo"
import TagItems from "../../elements/tagItems"

import {
  Container,
  Row,
  Col
} from 'react-bootstrap'

import "../../styles/components/templates/blog-post.scss"

// dataは、markdownファイルやmetadataなどのデータ
// pageContext = (gatsby-node.js内での)context
const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const author = data.site.siteMetadata.author
  const tags = post.frontmatter.tags
  const { previous, next } = pageContext

  return (
    <Layout title={siteTitle} author={author} location={location} >
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Container>
        <Row>
          <Col xs={12} sm={8} className="post-wrap">
            <article>
              <header>
                <p className="post-date">
                  {post.frontmatter.date}
                </p>
                <h1 className="post-title">
                  {post.frontmatter.title}
                </h1>
                <TagItems key={tags} tags={tags} />

              </header>

              <section
                className="post-html"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />

              <hr />

              <nav>
                <ul className="post-link">
                  <li>
                    {previous && (
                      <Link to={previous.fields.slug} rel="prev">
                        ← {previous.frontmatter.title}
                      </Link>
                    )}
                  </li>
                  <li>
                    {next && (
                      <Link to={next.fields.slug} rel="next">
                        {next.frontmatter.title} →
                      </Link>
                    )}
                  </li>
                </ul>
              </nav>
            </article>
          </Col>
          <Col xs={12} sm={4}>
            サイドバー
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author{
          name
          summary
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
