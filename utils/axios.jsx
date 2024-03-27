import axios from "axios";

const instance = axios.create({
    baseURL:"http://localhost:3030/",
    // baseURL:"https://portfolio-backend-p4bo.onrender.com",
    withCredentials:true
})


export default instance