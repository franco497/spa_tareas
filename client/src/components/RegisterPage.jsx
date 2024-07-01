import { useForm } from "react-hook-form";
//import { registerRequest } from "../api/auth.js";

const RegisterPage = () => {
  const { register, handleSubmit, formState: { error } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };



  return (
    <div className="bg-zinc-800 max-w-md P-10 rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username"
          type="text"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Username"
          {...register("username", { required: "the username is required" })}
          />
          {error.username && <p>{error.username.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email"
          type="email"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Password"
          {...register("email", { required: "the email is required" })}
          />
          {error.email && <p>{error.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password"
           className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Password"
          {...register("password", { required: "the password is required" })}
          />
          {error.password && <p>{error.password.message}</p>}
        </div>
          
        <button type="submit">Register</button>
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
*/