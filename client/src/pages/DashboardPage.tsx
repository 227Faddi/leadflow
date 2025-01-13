import DashboardActions from "../components/DashboardInfo";
import Table from "../components/table/Table.tsx";
import Spinner from "../components/ui/Spinner.tsx";
import ErrorMessage from "../components/ui/ErrorMessage.tsx";
import { useGetLeads } from "../features/lead/hooks.ts";

const DashboardPage = () => {
  const { data: leads, isLoading, isError } = useGetLeads();

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
