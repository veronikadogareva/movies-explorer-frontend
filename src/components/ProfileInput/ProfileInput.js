import React from 'react';
import './ProfileInput.css';
function ProfileInput({ isEdit, span, type, value, placeholder, name }) {
  return (
    <label className="profile__label" for={`key-${name}`}>
      <span className="profile__span" >{span}</span>
      <input className="profile__input" type={type} value={value} id={`key-${name}`} disabled={!isEdit} placeholder={placeholder} name={name} required/>
    </label>
  )
}
export default ProfileInput;