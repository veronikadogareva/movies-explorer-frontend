import React from 'react';
import './Button.css';
function Button({text}) {
  return (
    <button className="button" type="submit">{text}</button>
  )
}
export default Button;