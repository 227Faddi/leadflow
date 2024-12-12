import { useQuery } from "@tanstack/react-query";
import { fetchLeads } from "../services/api";

import DashboardActions from "../components/DashboardActions";
import LeadsTable from "../components/leadsTable/LeadsTable";
import Spinner from "../components/ui/Spinner";
import ErrorMessage from "../components/ui/ErrorMessage";

const DashboardPage = () => {
  const {
    data: leads,
    isLoading,
    isError,
  } = useQuery({
    queryFn: fetchLeads,
    queryKey: ["leads"],
  });

  return (
    <div className="container px-6 py-8 mx-auto">
      <DashboardActions />
      <div className="flex flex-col mt-8">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            {isLoading && <Spinner />}
            {isError && <ErrorMessage message="We couldn't load your leads." />}
            <LeadsTable leads={leads} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
