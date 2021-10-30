import axios from "../../core/axios";

export const setLike = async (id: number, type = 'post', like?: 'like' | 'dislike' ) => {
    const { data } = await axios.post('/api/likes', {
        type,
        id,
        like: like ? like : null
    })
}
