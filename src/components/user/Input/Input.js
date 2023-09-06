import React from 'react';
import './Input.css';
function Input({ type, key, labelText, error }) {
  return (
    <li className="form__item">
      <label className="form__label" for={key}>{labelText}</label>
      <input className="form__input" type={type} id={key}></input>
      <span className={`form__input-error ${key}-input-error`}>{error}</span>
    </li>
  )
}
export default Input;