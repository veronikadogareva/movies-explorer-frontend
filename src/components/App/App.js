import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import './App.css';
import photoStudent from '../../images/student.png';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Preloader from '../Preloader/Preloader';
function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const location = useLocation();
  const pathsForFooter = ["/", "/movies", "/saved-movies"];
  const pathsForHeader = pathsForFooter + "/profile";
  const showHeader = pathsForHeader.includes(location.pathname);
  const showFooter = pathsForFooter.includes(location.pathname);
  return (
    <div className="page">
      {showHeader && <Header loggedIn={loggedIn} />}
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
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
