import React from "react"
import { PageProps, graphql } from "gatsby"
import Layout from "../components/layout/layout.js"
import SEO from "../components/seo"
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap'
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
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const About = ({ data }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const author = data.site.siteMetadata.author

  return (
    <Layout title={siteTitle} author={author}>
      <SEO title="About me" />
      <Container>
        <Row>
          <Col>a</Col>
          <Col>b</Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default About


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
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC }) {
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
          }
        }
      }
    }
  }
`
