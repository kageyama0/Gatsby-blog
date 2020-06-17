import React from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

import '../styles/elements/tags.scss'

const TagItems = ({ tags }) => (
  <div className="tags">
    {( tags || []).map(tag => (
      <Link key={tag} className="tag-link" to={`/tags/${tag}/`}>
        <span className="tag-icon"><FontAwesomeIcon icon={faTag} color="gray" /></span>
        {tag}
      </Link>
    ))}
  </div>
);

export default TagItems
