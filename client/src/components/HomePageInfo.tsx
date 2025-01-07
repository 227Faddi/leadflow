import { FaUserPlus } from "react-icons/fa6";
import { FaChartColumn } from "react-icons/fa6";

const HomePageInfo = () => {
  return (
    <section className="flex flex-col items-center justify-center space-y-8 px-4 md:px-10 lg:px-56 mb-52">
      <div className="bg-gray-100 p-10 md:p-20 rounded-2xl flex flex-col md:flex-row justify-between space-y-12">
        <div className="flex flex-col items-center justify-center gap-12 flex-1">
          <div className="space-y-2">
            <FaUserPlus className="text-blue-700" size={35} />
            <h3 className="font-bold">Effortless Lead Tracking</h3>
            <p className="md:w-2/3 text-gray-500">
              Keep your leads organized in one place and update statuses
              instantly. Stay on top of your sales pipeline and never miss an
              opportunity to close a deal.
            </p>
          </div>
          <div className="space-y-2">
            <FaChartColumn className="text-blue-700" size={35} />
            <h3 className="font-bold">Comprehensive Analytics</h3>
            <p className="md:w-2/3 text-gray-500">
              Gain valuable insights into your sales performance. Identify
              trends, refine strategies, and make smarter, data-driven decisions
              to boost results.
            </p>
          </div>
        </div>
        <div className="flex items-center flex-1">
          <img
            className="w-full object-cover"
            src="/assets/img/desktop.webp"
            alt="dashboard preview"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePageInfo;
