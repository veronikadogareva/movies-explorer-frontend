import React from 'react';
import './Site.css';
function Site({ href, text }) {
  return (
    <li className="site">
      <a className="site__link" href={href}>
        <p className="site__text">
          {text}
        </p>
      </a>
    </li>
  )
}
export default Site;