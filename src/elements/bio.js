/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby';
import Image from "gatsby-image"

//for fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import "../styles/elements/bio.scss"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      qiitaIcon: file(absolutePath: { regex: "/qiita-icon.png/" }) {
        childImageSharp {
          fixed(width: 15, height: 15) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          social {
            twitter
            qiita
            github
          }
        }
      }
    }
  `)

  // author(name, summary) + social(twitter)
  const social = data.site.siteMetadata
  return (
    <div>
      <Link className="small-link" to={`https://twitter.com/${social.twitter}`}>
        >> Twitter
        <span><FontAwesomeIcon icon={faTwitter} color="#00acee" /></span>
        やってます
      </Link>

      <Link className="small-link" to={`${social.qiita}`}>
        >>Qiita
        <span>
          <Image fixed={data.qiitaIcon.childImageSharp.fixed}/>
        </span>
      </Link>

      <Link className="small-link" to={`${social.github}`}>
        >>Github
        <span>
          <FontAwesomeIcon icon={faGithub} color="black" />
        </span>
      </Link>
    </div>
  )
}

export default Bio
