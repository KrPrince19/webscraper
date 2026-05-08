import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URI,
});

api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.token) {
    config.headers.Authorization = user.token;
  }
  return config;
});

export default api;