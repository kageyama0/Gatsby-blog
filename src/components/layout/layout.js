import React from "react"
import { rhythm } from "../../utils/typography"
import Header from "./header.js"
import Footer from "./footer.js"

import 'bootstrap/dist/css/bootstrap.min.css';

// header

const Layout = ({ title, author, children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: `100%`,
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Header title={title} author={author}/>
      <main>{children}</main>
      <Footer title={title} author={author} />
    </div>
  )
}

export default Layout
