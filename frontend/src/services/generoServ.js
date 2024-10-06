import axios from 'axios';

const API_URL = 'http://localhost:5000/genero';

export const getgenero = async() => {

    const response = await axios.get(API_URL);
    return response.data;

};

export const creategenero = async(genero) => {

    const response = await axios.post(API_URL,genero);
    return response.data;

}