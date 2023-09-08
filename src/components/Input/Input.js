import React from 'react';
import './Input.css';
function Input({ type, labelText, error, placeholder, name }) {
  return (
    <li className="input-element">
      <label className="input-element__label" for={`key-${name}`}>{labelText}</label>
      <input className="input-element__input" type={type} id={`key-${name}`} placeholder={placeholder} name={name} required></input>
      <span className={`input-element__error ${name}-error`}>{error}</span>
    </li>
  )
}
export default Input;