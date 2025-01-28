import { FaChartColumn, FaUserPlus } from "react-icons/fa6";

const HomePageInfo = () => {
  return (
    <section className="flex flex-col items-center justify-center space-y-8 px-4 md:px-10 lg:px-56 mb-52">
      <div className="bg-gray-100 p-10 md:p-20 rounded-2xl flex flex-col md:flex-row justify-between space-y-12 dark:bg-gray-900 dark:border-2 dark:border-gray-600">
        <div className="flex flex-col items-center justify-center gap-12 flex-1">
          <div className="space-y-2">
            <FaUserPlus
              className="text-blue-700 dark:text-green-500"
              size={35}
            />
            <h3 className="font-bold dark:text-white">
              Effortless Lead Tracking
            </h3>
            <p className="md:w-2/3 text-gray-500 dark:text-gray-300">
              Keep your leads organized in one place and update statuses
              instantly. Stay on top of your sales pipeline and never miss an
              opportunity to close a deal.
            </p>
          </div>
          <div className="space-y-2">
            <FaChartColumn
              className="text-blue-700 dark:text-green-500"
              size={35}
            />
            <h3 className="font-bold dark:text-white">
              Comprehensive Analytics
            </h3>
            <p className="md:w-2/3 text-gray-500 dark:text-gray-300">
              Gain valuable insights into your sales performance. Identify
              trends, refine strategies, and make smarter, data-driven decisions
              to boost results.
            </p>
          </div>
        </div>
        <div className="flex items-center flex-1">
          <img
            className="w-full object-cover max-w-2xl block dark:hidden"
            src="/assets/img/desktop-light.webp"
            alt="dashboard preview"
          />
          <img
            className="w-full object-cover max-w-2xl hidden dark:block"
            src="/assets/img/desktop-dark.webp"
            alt="dashboard preview"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePageInfo;
