/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

//for fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

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
  const social = data.site.siteMetadata.social
  return (
    <div>
      <div className="cube flip-to-top twitter">
        <div className="default-state">
          <FontAwesomeIcon icon={faExternalLinkAlt} color=" white" />
          <span> Twitter</span>
        </div>

        <div className="active-state twitter">
          <FontAwesomeIcon icon={faTwitter} color=" #019AD1" />
          <a className="small-link" href={`https://twitter.com/${social.twitter}`}>
            Follow me!
          </a>
        </div>
      </div>

      <div className="cube flip-to-top qiita">
        <div className="default-state">
          <FontAwesomeIcon icon={faExternalLinkAlt} color=" white" />
          <span> Qiita</span>
        </div>

        <div className="active-state qiita">
          <Image fixed={data.qiitaIcon.childImageSharp.fixed} />
          <span>
            <a className="small-link" href={`${social.qiita}`}>
              Qiitaの投稿記事一覧へ
            </a>
          </span>
        </div>
      </div>

      <div className="cube flip-to-top github">
        <div className="default-state">
          <FontAwesomeIcon icon={faExternalLinkAlt} color=" white" />
          <span> Github</span>
        </div>

        <div className="active-state github">
          <FontAwesomeIcon icon={faGithub} color="black" />
          <span>
            <a className="small-link" href={`${social.github}`}>
              Source Code
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Bio
