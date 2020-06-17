import React from "react"
import Header from "./header"
import Footer from "./footer"
// import {
//   Container,
//   Row,
//   Col
// } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/components/layout/layout.scss"

const Layout = ({ title, author, children, location, crumbLabel }) => {
  return (
    <div>
      <Header
        title={title}
        author={author}
        location={location}
        crumbLabel={crumbLabel}
      />

      <main
        id="main"
        itemProp="mainContentOfPage"
        itemScope="itemscope"
        itemType="https://schema.org/Blog"
      >
        {children}
      </main>

      <Footer
        title={title}
        author={author}
      />
    </div>
  )
}

export default Layout
