import React from 'react';

import './FilterCheckbox.css';
function FilterCheckbox({ setIsCheckbox, isCheckbox }) {
  function handleCheckboxChange() {
    setIsCheckbox(!isCheckbox);
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