import { FaUserCheck } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import Table from "../components/table/Table.tsx";
import ErrorMessage from "../components/ui/ErrorMessage.tsx";
import InfoCard from "../components/ui/InfoCard.tsx";
import Spinner from "../components/ui/Spinner.tsx";
import { useGetLeads } from "../features/lead/hooks.ts";

import { useMemo } from "react";

const DashboardPage = () => {
  const { data: leads, isLoading, isError } = useGetLeads();

  const leadsNumber = leads?.length || 0;
  const leadsConverted = useMemo(
    () => leads?.filter((lead) => lead.status === "converted").length || 0,
    [leads]
  );

  return (
    <div className="container px-6 py-8 mx-auto">
      <h3 className="text-3xl font-medium text-gray-900">Dashboard</h3>
      <div className="mt-4">
        <div className="flex flex-col justify-center md:flex-row gap-6">
          <InfoCard
            text="Total Leads"
            data={leadsNumber}
            icon={<FaUserGroup className="w-6 h-6" />}
          />
          <InfoCard
            text="Leads Converted"
            data={leadsConverted}
            icon={<FaUserCheck className="w-6 h-6" />}
          />
        </div>
      </div>
      {isLoading && <Spinner />}
      {isError && <ErrorMessage message="We couldn't load your leads." />}
      {!isLoading && !isError && <Table leads={leads} />}
    </div>
  );
};

export default DashboardPage;
