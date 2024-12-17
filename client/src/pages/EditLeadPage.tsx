import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchLead } from "../services/api";
import { Lead } from "../types";
import EditLeadForm from "../components/forms/EditLeadForm";
import Spinner from "../components/ui/Spinner";
import ErrorMessage from "../components/ui/ErrorMessage";

const EditLeadPage = () => {
  const { id } = useParams<{ id: Lead["id"] }>();

  const {
    data: lead,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => fetchLead(id),
    queryKey: ["lead"],
  });

  return (
    <div className="container px-6 py-8 mx-auto">
      <h3 className="text-3xl font-medium text-gray-900">Edit Lead</h3>
      <div className="h-full flex flex-col items-center justify-center px-10">
        <div className="w-full max-w-sm">
          {isLoading && <Spinner />}
          {isError && <ErrorMessage />}
          {!isLoading && !isError && <EditLeadForm lead={lead!} />}
        </div>
      </div>
    </div>
  );
};

export default EditLeadPage;
