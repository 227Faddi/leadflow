import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LuChevronsUpDown } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useAddLead } from "../../features/lead/hooks";
import { LeadForm } from "../../types";
import { firstLetterUpperCase } from "../../utils";
import { industries, leadSchema } from "../../utils/zod/formValidation";

const AddLeadForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadForm>({ resolver: zodResolver(leadSchema) });

  const addLead = useAddLead();

  const onSubmit: SubmitHandler<LeadForm> = async (formData) => {
    await addLead(formData);
  };

  return (
    <form
      className="mb-2 w-full bg-gray-50 dark:bg-gray-900 p-6 border-2 dark:border-slate-700 border-slate-200 rounded-md shadow-lg"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full mb-4 flex flex-col space-y-4 sm:space-y-2 items-center justify-center"
      >
        <div className="w-full">
          <label className="block mb-2 text-md text-bold text-gray-900 dark:text-white">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow dark:bg-slate-800 dark:text-white dark:border-slate-700"
            placeholder="Enter a Name"
          />
          <p className="text-red-700 h-4 text-sm sm:text-base">
            {errors?.name?.message}
          </p>
        </div>
        <div className="w-full">
          <label className="block mb-2 text-md text-bold text-gray-900 dark:text-white">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow dark:bg-slate-800 dark:text-white dark:border-slate-700"
            placeholder="Enter an Email"
          />
          <p className="text-red-700 h-4 text-sm sm:text-base">
            {errors?.email?.message}
          </p>
        </div>
        <div className="w-full">
          <label className="block mb-2 text-md text-bold text-gray-900 dark:text-white">
            Industry
          </label>
          <div className="relative">
            <select
              {...register("industry")}
              className="appearance-none w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow dark:bg-slate-800 dark:text-white dark:border-slate-700"
            >
              {industries.map((entry, index) => (
                <option value={entry} key={index}>
                  {firstLetterUpperCase(entry)}
                </option>
              ))}
            </select>
            <LuChevronsUpDown className=" cursor-pointer text-gray-900 dark:text-white h-4 w-4 absolute top-1/2 right-2 transform -translate-y-1/2" />
          </div>
          <p className="text-red-700 h-4 text-sm sm:text-base">
            {errors?.industry?.message}
          </p>
        </div>
        <div className="w-full">
          <label className="block mb-2 text-md text-bold text-gray-900 dark:text-white">
            Phone
          </label>
          <input
            {...register("phone")}
            type="text"
            className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow dark:bg-slate-800 dark:text-white dark:border-slate-700"
            placeholder="Enter a Phone number"
          />
          <p className="text-red-700 h-4 text-sm sm:text-base">
            {errors?.phone?.message}
          </p>
        </div>
        <div className="w-full">
          <label className="block mb-2 text-md text-bold text-gray-900 dark:text-white">
            Location
          </label>
          <input
            {...register("location")}
            type="text"
            className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow dark:bg-slate-800 dark:text-white dark:border-slate-700"
            placeholder="Enter a Location"
          />
          <p className="text-red-700 h-4 text-sm sm:text-base">
            {errors?.location?.message}
          </p>
        </div>
        <div className="pt-6 w-full">
          <button
            className="max-w-sm w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Adding Lead..." : "Add"}
          </button>
          <Link
            className="mt-4 max-w-sm inline-block w-full text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            to="/dashboard"
          >
            Cancel
          </Link>
        </div>
      </motion.div>
    </form>
  );
};

export default AddLeadForm;
