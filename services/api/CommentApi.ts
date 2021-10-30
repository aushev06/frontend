import axios from '../../core/axios';
import { Comment } from '../../interfaces';


export const CommentApi = {
  get: async (): Promise<Comment[]> => {
    const { data } = await axios.get('/api/comments');

    return data;
  },

  create: async (postId: number, text: string, toUserId?: number, parentCommentId?: number) => {
    const { data } = await axios.post(`/api/comments`, {
      post_id: postId,
      text,
      user_reply_id: toUserId,
      parent_id: parentCommentId
    });

    return data
  }

};
