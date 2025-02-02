import { motion } from "motion/react";
import { useMemo } from "react";
import { FaUserCheck, FaUserGroup } from "react-icons/fa6";
import { LuGoal } from "react-icons/lu";
import IndustryChart from "../components/charts/IndustryChart";
import StatusChart from "../components/charts/StatusChart";
import InsightsModal from "../components/modals/InsightsModal";
import ErrorMessage from "../components/ui/ErrorMessage";
import InfoCard from "../components/ui/InfoCard";
import Spinner from "../components/ui/Spinner";
import { useGetLeads } from "../features/lead/hooks";

const AnalyticsPage = () => {
  const { data: leads, isLoading, isError } = useGetLeads();

  const leadsNumber = leads?.length || 0;

  const leadsConverted = useMemo(
    () => leads?.filter((lead) => lead.status === "converted").length || 0,
    [leads]
  );

  const conversionRate =
    leads && leadsConverted
      ? Math.round((leadsConverted / leads.length) * 100).toFixed(1) + "%"
      : "0%";

  return (
    <div className="container px-6 py-8 mx-auto">
      <h3 className="text-3xl font-medium text-gray-900 dark:text-white">
        Analytics
      </h3>
      <div className="bg-gray-50 dark:bg-gray-900 rounded-md border-slate-200 border-2 sm:p-8 mt-8 shadow-lg dark:border-slate-700 p-4">
        {isLoading && <Spinner />}
        {isError && <ErrorMessage />}
        {!isError && !isLoading && (
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex justify-center mt-2 ${
                leadsNumber === 0 && "hidden"
              }`}
            >
              <InsightsModal />
            </motion.div>
            <div className="flex flex-col md:flex-row gap-4 lg:gap-6 justify-center ">
              <InfoCard
                text="Total Leads"
                data={leadsNumber}
                icon={<FaUserGroup className="w-6 h-6 dark:text-blue-700" />}
              />

              <InfoCard
                text="Leads Converted"
                data={leadsConverted}
                icon={<FaUserCheck className="w-6 h-6 dark:text-blue-700" />}
              />
              <InfoCard
                text="Conversion Rate"
                data={conversionRate}
                icon={<LuGoal className="w-6 h-6 dark:text-blue-700" />}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-2/3">
                <IndustryChart />
              </div>
              <div className="w-full md:w-1/3">
                <StatusChart />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticsPage;
