import axios from 'axios';

const api = axios.create({
    baseURL: 'https://trama-backend.herokuapp.com', 
});

export default api;

