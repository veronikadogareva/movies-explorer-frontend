import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useLocation } from 'react-router-dom';
function SearchForm({ searchCards, setIsCheckbox, isCheckbox }) {
  const location = useLocation();
  const [searchFormState, setSearchFormState] = useState({
    errorText: '',
    searchWord: '',
    isFormValid: false,
  });
  useEffect(() => {
    if (location.pathname==='/movies' && localStorage.getItem('searchWord')) {
      setSearchFormState({ searchWord: JSON.parse(localStorage.getItem('searchWord')) });
    }
  }, []);
  function handleInputChange(evt) {
    setSearchFormState({
      ...searchFormState,
      errorText: '',
      [evt.target.name]: evt.target.value,
      isFormValid: evt.target.closest('form').checkValidity(),
    });

  }
  function handleSubmit(evt) {
    evt.preventDefault();
    setSearchFormState({
      ...searchFormState,
      isFormValid: evt.target.closest('form').checkValidity(),
    });
    if (!searchFormState.isFormValid) {
      return setSearchFormState({
        ...searchFormState,
        errorText: 'Нужно ввести ключевое слово',
      });
    }
    const searchWordLower = searchFormState.searchWord.toLowerCase();
    searchCards(searchWordLower);
  }
  return (
    <section className="search-form">
      <form className="search-form__form" name="form-search" onSubmit={handleSubmit}>
        <input className="search-form__input" id="search-input" type="text" name="searchWord" placeholder="Фильм" required onChange={handleInputChange} minLength='1' value={searchFormState.searchWord} />
        <button className="search-form__button" type="submit" />
      </form>
      <span className="search-form__error">{searchFormState.errorText}</span>
      <FilterCheckbox setIsCheckbox={setIsCheckbox} isCheckbox={isCheckbox} />
    </section>
  )
}
export default SearchForm;