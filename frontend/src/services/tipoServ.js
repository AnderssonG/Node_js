import axios from 'axios';

const API_URL = 'http://localhost:5000/tipo';

export const getTypes = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createType = async (type) => {
    const response = await axios.post(API_URL, type);
    return response.data;
};
