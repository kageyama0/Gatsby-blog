import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import TagItems from "../elements/tagItems"
import "../styles/components/article.scss"

const Article = ({ node }) => {
  const text = node.frontmatter.description || node.frontmatter.excerpt
  const tags = node.frontmatter.tags

  return (
    <div className="article-wrap">
      <p className="article-date">
        <time itemProp="datepublished">{node.frontmatter.date}</time>
      </p>
      <h2 className="article-title">
        <Link itemProp="url" style={{ boxShadow: `none` }} to={node.fields.slug}>
          {node.frontmatter.title}
        </Link>
      </h2>

      <TagItems key={tags} tags={tags} />
      <section>
        <Img
          fluid={node.frontmatter.image.childImageSharp.fluid}
        />
        <p
          className="article-description"
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <div className="article-readmore" >
          <Link itemProp="url" style={{ boxShadow: `none` }} to={node.fields.slug}>
            Read More
          </Link>
        </div>

      </section>
    </div>
  )

};


export default Article;
