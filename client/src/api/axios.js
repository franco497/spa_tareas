import axios from "axios";

const instanceAxios = axios.create({
    baseURL: "http://localhost:4000/api",
    withCredentials: true
});

export default instanceAxios;