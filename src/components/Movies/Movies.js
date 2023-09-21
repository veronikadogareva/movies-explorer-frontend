import React, { useContext } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { AppContext } from '../../contexts/AppContext';
function Movies({ searchCards, cards, setIsCheckbox, isCheckbox, handleButtonMore, visibleCards, addedCards, saveOrDeleteCard, isMovieAlreadySaved, serverError }) {
  const { isLoading } = useContext(AppContext);
  return (
    <section className="movies">
      <SearchForm searchCards={searchCards} setIsCheckbox={setIsCheckbox} isCheckbox={isCheckbox}/>
      {isLoading ? <Preloader /> : <>
        {serverError !== "" ? <span className="movies__error">{serverError}</span> :
          <>
            <MoviesCardList cards={cards} visibleCards={visibleCards} addedCards={addedCards} saveOrDeleteCard={saveOrDeleteCard} isMovieAlreadySaved={isMovieAlreadySaved} />
            {cards.length >= (visibleCards + addedCards) ? <button className="movies__button" onClick={handleButtonMore}>Ещё</button> : ''}
          </>}
      </>}
    </section>
  )
}
export default Movies;