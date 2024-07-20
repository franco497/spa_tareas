import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const TasksPage = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  /*
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("/tasks");
        setTasks(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (isAuthenticated) {
      fetchTasks();
    }
  }, [isAuthenticated]);
*/
  // Agregar o editar tarea
  /*
  const onSubmit = async (data) => {
    try {
      if (editingTask) {
        await axios.put(`/tasks/${editingTask._id}`, data);
      } else {
        await axios.post("/tasks", data);
      }
      // Actualizar lista de tareas
      const res = await axios.get("/tasks");
      setTasks(res.data);
      reset();
      setEditingTask(null);
    } catch (error) {
      console.log(error);
    }
  };
*/
/*
  // Eliminar tarea
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/tasks/${id}`);
      // Actualizar lista de tareas
      const res = await axios.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };
*/
/*
  // Preparar formulario para editar tarea
  const handleEdit = (task) => {
    setEditingTask(task);
    setValue("title", task.title);
    setValue("description", task.description);
    setValue("date", task.date);
  };

  if (!isAuthenticated) {
    return null; // Opcional: Puedes mostrar un cargando o un mensaje de redirección aquí
  }
*/
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tasks</h1>
      
      {/* Formulario para agregar/editar tarea */}
      <form onSubmit={""} className="mb-8">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            {...register("title", { required: true })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            {...register("description", { required: true })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            {...register("date")}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {editingTask ? "Update Task" : "Add Task"}
        </button>
      </form>

      {/* Lista de tareas */}
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task._id} className="bg-white shadow overflow-hidden rounded-md px-6 py-4 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold">{task.title}</h3>
              <p>{task.description}</p>
              <p>{new Date(task.date).toLocaleDateString()}</p>
            </div>
            <div className="flex space-x-4">
              <button onClick={() => handleEdit(task)} className="text-blue-500 hover:text-blue-700">
                <FaEdit />
              </button>
              <button onClick={() => handleDelete(task._id)} className="text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksPage;
