import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import './Navigation.css';
import Menu from '../Menu/Menu';
function Navigation() {
  const location = useLocation();
  const [isMenu, setIsMenu] = useState(false);
  function handleMenuButton() {
    setIsMenu(!isMenu);
    if (!isMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
  return (
    <nav className="header__navigation">
      <ul className="header__container">
        <li><NavLink className={({ isActive }) => `header__nav-link header__nav-link_first ${location.pathname === '/' && "header__link_path_main"} ${isActive && "header__nav-link_active"}`} to="/movies">Фильмы</NavLink></li>
        <li><NavLink className={({ isActive }) => `header__nav-link ${location.pathname === '/' && "header__link_path_main"} ${isActive && "header__link_active"}`} to="/saved-movies">Сохранённые фильмы</NavLink></li>
        <li><button className={`header__button ${location.pathname === "/" && "header__button_path_main"}`} onClick={handleMenuButton}></button></li>
      </ul>
      <Link className="header__profile" to="/profile">Аккаунт</Link>
      <Menu isMenu={isMenu} onClose={handleMenuButton} />
    </nav>
  )
}
export default Navigation;