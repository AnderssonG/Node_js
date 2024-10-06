import axios from 'axios';

const API_URL = 'http://localhost:5000/media';

export const getMedia = async()=> {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createMedia = async (media) => {
    const response = await axios.post(API_URL, media);
    
    return response.data;
};
