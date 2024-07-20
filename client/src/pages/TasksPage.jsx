import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { createTaskRequest } from '../api/tasks';

const TasksPage = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      console.log("Enviando datos:", data); // Depuración de los datos enviados
      const res = await createTaskRequest(data);
      console.log("Respuesta del servidor:", res); // Depuración de la respuesta
      setMessage("Task created successfully!");
      reset(); // Resetear el formulario después de la creación de la tarea
    } catch (error) {
      console.error("Error al crear la tarea:", error);
      setMessage("Failed to create task.");
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
          <h2 className="text-2xl font-bold mb-4 text-center">soy texto 🚀🐶</h2>
          <p className="text-lg mb-4">
            otro texto
          </p>
          <ol className="my-2">
            <li>1. más texto</li>
            <li>2. etc.</li>
          </ol>
          <p className="text-lg mb-4">
            otro texto más 🚀🚀🚀.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
