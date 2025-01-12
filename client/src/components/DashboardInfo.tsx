import { FaUserGroup } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa";

import { Lead } from "../types";
import { useMemo } from "react";

type Props = {
  leads: Lead[] | undefined;
};

const DashboardActions = ({ leads }: Props) => {
  const leadsNumber = leads?.length || 0;
  const leadsConverted = useMemo(
    () => leads?.filter((lead) => lead.status === "converted").length || 0,
    [leads]
  );

  return (
    <>
      <h3 className="text-3xl font-medium text-gray-900">Dashboard</h3>
      <div className="mt-4">
        <div className="flex flex-col justify-center md:flex-row gap-6">
          <div className="flex-1 h-full flex items-center p-6 bg-gray-50 rounded-lg shadow-lg">
            <div className="p-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 text-white rounded-full">
              <FaUserGroup className="w-6 h-6" />
            </div>
            <h4 className="text-2xl mx-5 font-semibold text-gray-900">
              Total Leads : {leadsNumber}
            </h4>
          </div>
          <div className="flex-1 h-full flex items-center p-6 bg-gray-50 rounded-lg shadow-lg">
            <div className="p-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 text-white rounded-full">
              <FaUserCheck className="w-6 h-6" />
            </div>
            <h4 className="text-2xl mx-5 font-semibold text-gray-900">
              Leads Converted : {leadsConverted}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardActions;
