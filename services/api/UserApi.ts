import axios from '../../core/axios';
import {User} from "../../interfaces";

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

  getMe: async (token?: string) => {
    const { data } = await axios.get('/api/user', {
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    });
    return data;
  },

  getNotifications: async (token?: string) => {
    const { data } = await axios.get('/api/user/notifications', {
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    });
    return data;
  },

  show: async (id: number) => {
    const { data } = await axios.get('/api/users/' + id);
    return data;
  },

  updateProfile: async (data: Partial<User>, id: number) => {
    const formData = new FormData();

    Object.keys(data).forEach((param) => {
      if (param !== 'links') {
        formData.append(param, data[param]);
      }
    })

    if (data.links?.length) {
      data.links.map((l, key) => {
        formData.append(`links[${key}]`, l);
      })
    }

    await axios.patch(`/api/user/${id}`, data)

  }


};

export const getCookie = () => {
  return axios.get('/sanctum/csrf-cookie');
};
