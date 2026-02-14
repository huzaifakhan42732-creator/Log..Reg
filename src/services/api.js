import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/auth',
  withCredentials: true, // Send cookies with every request
});

export const register = (userData) => API.post('/register', userData);
export const login = (credentials) => API.post('/login', credentials);
export const logout = () => API.post('/logout');
export const getProfile = () => API.get('/profile');