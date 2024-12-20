import { useQuery } from "@tanstack/react-query";
import { fetchLeads } from "../services/api/leads.ts";

import DashboardActions from "../components/DashboardInfo";
import Table from "../components/leadsTable/Table.tsx";
import Spinner from "../components/ui/Spinner.tsx";
import ErrorMessage from "../components/ui/ErrorMessage.tsx";

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
      <DashboardActions leads={leads} />
      {isLoading && <Spinner />}
      {isError && <ErrorMessage message="We couldn't load your leads." />}
      {!isLoading && !isError && <Table leads={leads} />}
    </div>
  );
};

export default DashboardPage;
