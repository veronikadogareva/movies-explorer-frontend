import React from 'react';
import './Site.css';
function Site({href, text}) {
  return (
    <li className="about-me__site">
      <a className="about-me__link-site" href={href}>{text}</a>
      <a className="about-me__link-site about-me__link-site_type_arrow" href={href}>↗</a>
    </li>
  )
}
export default Site;