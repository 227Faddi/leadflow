import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useEditProfile, useUser } from "../../states/user";
import { EditProfile } from "../../types";
import { editProfileSchema } from "../../utils/formValidation";

const EditProfileForm = () => {
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EditProfile>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: { username: user?.username },
  });

  const editProfile = useEditProfile();

  const onSubmit: SubmitHandler<EditProfile> = async (formData) => {
    const data = new FormData();

    if (formData.profileImg) {
      data.append("profileImg", formData.profileImg);
    }
    data.append("username", formData.username);

    await editProfile(data);
  };

  return (
    <form
      className="mt-8 mb-2 w-full bg-gray-50 dark:bg-gray-900 dark:border-slate-700 p-6 border-2 border-slate-200 rounded-md shadow-lg"
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
            Username
          </label>
          <input
            {...register("username")}
            type="text"
            className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow dark:bg-slate-800 dark:text-white dark:border-slate-700"
            placeholder="Your Username"
          />
          <p className="text-red-700 h-4 text-sm sm:text-base">
            {errors?.username?.message}
          </p>
        </div>
        <div>
          <label className="block mb-2 text-md text-bold text-gray-900 dark:text-white">
            Profile Image
          </label>
          <input
            {...register("profileImg")}
            type="file"
            accept=".png, .jpg, .jpeg, .webp"
            className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow dark:bg-slate-800 dark:text-white dark:border-slate-700"
          />
          <p className="text-red-700 h-4 text-sm sm:text-base">
            {errors?.profileImg?.message}
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
      </motion.div>
    </form>
  );
};

export default EditProfileForm;
