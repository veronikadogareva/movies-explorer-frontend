import React from 'react';
import './AboutProject.css';
import MainTitle from '../MainTitle/MainTitle';
function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <MainTitle text="О проекте" />
      <ul className="about-project__container">
        <li className="about-project__group">
          <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about-project__group">
          <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <table className="about-project__table">
      <tbody>
        <tr>
          <td className="about-project__column about-project__column_first">1 неделя</td>
          <td className="about-project__column about-project__column_second">4 недели</td>
        </tr>
        <tr>
          <td className="about-project__caption">Back-end</td>
          <td className="about-project__caption">Front-end</td>
        </tr>
        </tbody>
      </table>
    </section>
  )
}
export default AboutProject;