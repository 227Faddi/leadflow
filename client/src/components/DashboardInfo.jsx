import { IoPersonAdd } from "react-icons/io5";
import { FaSortAlphaUp } from "react-icons/fa";
import { FaSortAmountUp } from "react-icons/fa";

const DashboardInfo = () => {
  return (
    <>
      <h3 className="text-3xl font-medium text-gray-900">Dashboard</h3>
      <div className="mt-4">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            <div className="h-full flex items-center p-6 bg-gray-50 rounded-lg shadow-lg">
              <div className="p-3 bg-blue-700 text-white rounded-full">
                <IoPersonAdd className="w-6 h-6" />
              </div>
              <h4 className="text-2xl mx-5 font-semibold text-gray-700">
                Add a new lead
              </h4>
            </div>
          </div>
          <div className="w-full">
            <div className="h-full flex items-center p-6 bg-gray-50 rounded-lg shadow-lg">
              <div className="p-3 bg-blue-700 text-white rounded-full">
                <FaSortAlphaUp className="w-6 h-6" />
              </div>
              <h4 className="text-2xl mx-5 font-semibold text-gray-700">
                Sort by name
              </h4>
            </div>
          </div>
          <div className="w-full">
            <div className="h-full flex items-center p-6 bg-gray-50 rounded-lg shadow-lg">
              <div className="p-3 bg-blue-700 text-white rounded-full">
                <FaSortAmountUp className="w-6 h-6" />
              </div>
              <h4 className="text-2xl mx-5 font-semibold text-gray-700">
                Sort by status
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardInfo;
