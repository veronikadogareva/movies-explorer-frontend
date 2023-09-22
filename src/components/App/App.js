import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
// import debounce from 'lodash/debounce';
import './App.css';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { AppContext } from '../../contexts/AppContext';
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
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import { register, authorize } from '../../utils/Auth';
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [loggedIn, setLoggedIn] = useState(false);
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [isCheckbox, setIsCheckbox] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleCards, setVisibleCards] = useState(0);
  const [addedCards, setAddedCards] = useState(0);
  const [userInfo, setUserInfo] = useState({});
  const [serverError, setServerError] = useState('');
  const [isEditButtonOpen, setIsEditButtonOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const pathsForFooter = ["/", "/movies", "/saved-movies"];
  const pathsForHeader = pathsForFooter + "/profile";
  const showHeader = pathsForHeader.includes(location.pathname);
  const showFooter = pathsForFooter.includes(location.pathname);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    };
    if (windowWidth > 768) {
      setVisibleCards(16);
    } else if (windowWidth > 400) {
      setVisibleCards(8);
    } else {
      setVisibleCards(5);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);
  useEffect(() => {
    tokenCheck();
    if (localStorage.getItem('cards')) {
      setCards(JSON.parse(localStorage.getItem('cards')));
    }
    if (localStorage.getItem('isCheckbox')) {
      setIsCheckbox(JSON.parse(localStorage.getItem('isCheckbox')));
    }
    if (localStorage.getItem('savedCards')) {
      setSavedCards(JSON.parse(localStorage.getItem('savedCards')));
    }
  }, []);
  React.useEffect(() => {
    if (loggedIn) {
      mainApi.getUserInfo()
        .then((data) => {
          setUserInfo(data);
        })
        .catch(console.error);
    }
  }, [loggedIn]);
  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi.getUserInfo()
        .then((data) => {
          setUserInfo(data);
          setLoggedIn(true);
          getSavedCards();
        })
        .then(() => {
          if (location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === 'profile') {
            navigate(location.pathname);
          }
        })
        .catch((err) => {
          console.error(err);
          handleExit();
        });
    } else {
      setLoggedIn(false);
    }
  }
  function clearServerError() {
    setTimeout(() => setServerError(''), 10000);
  }
  function handleRegister({ email, password, name }) {
    setServerError('');
    setIsLoading(true);
    register({ email, password, name })
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        console.error(err);
        setServerError(err.status === 409 ? 'Пользователь с таким email уже зарегистрирован' : 'При регистрации пользователя произошла ошибка.');
      })
      .finally(() => {
        setIsLoading(false);
        clearServerError();
      });
  }
  function handleLogin({ email, password }) {
    setServerError('');
    setIsLoading(true);
    authorize({ email, password })
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          tokenCheck();
        }
      })
      .then(() => navigate('/movies'))
      .catch((err) => {
        console.error(err);
        setServerError(err.status === 401 ? 'Вы ввели неправильный логин или пароль.' : 'При авторизации произошла ошибка.');
      })
      .finally(() => {
        setIsLoading(false);
        clearServerError();
      });
  }
  function handleOpenEditButton() {
    setIsEditButtonOpen(!isEditButtonOpen);
  }
  function handleUpdateUserUnfo({ name, email }) {
    setServerError('');
    setIsLoading(true);
    mainApi.patchUserInfo({ name, email })
      .then((data) => {
        setUserInfo(data);
        setIsEditButtonOpen(!isEditButtonOpen);
      })
      .catch((err) => {
        console.error(err);
        setServerError(err.status === 409 ? 'Пользователь с таким email уже существует.' : 'При обновлении профиля произошла ошибка.');
      })
      .finally(() => {
        setIsLoading(false);
        clearServerError();
      });
  }
  function searchCards(searchWord) {
    setServerError('');
    setIsLoading(true);
    moviesApi.getCards()
      .then((data) => {
        localStorage.setItem('searchWord', JSON.stringify(searchWord));
        localStorage.setItem('isCheckbox', JSON.stringify(isCheckbox));
        const filteredCards = data.filter((card) => {
          const titleRu = card.nameRU.toLowerCase();
          const titleEn = card.nameEN.toLowerCase();
          const isTitleMatch = (titleRu.includes(searchWord) || titleEn.includes(searchWord));
          if (isCheckbox && isTitleMatch) {
            return true;
          }
          if (!isCheckbox && card.duration >= 40 && isTitleMatch) {
            return true;
          }
          return false;
        });
        localStorage.setItem('cards', JSON.stringify(filteredCards));
        if (filteredCards.length !== 0) {
          setCards(filteredCards);
        } else {
          setServerError('Ничего не найдено.');
        }
      })
      .catch((err) => {
        console.error(err);
        setServerError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
      })
      .finally(() => {
        setIsLoading(false);
        clearServerError();
      });
  }
  function searchSavedCards(searchWord) {
    setServerError('');
    const savedCardsFromLocalStorage = JSON.parse(localStorage.getItem('savedCards'));
    const filteredCards = savedCardsFromLocalStorage.filter((card) => {
      const titleRu = card.nameRU.toLowerCase();
      const titleEn = card.nameEN.toLowerCase();
      const isTitleMatch = (titleRu.includes(searchWord) || titleEn.includes(searchWord));
      if (isCheckbox && isTitleMatch) {
        return true;
      }
      if (!isCheckbox && card.duration >= 40 && isTitleMatch) {
        return true;
      }
      return false;
    });
    if (filteredCards.length !== 0) {
      setSavedCards(filteredCards);
    } else {
      setSavedCards([]);
      setServerError('Ничего не найдено.');
      clearServerError();
    }
  }
  function saveOrDeleteCard(card) {
    if (isMovieAlreadySaved(card)) {
      setIsLoading(true);
      mainApi.deleteCard(getHexId(card))
        .then((card) => {
          setSavedCards((state) => state.filter((c) => c._id !== card._id));
        })
        .catch(console.error)
        .finally(setIsLoading(false));
    } else {
      setIsLoading(true);
      mainApi.postNewCard(card)
        .then((newCard) => {
          getSavedCards();
        })
        .catch(console.error)
        .finally(setIsLoading(false));
    }
  }
  function deleteCard(card) {
    setIsLoading(true);

    mainApi.deleteCard(card._id)
      .then((card) => {
        setSavedCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch(console.error)
      .finally(setIsLoading(false));
  }
  function getSavedCards() {
    setServerError('');
    setIsLoading(true);
    mainApi.getSavedCards()
      .then((cards) => {
        if (cards) {
          localStorage.setItem('savedCards', JSON.stringify(cards));
          setSavedCards(cards);
        }
        else {
          setServerError('Вы пока не добавили ни одного фильма.');
        }
      })
      .catch((err) => {
        console.error(err);
        setServerError('На сервере произошла ошибка.');
      })
      .finally(() => {
        setIsLoading(false);
        clearServerError();
      });
  }
  function handleButtonMore() {
    if (visibleCards >= 5) {
      setAddedCards(addedCards + Math.min(Math.ceil(visibleCards / 4), 4));
    } else {
      setAddedCards(addedCards * 2);
    }
  }
  function handleExit() {
    localStorage.clear();
    tokenCheck();
  }
  function isMovieAlreadySaved(card) {
    if (savedCards) {
      return savedCards.some((movie) => movie.movieId === card.id);
    }
  }
  function getHexId(card) {
    if (savedCards) {
      return savedCards.find((movie) => movie.movieId === card.id)._id;
    };
  };
  return (
    <div className="page">
      <AppContext.Provider value={{ loggedIn, isLoading }}>
        {showHeader && <Header />}
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/signup" element={<Register handleRegister={handleRegister} serverError={serverError} />} />
          <Route path="/signin" element={<Login handleLogin={handleLogin} serverError={serverError} />} />
          <Route path="/" element={<Main photoStudent={photoStudent} />} />
          <Route path="/movies" element={<ProtectedRoute
            element={Movies}
            searchCards={searchCards}
            cards={cards}
            setIsCheckbox={setIsCheckbox}
            isCheckbox={isCheckbox}
            handleButtonMore={handleButtonMore}
            visibleCards={visibleCards}
            addedCards={addedCards}
            saveOrDeleteCard={saveOrDeleteCard}
            isMovieAlreadySaved={isMovieAlreadySaved}
            serverError={serverError}
          />} />
          <Route path="/saved-movies" element={<ProtectedRoute
            element={SavedMovies}
            savedCards={savedCards}
            saveOrDeleteCard={deleteCard}
            isMovieAlreadySaved={isMovieAlreadySaved}
            searchSavedCards={searchSavedCards}
            setIsCheckbox={setIsCheckbox}
            isCheckbox={isCheckbox}
            serverError={serverError} />} />
          <Route path="/profile" element={<ProtectedRoute
            handleOpenEditButton={handleOpenEditButton}
            isEditButtonOpen={isEditButtonOpen}
            serverError={serverError}
            element={Profile}
            handleExit={handleExit}
            userInfo={userInfo}
            handleUpdateUserUnfo={handleUpdateUserUnfo} />} />
        </Routes>
        {showFooter && <Footer />}
      </AppContext.Provider>
    </div>
  );
}

export default App;
