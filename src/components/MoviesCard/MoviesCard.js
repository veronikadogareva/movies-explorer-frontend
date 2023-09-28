import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
function MoviesCard({ card, img, title, duration, saveOrDeleteCard , isAlreadySaved }) {
  const location = useLocation();

  function handleClick(evt) {
    evt.preventDefault();
    saveOrDeleteCard(location.pathname === '/saved-movies' ? card._id : card);
  }
  function countDuration() {
    const hour = Math.floor(duration / 60);
    const min = duration % 60;
    if (hour === 0) {
      return (`${min} мин`);
    }
    if (min === 0) {
      return (`${hour} ч`);
    }
    return (`${hour} ч ${min} мин`);
  }
  return (
    <li>
      <article className="movies-card">
        <img className="movies-card__image" src={`${location.pathname === "/saved-movies" ? img : `https://api.nomoreparties.co/${img}`} `} alt="Кадр из фильма" />
        <div className="movies-card__container">
          <h2 className="movies-card__title">{title}</h2>
          <button className={`movies-card__button ${location.pathname === "/saved-movies" ? "movies-card__button_type_delete" : ""}`} onClick={handleClick}>
            <div className={`movies-card__inner-button ${isAlreadySaved ? "movies-card__inner-button_active" : ""} ${location.pathname === "/saved-movies" ? "movies-card__inner-button_none" : ""}`} />
          </button>
        </div>
        <p className="movies-card__duration">{countDuration()}</p>
      </article>
    </li>
  )
}
export default MoviesCard;