import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';
import logo from '../../images/logo.svg';
function Logo() {
  return (
        <Link to="/" className="logo">
          <img src={logo} className="logo__image" alt="Зеленый квадрат с белым кругом в центре" />
        </Link>
       
  )
}
export default Logo;