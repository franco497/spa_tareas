import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { createTaskRequest, getTasksRequest, getTaskRequest, updateTaskRequest, deleteTaskRequest } from '../api/tasks';
import TaskModal from '../components/TaskModal';

const TasksPage = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [message, setMessage] = useState("");
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
      console.error("Error al obtener las tareas:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const onSubmit = async (data) => {
    try {
      console.log("Enviando datos:", data);
      const res = await createTaskRequest(data);
      console.log("Respuesta del servidor:", res);
      setMessage("Task created successfully!");
      reset();
      fetchTasks(); // Obtener las tareas nuevamente después de crear una nueva tarea
    } catch (error) {
      console.error("Error al crear la tarea:", error);
      setMessage("Failed to create task.");
    }
  };

  const handleTaskClick = async (taskId) => {
    try {
      const res = await getTaskRequest(taskId);
      setSelectedTask(res.data);
    } catch (error) {
      console.error("Error al obtener la tarea:", error);
    }
  };

  const handleTaskClose = () => {
    setSelectedTask(null);
  };

  const handleTaskUpdate = async (updatedTask) => {
    try {
      await updateTaskRequest(updatedTask._id, updatedTask);
      setMessage("Task updated successfully!");
      fetchTasks(); // Actualizar la lista de tareas
      setSelectedTask(null); // Cerrar el modal
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
      setMessage("Failed to update task.");
    }
  };

  const handleTaskDelete = async (taskId) => {
    try {
      await deleteTaskRequest(taskId);
      setMessage("Task deleted successfully!");
      fetchTasks(); // Actualizar la lista de tareas
      setSelectedTask(null); // Cerrar el modal
    } catch (error) {
      console.error("Error al eliminar la tarea:", error);
      setMessage("Failed to delete task.");
    }
  };

  return (
    <div>
      <div className="lg:ml-10 m-3 lg:w-[40%] md:w-[50%] w-[70%] border-2 border-solid border-fuchsia-600 bg-[#5D9C59] text-white rounded-md">
        <h2 className="text-2xl font-bold lg:my-12 my-3 text-center">Create Task</h2>
        {message && <p className="text-2xl font-bold lg:my-12 my-3 text-center">{message}</p>}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mx-6">
            <label htmlFor="title" className="text-lg font-medium">Title</label>
            <input
              className="border border-gray-300 text-yellow-800 px-4 py-2 rounded-md my-2"
              type="text"
              placeholder="Title"
              {...register("title", { required: true })}
            />
            {errors.title && <p className="text-red-600">Title is required</p>}
          </div>
          <div className="flex flex-col mx-6">
            <label htmlFor="description" className="text-lg font-medium">Description</label>
            <input
              className="border border-gray-300 text-yellow-800 px-4 py-2 rounded-md my-2"
              type="text"
              placeholder="Description"
              {...register("description", { required: true })}
            />
            {errors.description && <p className="text-red-600">Description is required</p>}
          </div>
          <div className="flex flex-col mx-6">
            <label htmlFor="date" className="text-lg font-medium">Date</label>
            <input
              className="border border-gray-300 text-yellow-800 px-4 py-2 rounded-md my-2"
              type="date"
              {...register("date")}
            />
          </div>
          <div className="flex justify-center lg:pt-8 lg:mt-12 pb-5">
            <button type="submit" className="bg-white text-[#5D9C59] lg:py-4 py-2 px-12 rounded-md shadow-md hover:bg-gray-100 transition duration-300">Create Task</button>
          </div>
        </form>
      </div>
      <div className="lg:pl-10 lg:pt-10 lg:w-[60%] w-[70%] flex flex-col items-center justify-center relative">
        <div className="bg-green-50 px-2 pt-6 pb-6 rounded-lg shadow-md text-green-900 w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">Tasks List</h2>
          {tasks.length > 0 ? (
            <ul>
              {tasks.map(task => (
                <li key={task._id} className="mb-4 p-4 border rounded-lg shadow-sm bg-white" onClick={() => handleTaskClick(task._id)}>
                  <h3 className="text-xl font-semibold">{task.title}</h3>
                  <p>{task.description}</p>
                  <p>{new Date(task.date).toLocaleDateString()}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center">No tasks found.</p>
          )}
        </div>
      </div>
      {selectedTask && (
        <TaskModal
          task={selectedTask}
          onClose={handleTaskClose}
          onUpdate={handleTaskUpdate}
          onDelete={handleTaskDelete}
        />
      )}
    </div>
  );
};

export default TasksPage;

