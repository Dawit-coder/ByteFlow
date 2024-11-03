import axios, { Axios } from 'axios';

const axiosBase = axios.create({
    baseURL: "localhost:5000/api"
})

export default Axios