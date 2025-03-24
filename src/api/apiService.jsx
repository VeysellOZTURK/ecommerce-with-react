import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'X-API-Key': import.meta.env.VITE_API_KEY,
    'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
  }
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const getProducts = async () => {
  try {
    const response = await api.get('/Categories');
    console.log(response.data.data)
    return Array.isArray(response.data.data) ? response.data.data : [];
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
// export const getProducts = async () => {
//   try {
//     const response = await api.post('/Products/List');
//     console.log(response.data.data)
//     return Array.isArray(response.data.data) ? response.data.data : [];
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     throw error;
//   }
// };

export default api;