import React from 'react';
import { useForm } from "react-hook-form";

const CreateTaskModal = ({ onClose, onSubmit }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handleFormSubmit = async (data) => {
    await onSubmit(data);
    reset();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Task</h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleFormSubmit)}>
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
            <button type="submit" className="bg-blue-500 text-white lg:py-2 py-1 px-4 rounded-md shadow-md hover:bg-blue-700 transition duration-300">Create Task</button>
            <button type="button" className="bg-gray-500 text-white lg:py-2 py-1 px-4 rounded-md shadow-md hover:bg-gray-700 transition duration-300 ml-4" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskModal;
