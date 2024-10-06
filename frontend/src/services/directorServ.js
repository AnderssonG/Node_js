import axios from 'axios';

const API_URL = 'http://localhost:5000/director';

export const getDirectors = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createDirector = async (director) => {
    const response = await axios.post(API_URL, director);
    return response.data;
};
