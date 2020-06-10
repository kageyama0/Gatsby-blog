import React from 'react';
import { Link } from 'gatsby';

import '../styles/elements/tags.scss';

const TagItems = ({ tags }) => (
  <div className="tags">
    {( tags || []).map(tag => (
      <Link key={tag} className="tag-link" to={`/tags/${tag}/`}>{tag}</Link>
    ))}
  </div>
);

export default TagItems;
