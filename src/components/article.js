import React from "react"
import { Link } from "gatsby"

import TagItems from "../elements/tagItems"
import {
  Col
} from 'react-bootstrap'

import "../styles/components/article.scss"

const Article = ({ node }) => {
  const text = node.frontmatter.description || node.frontmatter.excerpt
  const tags = node.frontmatter.tags

  return (
    <Col xs={12} className="wrap">
      <p className="meta"><time itemProp="datepublished">{node.frontmatter.date}</time></p>
      <h2 className="title">
        <Link itemProp="url" style={{ boxShadow: `none` }} to={node.fields.slug}>
          {node.frontmatter.title}
        </Link>
      </h2>

      <TagItems key={tags} tags={tags} />
      <section>
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </section>
    </Col>
  )

};


export default Article;
