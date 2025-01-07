import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { changePassSchema } from "../../utils/zod/formValidation";
import { LoginFormData } from "../../types";
import { useChangePassword } from "../../features/user/hooks";

const ChangePassForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({ resolver: zodResolver(changePassSchema) });

  const changePassword = useChangePassword();

  const onSubmit: SubmitHandler<LoginFormData> = async (formData) => {
    await changePassword(formData);
  };

  return (
    <form
      className="mt-8 mb-2 w-full"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="mb-4 flex flex-col gap-6">
        <div>
          <label className="block mb-2 text-md text-bold text-gray-900">
            Current Password
          </label>
          <input
            {...register("currentPassword")}
            type="password"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Your Current Password"
          />
          {errors.currentPassword && (
            <div className="text-red-700 mt-1">
              {errors.currentPassword.message}
            </div>
          )}
        </div>
        <div>
          <label className="block mb-2 text-md text-bold text-gray-900">
            New Password
          </label>
          <input
            {...register("newPassword")}
            type="password"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Your New Password"
          />
          {errors.newPassword && (
            <div className="text-red-700 mt-1">
              {errors.newPassword.message}
            </div>
          )}
        </div>
        <div>
          <label className="block mb-2 text-md text-bold text-gray-900">
            Confirm New Password
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <p className="text-red-700 mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <button
          className="mt-4 w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Confirm"}
        </button>
        <Link
          className="mt-4 max-w-sm w-full text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          to="/settings"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default ChangePassForm;
