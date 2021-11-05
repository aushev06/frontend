import axios from '../../core/axios';
import {Comment} from '../../interfaces';


export const CommentApi = {
    get: async (token?: string): Promise<Comment[]> => {
        const {data} = await axios.get('/api/comments', {
            headers: {
                Authorization: token ? `Bearer ${token}` : undefined
            }
        });

        return data;
    },

    save: async (postId: number, text: string, toUserId?: number, parentCommentId?: number, commentId?: number) => {
        const body = {
            post_id: postId,
            text,
            user_reply_id: toUserId,
            parent_id: parentCommentId
        };

        if (commentId) {
            const {data} = await axios.put(`/api/comments/${commentId}`, body);

            return data
        }

        const {data} = await axios.post(`/api/comments`, body);

        return data
    }

};
