import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";


const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    //console.log(data);
    try {
      const res = await registerRequest(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="bg-green-50 text-green-900 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mt-4 mb-5">Welcome to SPA-Tasks! 📝</h1>
        <p className="text-lg mb-5">
          Discover a new way to organize your pending tasks. Using the powerful react-hook-form to manage your information effectively. Register now and start simplifying your daily life with our SPA! 🔥
        </p>
      </div>
      <div className="flex flex-row justify-center px-14 py-12 w-full gap-20">
        <div className="ml-10 w-[40%] border-2 border-solid border-fuchsia-600 bg-[#5D9C59] text-white rounded-md">
          <h2 className="text-2xl font-bold my-12 text-center">Register</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col mx-6">
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
            <div className="flex flex-col mx-6">
              <label htmlFor="email" className="text-lg font-medium">Email</label>
              <input
                id="email"
                type="email"
                className="border border-gray-300 px-4 py-2 rounded-md my-2"
                placeholder="email@example.com"
                {...register("email", { required: "The email is required" })}
              />
              {errors.email && <p className="text-red-600">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col mx-6">
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
            <div className="flex justify-center pt-8 mt-12">
              <button type="submit" className="bg-white text-[#5D9C59] py-4 px-12 rounded-md shadow-md hover:bg-gray-100 transition duration-300">
                <strong>Register</strong>
              </button>
            </div>
          </form>
        </div>
        <div className="pt-16 pl-10 pr-0 w-[60%] flex items-center justify-center relative">
      <div className="absolute top-0 left-0 right-0 bg-green-50 px-6 pt-6 pb-0 rounded-lg shadow-md text-green-900 z-10">
        <h2 className="text-2xl font-bold mb-4">Quick Registration with Rex 🐾</h2>
        <p className="text-lg">
          Hello human! I'm Rex, the organized dog 🐶 I need an app to remember my important walks and naps. Don't forget that all fields in the form are required. Send me your information to start organizing my days! 🐾
        </p>
      </div>
      <div className="relative">
        <img
          className="ml-20 mt-20 pt-20 w-[40%] rounded-full shadow-lg z-0"
          src="https://res.cloudinary.com/dqh2illb5/image/upload/v1719868462/login/pexels-charlesdeluvio-1851164_ryomfx.jpg"
          alt="image of a dog looking at how you are registering"
        />
        <div className="bg-yellow-200 text-yellow-800 px-4 rounded-lg max-w-xs absolute bottom-0 right-0 z-10">
          Remember! All fields are required 🐾 Send the form and you will help a dog have his life more organized! 🐶
        </div>
      </div>
    </div>
      </div>
    </div>
  );

}

export default RegisterPage;