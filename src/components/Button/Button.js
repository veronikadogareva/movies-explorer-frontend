import React from 'react';
import './Button.css';
function Button({ text, isDisable, serverError }) {
  return (
    <>
    <span className="error">{serverError}</span>
    <button className="button" type="submit" disabled={isDisable}>{text}</button>
    </>
  )
}
export default Button;