import React, { useState } from 'react';
import './MoviesCard.css';
import poster from '../../images/03c773a587466b17d6b9ecff22d22b8d.webp';
import { useLocation } from 'react-router-dom';
function MoviesCard() {
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(false);
  function handleClick() {
    setIsSaved(!isSaved);
  }
  return (
    <li>
      <article className="movies-card">
        <img className="movies-card__image" src={poster} alt="Кадр из фильма" />
        <div className="movies-card__container">
          <h2 className="movies-card__title">Пианист</h2>
          {location.pathname === "/movies" ? (
            <button className="movies-card__button" onClick={handleClick}>
              <div className={`movies-card__inner-button ${isSaved ? "movies-card__inner-button_active" : ""}`} />
            </button>) : (
            <button className="movies-card__button movies-card__button_type_delete" />
          )}
        </div>
        <p className="movies-card__duration">2ч30м</p>
      </article>
    </li>
  )
}
export default MoviesCard;