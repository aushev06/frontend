import axios from "../../core/axios";

export const getSpecialists = async (params) => {
    const { data } = await axios.get('/api/users', { params });

    return data
}


export const getSpecialistCategories = async () => {
    const { data } = await axios.get('/api/users/categories');

    return data;
}
