import instanceAxios from "./axios";

//const API = "http://localhost:4000/api"; //ruta del backend

export const registerRequest = (user) => instanceAxios.post(`/register`, user);

export const loginRequest = (data) => instanceAxios.post(`/login`, data);

export const logoutRequest = () => instanceAxios.post(`/logout`);

export const getProfileRequest = () => instanceAxios.get('/profile');

export const updateProfileRequest = (data) => instanceAxios.put(`/profile`, data);
