import React from 'react';
import './Techs.css';
import MainTitle from '../MainTitle/MainTitle';
function Techs() {
  return (
    <section className="techs" id="techs">
      < MainTitle text="Технологии" moreClass="main-title_section_techs" />
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__group">
        <li className="techs__icon">HTML</li>
        <li className="techs__icon">CSS</li>
        <li className="techs__icon">JS</li>
        <li className="techs__icon">React</li>
        <li className="techs__icon">Git</li>
        <li className="techs__icon">Express.js</li>
        <li className="techs__icon">mongoDB</li>
      </ul>
    </section>
  )
}
export default Techs;