import { useForm } from "react-hook-form";


const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
            {...register("username", { required: "the username is required" })}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email"
            type="email"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="email@example.com"
            {...register("email", { required: "the email is required" })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Password"
            {...register("password", { required: "the password is required" })}
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



/*
 {handleSubmit( async(values) => {
          console.log(values);
          const res = await registerRequest(values);
          console.log(res);
        })}

//import { registerRequest } from "../api/auth.js";        
*/