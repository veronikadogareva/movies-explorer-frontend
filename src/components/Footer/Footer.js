import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__container">
        <p className="footer__copyright footer__text">© {new Date().getFullYear()}</p>
        <nav className="footer__navigation">
          <a className="footer__link footer__text" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
          <a className="footer__link footer__text" href="https://github.com/">Github</a>
        </nav>
      </div>
    </footer>
  )
}
export default Footer;