import axios from "../../core/axios";
import {Pagination, User} from "../../interfaces";

export const getSpecialists = async (params): Promise<Pagination<User>> => {
    const { data } = await axios.get('/api/users', { params });

    return data
}


export const getSpecialistCategories = async () => {
    const { data } = await axios.get('/api/users/categories');

    return data;
}
