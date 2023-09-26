import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import './Navigation.css';
import Menu from '../Menu/Menu';
function Navigation({ }) {
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
    <nav className="navigation">
      <ul className="navigation__container">
        <li className="navigation__item"><NavLink className={({ isActive }) => `navigation__link ${location.pathname === '/' ? "navigation__link_path_main" : ""} ${isActive ? "navigation__link_active" : ""}`} to="/movies">Фильмы</NavLink></li>
        <li className="navigation__item"><Link className={`navigation__link ${location.pathname === '/' ? "navigation__link_path_main" : ""} `} to="/saved-movies">Сохранённые фильмы</Link></li>
        <li className="navigation__item"><button className={`navigation__button ${location.pathname === "/" ? "navigation__button_path_main" : ""}`} onClick={handleMenuButton}></button></li>
      </ul>
      <Link className="navigation__profile" to="/profile">Аккаунт</Link>
      <Menu isMenu={isMenu} onClose={handleMenuButton} />
    </nav>
  )
}
export default Navigation;