import React, { useEffect } from 'react';
import './FilterCheckbox.css';
import { useLocation } from 'react-router-dom';

function FilterCheckbox({ isCheckbox, setIsCheckbox, filteringCards, searchWord }) {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setIsCheckbox(false);
    } else {
      setIsCheckbox(JSON.parse(localStorage.getItem('isCheckbox')));
    }
  }, []);
  function handleCheckboxChange() {
    setIsCheckbox(!isCheckbox);
    filteringCards(searchWord, !isCheckbox);
  }
  return (
    <div className="filter-checkbox">
      <input className="filter-checkbox__input" type="checkbox" name="checkbox" id="checkbox-input" checked={isCheckbox} onChange={handleCheckboxChange} />
      <div className="filter-checkbox__icon" onClick={handleCheckboxChange}><div className="filter-checkbox__inner-icon"></div></div>
      <label className="filter-checkbox__span" htmlFor="checkbox-input" >Короткометражки</label>
    </div>
  )
}
export default FilterCheckbox;