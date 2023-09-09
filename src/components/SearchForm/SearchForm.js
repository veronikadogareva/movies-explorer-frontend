import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form" name="form-search">
        <input className="search-form__input" id="search-input" type="text" name="search" placeholder="Фильм" required/>
        <button className="search-form__button" type="submit" />
      </form>
      <FilterCheckbox />
    </section>
  )
}
export default SearchForm;