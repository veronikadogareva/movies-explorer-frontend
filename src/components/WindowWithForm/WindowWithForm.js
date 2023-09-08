import React from 'react';
import { Link } from 'react-router-dom';

import './WindowWithForm.css';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
function WindowWithForm({ logo, title, textButton, textCaption, textLink, linkPath, name, children }) {
  return (
    <section className="window">
      <Logo />
      <h1 className="window__title">{title}</h1>
      <form className="window__form" name={name}>
        <ul className="window__form-group">
          {children}
        </ul>
        <Button text={textButton} />
      </form>
      <div className="window__group">
        <span className="window__caption window__text">{textCaption}</span>
        <Link className="window__link window__text" to={linkPath}>{textLink}</Link>
      </div>

    </section>
  )
}
export default WindowWithForm;