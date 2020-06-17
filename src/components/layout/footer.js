import React from "react"
import { Link } from "gatsby"
import { scale } from "../../utils/typography"
import Bio from "../../elements/bio"

import {
  Container,
  Row,
  Col
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



const Footer = ({ title, author }) => {
  return (
    <footer>
      <Container>
        <Row noGutters={true}>
          <Col xs={12} md={4}>
            <div>About me</div>
            <p
              style={{ fontSize:`.750rem` }}
            >
              現在(2020/6月)、京都大学大学院修士２年
              <br></br>
              2019年3月からプログラミングの勉強を開始
              <br></br>
              Web系受託開発会社でフロントエンジニアとしてアルバイトを９ヶ月ほど経験
              <br></br>
              現在は、来年からエンジニアとして働く会社でアルバイト(リモート)
            </p>
            <Link
              style={{ fontSize: `.750rem`}}
              to={`/about/`}
            >
              >>プロフィールの詳細はこちら
            </Link>
          </Col>
          <Col xs={12} md={4}>
            <div>SNS</div>
            <Bio />
          </Col>
          <Col
            xs={12} md={4}
            style={{
              paddingTop: `10px`
            }}
          >
            Written by <strong>{author.name}</strong>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
