import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  const navigate = useNavigate();
  function handleGoBack() {
    navigate(-1);
  }
  return (
    <section className="page-not-found">
      <h2 className="page-not-found__title">404</h2>
      <h3 className="page-not-found__subtitle">Страница не найдена</h3>
      <button className="page-not-found__button" onClick={handleGoBack}>Назад</button>
    </section>
  )
}
export default PageNotFound;