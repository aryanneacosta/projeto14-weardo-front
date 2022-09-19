import axios from "axios";

const BASE_URL = `https://weardo.herokuapp.com`;

function creatingHeaders() {
  const auth = JSON.parse(localStorage.getItem('weardo'));
  const header = {
    headers: {
      Authorization: `Bearer ${auth.token}`,
      email: auth.email
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

function getCartProducts(){
  const header = creatingHeaders();
  const promise = axios.get(`${BASE_URL}/cart`, header);
  return promise;
}

function postBuy(body) {
  const promise = axios.post(`${BASE_URL}/buy`, body);
  return promise;
}

function getSolds(){
  const header = creatingHeaders();
  const promise = axios.get(`${BASE_URL}/buy`, header);
  return promise;
}

function deleteCart(){
  const header = creatingHeaders();
  const promise = axios.delete(`${BASE_URL}/buy`, header);
  return promise;
}


export { singin, singup, getProducts, postProducts, getCartProducts, postBuy, getSolds, deleteCart};
