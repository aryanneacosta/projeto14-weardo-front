import axios from "axios";

const BASE_URL = `http://localhost:5000`;

function creatingHeaders() {
  const auth = JSON.parse(localStorage.getItem('weardo'));
  const header = {
    headers: {
      Authorization: `Bearer ${auth.token}`
    }
  }
  return header;
}

function singin(body) {
  const promisse = axios.post(`${BASE_URL}/singin`, body);
  return promisse;
}

function singup(body) {
  const promisse = axios.post(`${BASE_URL}/singup`, body);
  return promisse;
}

function getProducts() {
  const header = creatingHeaders();
  const promise = axios.get(`${BASE_URL}/products`, header);
  return promise;
}

function postProducts(body) {
  const promise = axios.post(`${BASE_URL}/products`, body);
  return promise;
}

export { singin, singup, getProducts, postProducts };
