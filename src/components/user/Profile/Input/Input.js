import React from 'react';
import './Input.css';
function Input({ isEdit, id, span, type, value }) {
  return (
    <label className="profile__label" for={id}>
      <span className="profile__span">{span}</span>
      <input className="profile__input" type={type} value={value} id={id} disabled={!isEdit} />
    </label>
  )
}
export default Input;