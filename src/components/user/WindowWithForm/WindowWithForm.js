import React from 'react';
import { Link } from 'react-router-dom';

import './WindowWithForm.css';
import Button from '../Button/Button';
function WindowWithForm({ logo, title, textButton, textCaption, textLink, linkPath, children }) {
  return (
    <section className="window">
      <img className="window__logo" src={logo} alt="Зеленый квадрат с белым кружком" />
      <h2 className="window__title">{title}</h2>
      <form className="window__form">
        <ul className="window__form-group">
        {children}
        </ul>
        <Button text={textButton}/>
      </form>
      <div className="window__group">
        <span className="window__caption window__text">{textCaption}</span>
        <Link className="window__link window__text" to={linkPath}>{textLink}</Link>
      </div>

    </section>
  )
}
export default WindowWithForm;