import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSignup } from "../../features/auth/hooks";
import { SignupFormData } from "../../types";
import { signupSchema } from "../../utils/zod/formValidation";
import { SocialButton } from "../ui/Button";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({ resolver: zodResolver(signupSchema) });

  const { signup } = useSignup();

  const onSubmit: SubmitHandler<SignupFormData> = async (formData) => {
    const data = new FormData();

    data.append("username", formData.username);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("confirmPassword", formData.confirmPassword);
    data.append("profileImg", formData.profileImg);

    await signup(data);
  };

  return (
    <form
      className="mt-8 mb-2 w-full bg-gray-50 p-6 border border-slate-200 rounded-md shadow-lg"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="mb-4 flex flex-col space-y-4 sm:space-y-2">
        <div>
          <label className="block mb-2 text-md text-bold text-gray-900">
            Username
          </label>
          <input
            {...register("username")}
            type="text"
            className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Your Username"
          />
          <p className="text-red-700 h-4 text-sm sm:text-base">
            {errors?.username?.message}
          </p>
        </div>
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
        <div>
          <label className="block mb-2 text-md text-bold text-gray-900">
            Confirm Password
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Confirm Password"
          />
          <p className="text-red-700 h-4 text-sm sm:text-base">
            {errors?.confirmPassword?.message}
          </p>
        </div>
        <div>
          <label className="block mb-2 text-md text-bold text-gray-900">
            Profile Image
          </label>
          <input
            {...register("profileImg")}
            type="file"
            accept=".png, .jpg, .jpeg, .webp"
            className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          />
          <p className="text-red-700 h-4 text-sm sm:text-base">
            {errors?.profileImg?.message}
          </p>
        </div>
      </div>
      <button
        className="mt-4 w-full text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Signing Up..." : "Sign up"}
      </button>
      <div className="w-full py-3 flex items-center text-gray-400 before:flex-1 before:border-t before:border-gray-300 before:me-6 after:flex-1 after:border-t after:border-gray-300 after:ms-6">
        or
      </div>
      <div className="space-y-4">
        <SocialButton
          text="Sign up with Google"
          social="google"
          icon={<FaGoogle />}
        />
        <SocialButton
          text="Sign up with Github"
          social="github"
          icon={<FaGithub />}
        />
      </div>
      <p className="flex justify-center mt-6 text-sm text-slate-600">
        Already have an account?
        <Link
          to="/login"
          className="ml-1 text-sm font-semibold text-blue-700 underline"
        >
          Login
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
