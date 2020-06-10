import React from "react"
import Header from "./header.js"
import Footer from "./footer.js"
// import {
//   Container,
//   Row,
//   Col
// } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/components/layout/layout.scss"

const Layout = ({ title, author, children }) => {
  console.log()
  return (
    <div>
      <Header title={title} author={author}/>
      <main id="main" itemProp="mainContentOfPage" itemScope="itemscope" itemType="https://schema.org/Blog">
        {children}
      </main>
      <Footer title={title} author={author} />
    </div>
  )
}

export default Layout
