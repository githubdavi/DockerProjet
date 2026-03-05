import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_AUTH_SERVICE_URL || 'http://localhost:3001';
const authService = axios.create({
  baseURL: API_BASE_URL,
});
// Intercepteur pour ajouter le token d'authentification aux requêtes
authService.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

console.log("Base URL for Auth Service:", API_BASE_URL);

export function register(data) {
  return authService.post('/register', data);
}

export function login(credentials) {
  return authService.post('/login', credentials);
}

export function getProfile() {
  return authService.get('/profile');
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
}
