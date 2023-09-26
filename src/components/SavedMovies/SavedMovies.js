import React, { useContext } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { AppContext } from '../../contexts/AppContext';
function SavedMovies({ savedCards, saveOrDeleteCard, isMovieAlreadySaved, searchSavedCards, isCheckbox, setIsCheckbox, serverError, filteringCards }) {
  const { isLoading } = useContext(AppContext);
  return (
    <section className="movies">
      <SearchForm searchCards={searchSavedCards} isCheckbox={isCheckbox} setIsCheckbox={setIsCheckbox} filteringCards={filteringCards} />
      {isLoading ? <Preloader /> :
        <>
          {serverError !== "" ? <span className="movies__error">{serverError}</span> :
            <MoviesCardList savedCards={savedCards} saveOrDeleteCard={saveOrDeleteCard} isMovieAlreadySaved={isMovieAlreadySaved} serverError={serverError} />}
        </>}
    </section>
  )
}
export default SavedMovies;