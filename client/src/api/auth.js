import axios from "axios";

const API = "http://localhost:4000/api"; //ruta del backend

export const registerRequest = (user) => axios.post(`${API}/register`, user);

export const loginRequest = (data) => axios.post(`${API}/login`, data);
