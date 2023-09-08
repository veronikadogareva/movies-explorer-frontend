import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
function Header({ logo, alt, loggedIn }) {

  const location = useLocation();

  return (
    <header className={`header ${location.pathname === "/" ? "header_path_main" : ""}`}>
      <div className="header__group">
        <Logo />
        {loggedIn ? (<Navigation />) : (
          <ul className="header__container">
            <li className="header__item"><Link className="header__link" to="/signup" >Регистрация</Link></li>
            <li className="header__item"><Link className="header__link header__link_type_login" to="/signin">Войти</Link></li>
          </ul>
        )}
      </div>
    </header>
  )
}
export default Header;