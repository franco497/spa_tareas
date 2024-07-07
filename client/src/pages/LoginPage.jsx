import { useForm } from "react-hook-form";
import { loginRequest } from "../api/auth"; // Asegúrate de tener esta función definida

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await loginRequest(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to SPA-Tasks</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-lg font-medium">Username</label>
            <input
              id="username"
              type="text"
              className="border border-gray-300 px-4 py-2 rounded-md my-2"
              placeholder="Username"
              {...register("username", { required: "The username is required" })}
            />
            {errors.username && <p className="text-red-600">{errors.username.message}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg font-medium">Password</label>
            <input
              id="password"
              type="password"
              className="border border-gray-300 px-4 py-2 rounded-md my-2"
              placeholder="Password"
              {...register("password", { required: "The password is required" })}
            />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
