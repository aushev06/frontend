import axios from '../../core/axios';
import { Comment } from '../../interfaces';


export const CommentApi = {
  get: async (): Promise<Comment[]> => {
    const { data } = await axios.get('/api/comments');

    return data;
  },
};
