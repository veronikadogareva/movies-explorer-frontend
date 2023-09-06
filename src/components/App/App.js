import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import './App.css';
import logo from '../../images/logo.svg';
import photoStudent from '../../images/student.png';
import Header from '../basic/Header/Header';
import Main from '../Main/Main';
import Footer from '../basic/Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../user/Profile/Profile';
import Register from '../user/Register/Register';
import Login from '../user/Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Preloader from '../Preloader/Preloader';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();
  const pathsForFooter = ["/", "/movies", "/saved-movies"];
  const pathsForHeader = pathsForFooter + "/profile";
  const showHeader = pathsForHeader.includes(location.pathname);
  const showFooter = pathsForFooter.includes(location.pathname);
  return (
    <div className="page">
      {showHeader && <Header logo={logo} alt="Зеленый квадрат с белым кружком" loggedIn={loggedIn} />}
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/signup" element={<Register logo={logo} />} />
        <Route path="/signin" element={<Login logo={logo} />} />
        <Route path="/" element={<Main photoStudent={photoStudent} />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {showFooter && <Footer />}
      {/* <Preloader /> */}
    </div>
  );
}

export default App;
