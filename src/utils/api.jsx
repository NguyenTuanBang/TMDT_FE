// src/api/axios.js
import axios from "axios";

const api = axios.create({
  // baseURL: `${process.env.VITE_LOCAL_PORT}/api`,
  baseURL: `${process.env.VITE_DEPLOY_PORT}/api`,
  withCredentials: true,
});

export default api;
