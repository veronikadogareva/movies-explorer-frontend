import React from 'react';
import './Input.css';
function Input({ type, labelText, error, placeholder, name, handleChange, value, minLength, maxLength, pattern }) {
  return (
    <li className="input-element">
      <label className="input-element__label" htmlFor={`key-${name}`}>{labelText}</label>
      <input className="input-element__input" type={type} id={`key-${name}`} placeholder={placeholder} name={name} onChange={handleChange} value={value} 
      autoComplete="off" minLength={minLength} maxLength={maxLength} pattern={pattern} required></input>
      <span className={`input-element__error ${name}-error`}>{error}</span>
    </li>
  )
}
export default Input;