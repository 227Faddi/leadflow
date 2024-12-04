import EditLeadForm from "../components/forms/EditLeadForm";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
const serverURL = import.meta.env.VITE_SERVER_URL;

type Lead = {
  id: string;
  name: string;
  email: string;
  industry: string;
  phone: string;
  location: string;
  status: "new" | "contacted" | "negotiating" | "converted" | "disqualified";
};

const EditLeadPage = () => {
  const params = useParams();
  const id = params.id;

  const fetchLead = async (): Promise<Lead> => {
    const { data } = await axios.get(`${serverURL}/api/leads/${id}`);
    return data;
  };

  const {
    data: lead,
    isLoading,
    isError,
  } = useQuery({
    queryFn: fetchLead,
    queryKey: ["lead"],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div className="container px-6 py-8 mx-auto">
      <h3 className="text-3xl font-medium text-gray-900">Edit Lead</h3>
      <div className="h-full flex flex-col items-center justify-center px-10">
        <div className="w-full max-w-sm">
          <EditLeadForm lead={lead} />
        </div>
      </div>
    </div>
  );
};

export default EditLeadPage;
