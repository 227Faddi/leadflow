import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { EditProfile } from "../../types";
import { editProfileSchema } from "../../utils/zod/formValidation";
import { useEditProfile, useUser } from "../../features/user/hooks";

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
      className="mt-8 mb-2 w-full"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="mb-4 flex flex-col gap-6">
        <div>
          <label className="block mb-2 text-md text-bold text-gray-900">
            Username
          </label>
          <input
            {...register("username")}
            type="text"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Your Username"
          />
          {errors.username && (
            <p className="text-red-700 mt-1 error-message">
              {errors.username.message}
            </p>
          )}
        </div>
        <div>
          <label className="block mb-2 text-md text-bold text-gray-900">
            Profile Image
          </label>
          <input
            {...register("profileImg")}
            type="file"
            accept=".png, .jpg, .jpeg, .webp"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          />
          {errors.profileImg && (
            <p className="text-red-700 mt-1">{errors.profileImg.message}</p>
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

export default EditProfileForm;
