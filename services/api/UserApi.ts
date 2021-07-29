import axios from '../../core/axios';

export const UserApi = {
  login: async (email: string, password: string): Promise<any> => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('remember', '1');

    const { data } = await axios.post('/login', formData, {
      maxRedirects: 0,
    });

    return data;
  },

  getMe: async () => {
    const { data } = await axios.get('/api/user');
    return data;
  }

};

export const getCookie = () => {
  return axios.get('/sanctum/csrf-cookie');
};