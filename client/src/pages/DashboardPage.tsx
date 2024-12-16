import { useQuery } from "@tanstack/react-query";
import { fetchLeads } from "../services/api";

import DashboardActions from "../components/DashboardInfo";
import Table from "../components/LeadsTable/Table";
import Spinner from "../components/Ui/Spinner";
import ErrorMessage from "../components/Ui/ErrorMessage";

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
