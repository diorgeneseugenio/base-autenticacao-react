import axios from "axios";

export const apiController = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

apiController.interceptors.request.use(async config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});