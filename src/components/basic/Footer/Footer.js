import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <ul className="footer__container">
        <li className="footer__item"><p className="footer__copyright footer__text">© {new Date().getFullYear()}</p></li>
        <li className="footer__item"><nav className="footer__navigation">
          <a className="footer__link footer__text" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
          <a className="footer__link footer__text" href="https://github.com/">Github</a>
        </nav></li>
      </ul>
    </footer>
  )
}
export default Footer;