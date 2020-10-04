import React from "react"
import { Link } from "gatsby"
import { scale } from "../../utils/typography"
//import Breadcrumb from "../../elements/breadcrumb"

import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../../styles/components/layout/header.scss"

const Header = ({ title, author, location }) => {
  return (
    <header style={{ ...scale(0.5) }}>
      <Container>
        <Row noGutters={true} style={{ marginTop: `30px` }}>
          <Col xs={12} md={6}>
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
            xs={10}
            md={6}
            style={{
              paddingTop: `10px`,
            }}
          >
            <div
              style={{
                fontSize: `15px`,
                color: `gray`,
              }}
            >
              Written by {author.name}
            </div>
          </Col>
        </Row>
      </Container>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About me</Nav.Link>
            <Nav.Link href="#programming">Programming</Nav.Link>
            <NavDropdown title="My Life" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Diary</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/tags">Tags</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <Breadcrumb location={location} /> */}
    </header>
  )
}

export default Header
