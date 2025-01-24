import { useMemo } from "react";
import { FaUserCheck, FaUserGroup } from "react-icons/fa6";
import { LuGoal } from "react-icons/lu";
import IndustryChart from "../components/charts/IndustryChart";
import StatusChart from "../components/charts/StatusChart";
import ErrorMessage from "../components/ui/ErrorMessage";
import InfoCard from "../components/ui/InfoCard";
import Spinner from "../components/ui/Spinner";
import { useGetLeads } from "../features/lead/hooks";
const AnalyticsPage = () => {
  const { data: leads, isLoading, isError } = useGetLeads();

  const converted = leads?.filter((lead) => lead.status === "converted");
  const conversionRate =
    leads && converted
      ? Math.round((converted.length / leads.length) * 100).toFixed(1) + "%"
      : "0%";

  const leadsNumber = leads?.length || 0;
  const leadsConverted = useMemo(
    () => leads?.filter((lead) => lead.status === "converted").length || 0,
    [leads]
  );

  return (
    <div className="container px-6 py-8 mx-auto">
      <h3 className="text-3xl font-medium text-gray-900">Analytics</h3>
      <section className="bg-gray-50 rounded-md border-slate-200 border-2 p-4 sm:p-8 mt-8 space-y-12 shadow-lg">
        {isLoading && <Spinner />}
        {isError && <ErrorMessage />}
        {!isError && !isLoading && (
          <>
            <section className="flex flex-col md:flex-row gap-4 lg:gap-6 justify-center ">
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
              <InfoCard
                text="Conversion Rate"
                data={conversionRate}
                icon={<LuGoal className="w-6 h-6" />}
              />
            </section>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-2/3">
                <IndustryChart />
              </div>
              <div className="w-full md:w-1/3">
                <StatusChart leads={leads!} />
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default AnalyticsPage;
