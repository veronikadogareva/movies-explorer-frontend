import React from 'react';
import './MainTitle.css';
function MainTitle({ text, moreClass }) {
  return (
    <h2 className={`main-title ${moreClass}`}>{text}</h2>
  )
}
export default MainTitle;