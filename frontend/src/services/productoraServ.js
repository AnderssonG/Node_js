import axios from 'axios';

const API_URL = 'http://localhost:5000/productora';

export const getProducers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createProducer = async (producer) => {
    const response = await axios.post(API_URL, producer);
    return response.data;
};
