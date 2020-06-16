import React from "react"
import { Link } from 'gatsby'
//import Image from "gatsby-image"

//for fontawesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Breadcrumb = ({ location }) => {
  //console.log(location)
  return (
    <div>
      <Link to={`${location}`} >{location}</Link>
    </div>
  )
}

export default Breadcrumb
