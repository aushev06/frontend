import axios from '../../core/axios';
import {PostData, Theme} from '../../interfaces';
import { getCookie } from './UserApi';

export const saveImage = (image: File) => {
  const formData = new FormData();
  formData.append('image', image);
  return axios.post('/api/posts/image-by-url', formData);
};

export const savePost = (data: {
  title: string;
  body: any;
  themes?: Theme[]
}) => {
  axios.post('/api/posts', {
    body: data.body,
    title: data.title,
    description: 'Test',
    themes: data.themes || []
  });
};

export const getPosts = async (params = {}): Promise<PostData[]> => {
  console.log(params);
  const { data } = await axios.get('/api/posts', { params: {...params} });

  return data.data;
};

export const getThemes = async (): Promise<Theme[]> => {
  const { data } = await axios.get('/api/posts/themes');

  return data;
};

export const saveByUrl = async (url: string) => {
  return await axios.post('/api/posts/image-by-url', { url });
};

export const showPost = async (slug: string) => {
  const { data } =  await axios.get(`/api/posts/${slug}`);
  return data;
};

export const getPostComments = async (id: number) => {
  const { data } = await axios.get(`/api/posts/${id}/comments`)

  return data;
}

