import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useChangePassword } from "../../features/user/hooks";
import { ChangePassword } from "../../types";
import { changePasswordSchema } from "../../utils/zod/formValidation";

const ChangePassForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ChangePassword>({ resolver: zodResolver(changePasswordSchema) });

  const changePassword = useChangePassword();

  const onSubmit: SubmitHandler<ChangePassword> = async (formData) => {
    await changePassword(formData);
  };

  return (
    <form
      className="mt-8 mb-2 w-full bg-gray-50 p-6 border border-slate-200 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="mb-4 flex flex-col space-y-5 sm:space-y-2">
        <div>
          <label className="block mb-2 text-md text-bold text-gray-900">
            Current Password
          </label>
          <input
            {...register("currentPassword")}
            type="password"
            className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Your Current Password"
          />
          <div className="text-red-700 h-4 text-sm sm:text-base">
            {errors?.currentPassword?.message}
          </div>
        </div>
        <div>
          <label className="block mb-2 text-md text-bold text-gray-900">
            New Password
          </label>
          <input
            {...register("newPassword")}
            type="password"
            className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Your New Password"
          />
          <div className="text-red-700 h-4 text-sm sm:text-base">
            {errors?.newPassword?.message}
          </div>
        </div>
        <div>
          <label className="block mb-2 text-md text-bold text-gray-900">
            Confirm New Password
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
        <div className="pt-6 w-full">
          <button
            className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Confirm"}
          </button>
          <Link
            className="mt-4 max-w-sm inline-block w-full text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            to="/settings"
          >
            Cancel
          </Link>
        </div>
      </div>
    </form>
  );
};

export default ChangePassForm;
