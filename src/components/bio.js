/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

//for fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/cat-prof.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          social {
            twitter
          }
        }
      }
    }
  `)

  // author(name, summary) + social(twitter)
  const social = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2),
      }}
    >
      <p
        style={{ fontSize: `.750rem` }}
      >
        <a  href={`https://twitter.com/${social.twitter}`}>
          >> Twitter
          <span><FontAwesomeIcon icon={faTwitter} color="#00acee" /></span>
          やってます
        </a>
      </p>
    </div>
  )
}

export default Bio
