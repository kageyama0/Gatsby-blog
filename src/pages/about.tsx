import React from "react"
import { PageProps, graphql } from "gatsby"
import Layout from "../components/layout/layout.js"
import Seo from "../elements/seo"
import Bio from "../elements/bio"
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
      social: {
        twitter: string
        qiita: string
        github: string
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

const About = ({ data,location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const social = data.site.siteMetadata.social
  const author = data.site.siteMetadata.author

  return (
    <Layout title={siteTitle} author={author} location={location} >
      <Seo title="About me" />
      <Container>
        <Row>
          <Col xs={12} sm={8} className="post-wrap">
            <p className="post-date">更新日:2020/06/16</p>
            <h1 className="post-title">
              kageyama のプロフィール
            </h1>
            <section className="post-html">
              <h2>スキル / Skills</h2>

              <h4>プログラミング言語 / Language</h4>
              <p> ★5 : Good  -->  ★1 : not good</p>
              <p>HTML：★★★★☆</p>
              <p>CSS：★★☆☆☆</p>
              <p>JavaScript：★★☆☆☆</p>
              <p>Python：★★★☆☆</p>
              <p>Ruby：★☆☆☆☆</p>

              <h4>フレームワーク / Framework</h4>
              <p>Pug / Sass / bootstrap4 / Three.js / React.js / Gatsby.js / Django / Ruby on rails ....</p>

              <h4>ツール / Tools</h4>
              <p>OS：Windows10 / Macbook Pro(最近はMac) / Linux(Ubuntu18.04) </p>
              <p>Editor：Visual Code Studio</p>
              <p>etc：Docker / git / Github / Notion </p>

              <h4>プログラミング歴 / Experience</h4>
              <p>現在、京都大学大学院修士２年</p>
              <p>2019年3月からプログラミングの勉強を開始</p>
              <p>2019年3月下旬からWeb系受託開発会社で主にフロントエンドエンジニアとしてアルバイトを経験した。</p>
              <p>バイトをさせてもらっていた時は、Djangoでのアプリ開発、Three.jsを使った機能を単独で開発、Unityを使ったちょっとしたゲームの開発などを経験させてもらった。</p>
              <p>しかし、アルバイト先の事情で2019年12月に退職した。</p>
              <p>2020年4月からは、内定先の会社でアルバイトをしている(リモート)</p>

              <h2>経歴 / Career</h2>

              <p>2014.4 ~ 2019.3 : 京都大学工学部</p>
              <p>2019.4 ~ 2021.3 : 京都大学大学院修士過程</p>
              <p>2021.4 ~ : engineer</p>

              <h2>SNS</h2>

              <Bio />

              <h2>趣味 / Hobby</h2>

              <p>ゲーム ( LoL / TFT / 将棋 )</p>
              <p>料理 ( 得意料理：パスタ )</p>
              <p>美味しいものを食べる( 焼肉 , 寿司 , 和食)</p>

            </section>

          </Col>
          <Col xs={12} sm={4}>
            サイドバー
          </Col>
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
        social {
          twitter
          qiita
          github
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
            tags
          }
        }
      }
    }
  }
`
