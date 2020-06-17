import React from "react"
import { Link } from "gatsby"
import { scale } from "../../utils/typography"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

import {
  Container,
  Row,
  Col,
  Nav,
  Navbar
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../../styles/components/layout/header.scss"

const Header = ({ title, author, location, crumbLabel }) => {
  console.log(location.pathname)
  return (
    <header
      style={{...scale(0.5)}}
    >
      <Container>
        <Row noGutters={true}>
          <Col
            xs={12} md={6}
            style={{ ...scale(0.5) }}
          >
            <Link
              style={{
                boxShadow: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </Col>
          <Col
            xs={6} md={6}
            style={{
              paddingTop: `10px`
            }}
          >
            Written by <strong>{author.name}</strong>
          </Col>
        </Row>
      </Container>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Row>
            <Nav xs={12} className="mr-auto">
              <Nav.Link className="header-nav" href="/">Home</Nav.Link>
              <Nav.Link className="header-nav" href="/about">About me</Nav.Link>
              <Nav.Link className="header-nav" href="#Blog">Blog</Nav.Link>
              <Nav.Link className="header-nav" href="/tags">Tags</Nav.Link>
            </Nav>
          </Row>
        </Container>
      </Navbar>
      <Breadcrumb
        location={location}
        crumbLabel={crumbLabel}
        crumbSeparator=" > "
      />
    </header>
  )
}

export default Header
