import axios from 'axios';

const api = axios.create();

api.defaults.baseURL = process.env.REACT_APP_BASE_URL;

api.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: !!localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : ''
};

export default api;
