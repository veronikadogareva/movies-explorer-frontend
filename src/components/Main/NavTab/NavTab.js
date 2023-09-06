import React from 'react';
import './NavTab.css';
function NavTab() {
  return (
    <section className="nav-tab">
      <nav className="nav-tab__navigation">
        <ul className="nav-tab__links">
          <li className="nav-tab__item"><a className="nav-tab__link" href="#about-project">О проекте</a></li>
          <li className="nav-tab__item"><a className="nav-tab__link" href="#techs">Технологии</a></li>
          <li className="nav-tab__item"><a className="nav-tab__link nav-tab__link_last" href="#student">Студент</a></li>
        </ul>
      </nav>
    </section>
  )
}
export default NavTab;