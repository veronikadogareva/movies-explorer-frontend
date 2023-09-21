import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
function MoviesCardList({ cards, visibleCards, addedCards, saveOrDeleteCard, savedCards, isMovieAlreadySaved }) {
  const location = useLocation();
  return (
    <ul className={`movies-card-list ${location.pathname === '/saved-movies' ? "movies-card-list_saved" : ""}`}>
      {location.pathname === '/movies' ?
        cards.slice(0, visibleCards + addedCards).map((card) => {
          const isAlreadySaved = isMovieAlreadySaved(card);
          return <MoviesCard card={card} key={card.id} img={card.image.url} title={card.nameRU} duration={card.duration} saveOrDeleteCard={saveOrDeleteCard} isAlreadySaved={isAlreadySaved}/>;
        }) : savedCards?.map((card) => {
          const isAlreadySaved = isMovieAlreadySaved(card);
          return <MoviesCard card={card} key={card.id} img={card.image} title={card.nameRU} duration={card.duration} saveOrDeleteCard={saveOrDeleteCard} isAlreadySaved={isAlreadySaved}/>;
        })}
    </ul>
  )
}
export default MoviesCardList;