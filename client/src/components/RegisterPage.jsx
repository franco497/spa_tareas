import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";


const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async(data) => {
    //console.log(data);
    try {
      const res = await registerRequest(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-zinc-800 text-white max-w-md P-10 rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username"
            type="text"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Username"
            {...register("username", { required: "The username is required" })}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email"
            type="email"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="email@example.com"
            {...register("email", { required: "The email is required" })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Password"
            {...register("password", { required: "The password is required" })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className="flex justify-center mt-5">
        <button type="submit"><strong>Register</strong></button>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;