import React from 'react';
import './ProfileInput.css';
function ProfileInput({ isEdit, span, type, value, placeholder, name, onChange, pattern, errorText }) {
  return (
    <label className="profile__label" htmlFor={`key-${name}`}>
      <span className="profile__span" >{span}</span>
      <input className="profile__input" type={type} value={value} id={`key-${name}`} disabled={!isEdit} placeholder={placeholder} name={name} required onChange={onChange} pattern={pattern}/>
      <span className={`profile__error ${name}-error`}>{errorText}</span>
    </label>
  )
}
export default ProfileInput;