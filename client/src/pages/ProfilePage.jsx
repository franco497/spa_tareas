import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { getProfileRequest } from "../api/auth";

const ProfilePage = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [message, setMessage] = useState("");
  const [profile, setProfile] = useState(null);

  const fetchProfile = async () => {
    try {
      const res = await getProfileRequest();
      setProfile(res.data);
      setValue("username", res.data.username);
      setValue("email", res.data.email);
    } catch (error) {
      console.error("Error al obtener el perfil:", error);
      setMessage("Failed to load profile.");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const onSubmit = async (data) => {
    // Aquí se manejaría la lógica para actualizar el perfil si fuera necesario
    console.log(data);
  };

  return (
    <div>
      <div className="bg-green-50 text-green-900 p-6 sm:mx-0 mx-[5%] rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mt-4 mb-5">Welcome to Your Profile! 📝</h1>
        <p className="text-lg mb-5">
          Here you can view and update your profile information. Stay organized with SPA-Tasks! 🔥
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:px-14 py-12 w-full gap-20">
        <div className="lg:ml-10 m-3 lg:w-[40%] md:w-[50%] w-[70%] border-2 border-solid border-fuchsia-600 bg-[#5D9C59] text-white rounded-md">
          <h2 className="text-2xl font-bold lg:my-12 my-3 text-center">Profile Information</h2>
          {profile && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex flex-col mx-6">
                <label htmlFor="username" className="text-lg font-medium">Username</label>
                <input
                  id="username"
                  type="text"
                  className="border border-gray-300 text-yellow-800 px-4 py-2 rounded-md my-2"
                  placeholder="Username"
                  {...register("username", { required: "The username is required" })}
                />
                {errors.username && <p className="text-red-600">{errors.username.message}</p>}
              </div>
              <div className="flex flex-col mx-6">
                <label htmlFor="email" className="text-lg font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  className="border border-gray-300 text-yellow-800 px-4 py-2 rounded-md my-2"
                  placeholder="email@example.com"
                  {...register("email", { required: "The email is required" })}
                />
                {errors.email && <p className="text-red-600">{errors.email.message}</p>}
              </div>
              <div className="flex justify-center lg:pt-8 lg:mt-12 pb-5">
                <button type="submit" className="bg-white text-[#5D9C59] lg:py-4 py-2 px-12 rounded-md shadow-md hover:bg-gray-100 transition duration-300">
                  <strong>Update Profile</strong>
                </button>
              </div>
            </form>
          )}
          {!profile && <p className="text-center text-red-600">{message}</p>}
        </div>
        <div className="lg:pl-10 lg:pt-10 lg:w-[50%] w-[70%] flex flex-col items-center justify-center relative">
          <div className="bg-green-50 px-2 pt-6 pb-6 rounded-lg shadow-md text-green-900 w-full">
            <h2 className="text-2xl font-bold mb-3 text-center">Guidance from Stoic 🐶</h2>
            <p className="text-lg mb-1">
              Hello, I'm Stoic, the wise dog 🐕‍🦺. In the words of Seneca, "Luck is what happens when preparation meets opportunity." Use this tool to stay prepared and seize every opportunity! 🐾
            </p>
          </div>
          <div className="mt-6 w-full flex sm:flex-row flex-col sm:items-end items-center gap-3">
            <img
              className="lg:ml-3 lg:mt-1 sm:w-[40%] w-[60%] sm:mt-[3%] mt-[15%] ml-8 rounded-full shadow-lg"
              src="https://res.cloudinary.com/dqh2illb5/image/upload/v1720472986/login/pexels-hiagorocha-22234096_t226kj.jpg"
              alt="image of a dog looking at how you are viewing your profile"
            />
            <div className="bg-yellow-200 text-yellow-800 p-2 lg:mx-1 sm:mr-1 md:mx-2 rounded-lg sm:max-w-[60%] w-auto mt-4 sm:mt-0">
              <p className="text-lg">
                "Discipline is the mother of success."- Seneca🌟 🐾
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
