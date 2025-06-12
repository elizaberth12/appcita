// src/api/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api', // ✅ importante
  withCredentials: true
});

export default instance;
