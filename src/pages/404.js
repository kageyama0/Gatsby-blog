import React from "react"
import { graphql } from "gatsby"

import Seo from "../elements/seo"

const NotFoundPage = () => {
  return (
    <div>
      <Seo title="404: Not Found" />
      <h1>あーこれ404エラーっすねー</h1>
      <p>多分このページ存在しないんで、URLちゃんと入力してください。</p>
    </div>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
