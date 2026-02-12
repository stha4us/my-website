import axios from 'axios';

// Base API URL
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
});

// API Service object
const apiService = {
  // Profile endpoints
  getHomePageCategories: async () => {
    const response = await api.get('/homepages/');
    return response.data;
  },
};

export default apiService;