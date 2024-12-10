import LeadRow from "./LeadRow/LeadRow";
import { useQuery } from "@tanstack/react-query";
import { Lead } from "../types";
import { fetchLeads } from "../services/api";
import Spinner from "./ui/Spinner";
import ErrorMessage from "./ui/ErrorMessage";
import { Link } from "react-router-dom";

type Props = {
  debounceSearch: string;
};

const LeadsTable = ({ debounceSearch }: Props) => {
  const {
    data: leads,
    isLoading,
    isError,
  } = useQuery({
    queryFn: fetchLeads,
    queryKey: ["leads"],
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[500px]">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-[500px]">
        <ErrorMessage message="We couldn't load your leads." />
      </div>
    );
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
        {leads?.length === 0 ? (
          <tr>
            <td
              colSpan={7}
              className="text-center py-4 text-gray-600 font-medium"
            >
              No leads yet? Start by adding one{" "}
              <Link
                to="/add"
                className="text-blue-600 font-semibold hover:underline"
              >
                here
              </Link>
              .
            </td>
          </tr>
        ) : (
          leads
            ?.filter((lead) => lead.name.toLowerCase().includes(debounceSearch))
            .map((lead: Lead) => <LeadRow lead={lead} key={lead.id} />)
        )}
      </tbody>
    </table>
  );
};

export default LeadsTable;
