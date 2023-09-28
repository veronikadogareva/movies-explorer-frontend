import React, { useContext, useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { AppContext } from '../../contexts/AppContext';
function Movies({ searchCards, cards, isCheckbox, setIsCheckbox, handleButtonMore, visibleCards, addedCards, saveOrDeleteCard, isMovieAlreadySaved, serverError, filteringCards, setServerError }) {
  const { isLoading } = useContext(AppContext);
  useEffect(()=>{
    setServerError('');
  }, []);
  return (
    <section className="movies">
      <SearchForm searchCards={searchCards} isCheckbox={isCheckbox} setIsCheckbox={setIsCheckbox} filteringCards={filteringCards}/>
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