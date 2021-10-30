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
  },

  show: async (id: number) => {
    const { data } = await axios.get('/api/users/' + id);
    return data;
  },

  updateProfile: async (data: unknown) => {
    const formData = new FormData();

    Object.keys(data).forEach((param) => {
      formData.append(param, data[param]);
    })
    await axios.post('/api/user', formData)

  }


};

export const getCookie = () => {
  return axios.get('/sanctum/csrf-cookie');
};
