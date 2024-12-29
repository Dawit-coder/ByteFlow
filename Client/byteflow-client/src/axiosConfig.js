import axios, { Axios } from 'axios';

const axiosBase = axios.create({
    baseURL: "https://byteflow-production.up.railway.app/api"
})

export default axiosBase