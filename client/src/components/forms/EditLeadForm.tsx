import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useEditLead } from "../../features/lead/hooks";
import { Lead, LeadForm } from "../../types";
import { leadSchema } from "../../utils/zod/formValidation";

type Props = {
  lead: Lead;
};

const EditLeadForm = ({ lead }: Props) => {
  const id = lead?.id;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadForm>({
    resolver: zodResolver(leadSchema),
    values: lead,
  });

  const editLead = useEditLead(id);

  const onSubmit: SubmitHandler<LeadForm> = async (formData) => {
    await editLead({ id, formData });
  };

  return (
    <form
      className="mt-8 mb-2 w-full bg-gray-50 p-6 border border-slate-200 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="w-full mb-4 flex flex-col space-y-2 items-center justify-center">
        <div className="w-full">
          <label className="block mb-2 text-md text-bold text-gray-900">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Enter a Name"
          />
          <p className="text-red-700 h-4 text-sm sm:text-base error-message">
            {errors?.name?.message}
          </p>
        </div>
        <div className="w-full">
          <label className="block mb-2 text-md text-bold text-gray-900">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Enter an Email"
          />
          <p className="text-red-700 h-4 text-sm sm:text-base">
            {errors?.email?.message}
          </p>
        </div>
        <div className="w-full">
          <label className="block mb-2 text-md text-bold text-gray-900">
            Industry
          </label>
          <input
            {...register("industry")}
            type="text"
            className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Enter an Industry"
          />
          <p className="text-red-700 h-4 text-sm sm:text-base">
            {errors?.industry?.message}
          </p>
        </div>
        <div className="w-full">
          <label className="block mb-2 text-md text-bold text-gray-900">
            Phone
          </label>
          <input
            {...register("phone")}
            type="text"
            className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Enter a Phone number"
          />
          <p className="text-red-700 h-4 text-sm sm:text-base">
            {errors?.phone?.message}
          </p>
        </div>
        <div className="w-full">
          <label className="block mb-2 text-md text-bold text-gray-900">
            Location
          </label>
          <input
            {...register("location")}
            type="text"
            className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Enter a Location"
          />
          <p className="text-red-700 h-4 text-sm sm:text-base">
            {errors?.location?.message}
          </p>
        </div>
        <div className="pt-6 w-full">
          <button
            className="mt-4 max-w-sm w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating Lead..." : "Edit"}
          </button>
          <Link
            className="inline-block w-full mt-4 max-w-sm text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            to="/dashboard"
          >
            Cancel
          </Link>
        </div>
      </div>
    </form>
  );
};

export default EditLeadForm;
