import { MAIN_API_URL, LOCALHOST_URL } from './constants';
export const register = ({ email, password, name }) => {
  return fetch(`${LOCALHOST_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
};

export const authorize = ({ email, password }) => {
  return fetch(`${LOCALHOST_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
};

