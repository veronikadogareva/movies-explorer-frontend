import React, { useState } from 'react';

import './FilterCheckbox.css';
function FilterCheckbox() {
  const [isCheckbox, setIsCheckedCheckbox] = useState(false);
  function handleCheckbox() {
    setIsCheckedCheckbox(!isCheckbox);
  }
  function handleCheckboxChange() {

  }
  return (
    <label className="filter-checkbox">
      <input className="filter-checkbox__input" type="checkbox" name="checkbox" id="checkbox-input" checked={isCheckbox} onChange={handleCheckboxChange} />
      <div className="filter-checkbox__icon" onClick={handleCheckbox}><div className="filter-checkbox__inner-icon"></div></div>
      <span className="filter-checkbox__span">Короткометражки</span>
    </label>
  )
}
export default FilterCheckbox;