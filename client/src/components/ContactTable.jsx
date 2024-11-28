import ContactInfo from "./ContactInfo";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ContactTable = () => {
  const fetchLeads = async () => {
    const { data } = await axios.get("http://localhost:3000/api/leads");
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
    return <div>Loading...</div>;
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
          <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left uppercase">
            Status
          </th>
          <th className="px-6 py-3" />
          <th className="px-6 py-3" />
        </tr>
      </thead>
      <tbody className="bg-white">
        {leads?.map((lead, index) => (
          <ContactInfo lead={lead} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
