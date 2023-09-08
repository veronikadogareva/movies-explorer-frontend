import React from 'react';
import './AboutMe.css';
import MainTitle from '../MainTitle/MainTitle';
import Site from '../Site/Site';
function AboutMe({ img }) {
  return (
    <section className="about-me" id="student">
      <MainTitle text="Студент" moreClass="main-title_section_about-me" />
      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__name">Виталий</h3>
          <h4 className="about-me__job">Фронтенд-разработчик, 30 лет</h4>
          <p className="about-me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и&nbsp;дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С  2015 года работал в компании «СКБ Контур». После того, как&nbsp;прошёл курс по веб&#8209;разработке, начал заниматься фриланс&#8209;заказами&nbsp;и ушёл с постоянной работы.</p>
          <a href="https://github.com/veronikadogareva" className="about-me__link">Github</a>
        </div>
        <img className="about-me__photo" src={img} alt="фотография студента, разработавшего сайт" />
      </div>
      <h5 className="about-me__portfolio">Портфолио</h5>
      <ul className="about-me__sites">
        <Site href="https://veronikadogareva.github.io/how-to-learn/" text="Статичный сайт" />
        <Site href="https://veronikadogareva.github.io/russian-travel/" text="Адаптивный сайт" />
        <Site href="https://veronika.theplace.nomoreparties.co/" text="Одностраничное приложение" />
      </ul>
    </section >
  )
}
export default AboutMe;