const axios = require('axios');
require('dotenv').config();

const API_URL = process.env.API_URL;
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

let token = null;

async function login() {
  const response = await axios.post(`${API_URL}/api/auth/login`, {
    username: USERNAME,
    password: PASSWORD,
  });
  token = response.data.token;
}

async function getFilms() {
  if (!token) {
    await login();
  }
  const response = await axios.get(`${API_URL}/api/films`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

module.exports = { getFilms };
