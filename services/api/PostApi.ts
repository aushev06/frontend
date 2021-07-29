import axios from '../../core/axios';
import { PostData } from '../../interfaces';
import { getCookie } from './UserApi';

export const saveImage = (image: File) => {
  const formData = new FormData();
  formData.append('image', image);
  return axios.post('/api/posts/image-by-url', formData);
};

export const savePost = (data: {
  title: string;
  body: any;
}) => {
  axios.post('/api/posts', {
    body: data.body,
    title: data.title,
    description: 'Test',
  });
};

export const getPosts = async (params = {}): Promise<PostData[]> => {
  const { data } = await axios.get('/api/posts', { ...params });

  return data.data;
};

export const saveByUrl = async (url: string) => {
  return await axios.post('/api/posts/image-by-url', { url });
};

export const showPost = async (slug: string) => {
  return await axios.get(`/v1/post/${slug}`);
};
