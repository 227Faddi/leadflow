import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required." })
    .max(30, { message: "Name cannot exceed 30 characters." }),

  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .trim()
    .toLowerCase(),

  industry: z
    .string()
    .trim()
    .max(30, { message: "Industry cannot exceed 30 characters." }),

  phone: z
    .string()
    .min(7, { message: "Invalid phone number: too short." })
    .max(15, { message: "Invalid phone number: too long." })
    .regex(/^\+?[0-9\s\-()]+$/, { message: "Invalid phone number format." }),

  location: z
    .string()
    .max(30, { message: "Location cannot exceed 30 characters." }),
});

const EditLeadForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (formData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(formData);
  };

  return (
    <form className="mt-8 mb-2 w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full mb-4 flex flex-col gap-6 items-center justify-center">
        <div className="w-full max-w-sm min-w-[200px]">
          <label className="block mb-2 text-md text-bold text-gray-900">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Enter a Name"
          />
          {errors.name && (
            <p className="text-red-700 mt-1 error-message">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="w-full max-w-sm min-w-[200px]">
          <label className="block mb-2 text-md text-bold text-gray-900">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Enter an Email"
          />
          {errors.email && (
            <p className="text-red-700 mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="w-full max-w-sm min-w-[200px]">
          <label className="block mb-2 text-md text-bold text-gray-900">
            Industry
          </label>
          <input
            {...register("industry")}
            type="text"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Enter an Industry"
          />
          {errors.industry && (
            <p className="text-red-700 mt-1">{errors.industry.message}</p>
          )}
        </div>
        <div className="w-full max-w-sm min-w-[200px]">
          <label className="block mb-2 text-md text-bold text-gray-900">
            Phone
          </label>
          <input
            {...register("phone")}
            type="text"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Enter a Phone number"
          />
          {errors.phone && (
            <p className="text-red-700 mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div className="w-full max-w-sm min-w-[200px]">
          <label className="block mb-2 text-md text-bold text-gray-900">
            Location
          </label>
          <input
            {...register("location")}
            type="text"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Enter a Location"
          />
          {errors.location && (
            <p className="text-red-700 mt-1">{errors.location.message}</p>
          )}
        </div>
        <button
          className="mt-4 max-w-sm w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Updating Lead..." : "Edit"}
        </button>
      </div>
    </form>
  );
};

export default EditLeadForm;
