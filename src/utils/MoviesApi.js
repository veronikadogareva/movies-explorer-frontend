import { MOVIE_API } from './constants';
class MoviesApi {
  constructor(dataMoviesApi) {
    this._baseUrl = dataMoviesApi.baseUrl;
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
  getCards() {
    // const token = localStorage.getItem('token');
    return this._request('beatfilm-movies', {
      headers: {
        // "authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }
}
const moviesApi = new MoviesApi({
  baseUrl: MOVIE_API,
  headers: {
    // Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
    'Content-Type': 'application/json'
  }
});

export { moviesApi };