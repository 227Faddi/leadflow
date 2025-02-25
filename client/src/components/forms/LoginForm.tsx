import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useLogin } from "../../states/auth";
import { LoginFormData } from "../../types";
import { loginSchema } from "../../utils/formValidation";
import { SocialButton } from "../ui/Button";

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
      className="mt-8 mb-2 w-full bg-gray-50 dark:bg-gray-900 p-6 border-2 border-slate-200 rounded-md shadow-lg dark:border-slate-700"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-4 flex flex-col space-y-2"
      >
        <div>
          <label className="block mb-2 text-md text-bold text-gray-900 dark:text-white">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow dark:bg-slate-800 dark:text-white dark:border-slate-700"
            placeholder="Your Email"
          />
          <p className="text-red-700 h-4 text-sm sm:text-base">
            {errors?.email?.message}
          </p>
        </div>
        <div>
          <label className="block mb-2 text-md text-bold text-gray-900 dark:text-white">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow dark:bg-slate-800 dark:text-white dark:border-slate-700"
            placeholder="Your Password"
          />
          <p className="text-red-700 h-4 text-sm sm:text-base">
            {errors?.password?.message}
          </p>
        </div>
      </motion.div>
      <button
        className="mt-4 w-full text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
      <div className="w-full py-3 flex items-center text-gray-400 before:flex-1 before:border-t before:border-gray-300 before:me-6 after:flex-1 after:border-t after:border-gray-300 after:ms-6 dark:text-white">
        or
      </div>
      <div className="space-y-4">
        <SocialButton
          text="Login in with Google"
          social="google"
          icon={<FcGoogle size={23} />}
        />
        <SocialButton
          text="Login in with Github"
          social="github"
          icon={<FaGithub size={23} />}
        />
      </div>
      <p className="flex justify-center mt-6 text-sm text-slate-600 dark:text-white">
        Don't have an account?
        <Link
          to="/signup"
          className="ml-1 text-sm font-semibold text-blue-700 underline dark:text-gray-300"
        >
          Signup
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
