import { MOVIE_API_PATH_FOR_THUMBNAIL, MAIN_API_URL, LOCALHOST_URL } from './constants';
class MainApi {
  constructor(dataMainApi) {
    this._baseUrl = dataMainApi.baseUrl;
  }
  _checkResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  _request(url, options) {
    return fetch(`${this._baseUrl}/${url}`, options).then(this._checkResult)
  }
  getUserInfo() {
    const token = localStorage.getItem('token');
    return this._request('users/me', {
      headers: {
        "authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }
  patchUserInfo({ name, email }) {
    const token = localStorage.getItem('token');
    return this._request('users/me', {
      method: 'PATCH',
      headers: {
        "authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email })
    });
  }
  postNewCard(card) {
    const token = localStorage.getItem('token');
    return this._request('movies', {
      method: 'POST',
      headers: {
        "authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: MOVIE_API_PATH_FOR_THUMBNAIL + card.image.url,
        trailerLink: card.trailerLink,
        thumbnail: MOVIE_API_PATH_FOR_THUMBNAIL + card.image.formats.thumbnail.url,
        movieId: card.id,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
      })
    });
  }
  getSavedCards() {
    const token = localStorage.getItem('token');
    return this._request('movies', {
      headers: {
        "authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }
  deleteCard(id) {
    const token = localStorage.getItem('token');
    return this._request(`movies/${id}`, {
      method: 'DELETE',
      headers: {
        "authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }
  checkTo
}
const mainApi = new MainApi({
  baseUrl: LOCALHOST_URL,
  headers: {
    // Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
    'Content-Type': 'application/json'
  }
});

export { mainApi };