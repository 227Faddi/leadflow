import { FaUserPlus } from "react-icons/fa";
import { FaSortAlphaUp } from "react-icons/fa";

import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <>
      <h3 className="text-3xl font-medium text-gray-900">Dashboard</h3>
      <div className="mt-4">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            <div className="h-full flex items-center p-6 bg-gray-50 rounded-lg shadow-lg">
              <div className="p-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 text-white rounded-full">
                <FaSortAlphaUp className="w-6 h-6" />
              </div>
              <h4 className="text-2xl mx-5 font-semibold text-gray-700">
                Sort by Name
              </h4>
            </div>
          </div>
          <div className="w-full">
            <button className="h-full w-full flex items-center p-6 bg-gray-50 rounded-lg shadow-lg">
              <div className="p-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 text-white rounded-full"></div>
              <h4 className="text-2xl mx-5 font-semibold text-gray-700">
                Sort by Status
              </h4>
            </button>
          </div>
          <div className="w-full">
            <Link
              to="/add"
              className="h-full flex items-center p-6 bg-gray-50 rounded-lg shadow-lg"
            >
              <div className="p-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 text-white rounded-full">
                <FaUserPlus className="w-6 h-6" />
              </div>
              <h4 className="text-2xl mx-5 font-semibold text-gray-700">
                New Lead
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardActions;
