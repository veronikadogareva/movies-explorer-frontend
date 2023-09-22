export const BASE_URL = 'https://api.veronika.movie.nomoredomainsicu.ru';
// export const BASE_URL = 'http://localhost:4000';
export const register = ({ email, password, name }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
};

export const authorize = ({email, password}) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password}),
  })
  .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
};

