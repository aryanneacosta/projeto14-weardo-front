import axios from "axios";

const BASE_URL = `http://localhost:5000`;

function singin(body) {
  const promisse = axios.post(`${BASE_URL}`, body);
  return promisse;
}

function singup(body) {
  const promisse = axios.post(`${BASE_URL}`, body);
  return promisse;
}

export { singin, singup };
