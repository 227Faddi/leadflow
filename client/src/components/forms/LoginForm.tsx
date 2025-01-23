import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useLogin } from "../../features/auth/hooks";
import { LoginFormData } from "../../types";
import { loginSchema } from "../../utils/zod/formValidation";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  const { login } = useLogin();

  const onSubmit: SubmitHandler<LoginFormData> = async (formData) => {
    await login(formData);
  };

  return (
    <form
      className="mt-8 mb-2 w-full bg-gray-50 p-6 border border-slate-200 rounded-md shadow-lg"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="mb-4 flex flex-col space-y-2">
        <div>
          <label className="block mb-2 text-md text-bold text-gray-900">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Your Email"
          />
          <p className="text-red-700 h-4 text-sm sm:text-base">
            {errors?.email?.message}
          </p>
        </div>
        <div>
          <label className="block mb-2 text-md text-bold text-gray-900">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Your Password"
          />
          <p className="text-red-700 h-4 text-sm sm:text-base">
            {errors?.password?.message}
          </p>
        </div>
      </div>
      <button
        className="mt-4 w-full text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
      <p className="flex justify-center mt-6 text-sm text-slate-600">
        Don't have an account?
        <Link
          to="/signup"
          className="ml-1 text-sm font-semibold text-blue-700 underline"
        >
          Signup
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
