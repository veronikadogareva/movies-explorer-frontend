import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.css';

function Menu({ isMenu, onClose }) {
  return (
    <>
      <div className={`overlay ${isMenu ? "overlay_opened" : ""}`} />
      <ul className={`menu ${isMenu ? "menu_opened" : ""}`}>
        <li className="menu__item"><button className="menu__button" type="button" onClick={onClose} /></li>
        <nav className="menu__navigation">
          <li className="menu__item"><NavLink className={({ isActive }) => `menu__link ${isActive ? "menu__link_active" : ""}`} to="/" onClick={onClose}>Главная</NavLink></li>
          <li className="menu__item"><NavLink className={({ isActive }) => `menu__link ${isActive ? "menu__link_active" : ""}`} to="/movies" onClick={onClose}>Фильмы</NavLink></li>
          <li className="menu__item"><NavLink className={({ isActive }) => `menu__link ${isActive ? "menu__link_active" : ""}`} to="/saved-movies" onClick={onClose}>Сохранённые фильмы</NavLink></li>
          <li className="menu__item"><NavLink className="menu__button-link" to="/profile" onClick={onClose}><span className="menu__button-link-inner">Аккаунт</span></NavLink></li>
        </nav>
      </ul>
    </>
  )
}
export default Menu;