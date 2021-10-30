import axios from "../../core/axios";

export class DirectoryApi {
    public static get = async (params = {categories: true, themes: true}) => {
        const { data } = await axios.get('/api/directories', {
            params
        })

        return data;
    }
}
