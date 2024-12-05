import ContactInfo from "./ContactInfo";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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

type Props = {
  sortStatus: boolean;
};

const ContactTable = ({ sortStatus }: Props) => {
  let url = `${serverURL}/api/leads`;
  if (sortStatus) {
    url = `${serverURL}/api/leads/sort/status/ASC`;
  }

  const fetchLeads = async (): Promise<Lead[]> => {
    const { data } = await axios.get(url);
    return data;
  };

  const {
    data: leads,
    isLoading,
    isError,
  } = useQuery({
    queryFn: fetchLeads,
    queryKey: ["leads"],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }
  return (
    <table className="min-w-full">
      <thead>
        <tr className="bg-gray-900 text-white border-b border-gray-200">
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase">
            Name
          </th>
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase">
            Industry
          </th>
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase">
            Phone
          </th>
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase">
            Location
          </th>
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center uppercase">
            Status
          </th>
          <th className="px-6 py-3" />
          <th className="px-6 py-3" />
        </tr>
      </thead>
      <tbody className="bg-white">
        {leads?.map((lead: Lead) => (
          <ContactInfo lead={lead} key={lead.id} />
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
