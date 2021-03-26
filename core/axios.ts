import Axios from 'axios';

export const API_URL = 'http://api.ingternet.ru';

const instance = Axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = window.localStorage.getItem('token');
  }
  return config;
});

export default instance;
