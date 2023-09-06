import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
function MoviesCardList() {
  const location = useLocation();
  return (
    <ul className={`movies-card-list ${location.pathname === '/saved-movies' && "movies-card-list_saved"}`}>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
    </ul>
  )
}
export default MoviesCardList;