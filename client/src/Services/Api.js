import axios from 'axios';
// const dotenv = require('dotenv');
// dotenv.config();

const API = axios.create({
    baseURL: "http://localhost:4000/api/v1"
})

console.log("hiii");
// console.log(process.env.REACT_BASE_URL)

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('token')){
        req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return req;
})

export default API;