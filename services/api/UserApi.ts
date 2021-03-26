import axios from '../../core/axios';

export const UserApi = {
  login: async (email: string, password: string): Promise<any> => {
    const { data } = await axios.post('...', { email, password });
    return data;
  },
};
