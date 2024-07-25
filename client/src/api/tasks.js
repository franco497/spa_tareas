import instanceAxios from "./axios";

export const getTasksRequest = () => instanceAxios.get('/tasks');
export const getTaskRequest = (id) => instanceAxios.get(`/tasks/${id}`);
export const createTaskRequest = (task) => instanceAxios.post('/tasks', task);
export const updateTaskRequest = (id, task) => instanceAxios.put(`/tasks/${id}`, task);
export const deleteTaskRequest = (id) => instanceAxios.delete(`/tasks/${id}`);
