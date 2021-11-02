import axios from '../../core/axios';
import {Category, PostData, Theme} from '../../interfaces';
import {getCookie} from './UserApi';

export const saveImage = (image: File) => {
    const formData = new FormData();
    formData.append('image', image);
    return axios.post('/api/posts/image-by-url', formData);
};

export const savePost = async (postData: {
    title: string;
    body: any;
    themes?: Theme[],
    status?: string,
    category?: Category,
    id?: number,
}) => {
    let body = {
        body: postData.body,
        title: postData.title,
        description: 'Test',
        themes: postData.themes || [],
        status: postData?.status,
        category: postData.category,
    };

    if (postData?.id) {
        const {data} = await axios.put(`/api/posts/${postData.id}`, body);
        return data

    } else {
        const {data} = await axios.post(`/api/posts`, body);
        return data
    }
};

export const getPosts = async (params = {}, token?: string): Promise<PostData[]> => {
    const {data} = await axios.get('/api/posts', {
        params,
        headers: {
            Authorization: token ? `Bearer ${token}` : ''
        }
    });

    return data.data;
};

export const getThemes = async (): Promise<Theme[]> => {
    const {data} = await axios.get('/api/posts/themes');

    return data;
};

export const saveByUrl = async (url: string) => {
    return await axios.post('/api/posts/image-by-url', {url});
};

export const showPost = async (slug: string, token?: string) => {
    const {data} = await axios.get(`/api/posts/${slug}`, {
        headers: {
            Authorization: token ? `Bearer ${token}` : ''
        }
    });
    return data;
};

export const getPostComments = async (id: number, apiToken?: string) => {
    const {data} = await axios.get(`/api/posts/${id}/comments`, {
        headers: {
            Authorization: apiToken ? `Bearer ${apiToken}` : ''
        }
    })
    console.log(apiToken)

    return data;
}

