import { useParams } from "react-router-dom";
import EditLeadForm from "../components/forms/EditLeadForm";
import ErrorMessage from "../components/ui/ErrorMessage";
import Spinner from "../components/ui/Spinner";
import { useGetLead } from "../features/lead/hooks";
import { Lead } from "../types";

const EditLeadPage = () => {
  const { id } = useParams<{ id: Lead["id"] }>();

  const { data: lead, isLoading, isError } = useGetLead(id as string);

  return (
    <div className="h-full container px-6 py-8 mx-auto">
      <h3 className="text-3xl font-medium text-gray-900 mb-10">Edit Lead</h3>
      <div className="h-full flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-sm">
          {isLoading && <Spinner />}
          {isError && <ErrorMessage />}
          {lead && <EditLeadForm lead={lead} />}
        </div>
      </div>
    </div>
  );
};

export default EditLeadPage;
