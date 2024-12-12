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
      {isLoading && <Spinner />}
      {isError && <ErrorMessage message="We couldn't load your leads." />}
      {!isLoading && !isError && <LeadsTable leads={leads} />}
    </div>
  );
};

export default DashboardPage;
