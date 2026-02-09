import axios from 'axios';

export const login = async (username, password) => {
  const response = await axios.post('http://utsabshrestha.com/api/token/', {
    username,
    password
  });
  
  localStorage.setItem('access_token', response.data.access);
  localStorage.setItem('refresh_token', response.data.refresh);
  
  return response.data;
};

export const getAuthHeader = () => {
  const token = localStorage.getItem('access_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};