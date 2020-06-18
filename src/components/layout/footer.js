import React from "react"
import { Link } from "gatsby"
import Bio from "../../elements/bio"

import {
  Container,
  Row,
  Col
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import "../../styles/components/layout/footer.scss"


const Footer = ({ title, author }) => {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="footer-title">About me</div>
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
          <Col xs={12} md={3}>
            <div className="footer-title">SNS</div>
            <Bio />
          </Col>
          <Col xs={12} md={3}>
            <div className="footer-title">Portfolio</div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
