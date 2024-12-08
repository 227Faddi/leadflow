import { FaUserPlus } from "react-icons/fa6";
import { FaChartColumn } from "react-icons/fa6";

const InfoSection = () => {
  return (
    <section className="flex flex-col items-center justify-center space-y-8 px-4 md:px-10 lg:px-56 mb-52">
      <div className="bg-gray-100 p-10 md:p-20 rounded-2xl flex flex-col md:flex-row justify-between space-y-12">
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="space-y-2">
            <FaUserPlus className="text-blue-700" size={35} />
            <h3 className="font-bold">Effortless Lead Tracking</h3>
            <p className="md:w-2/3 text-gray-500">
              Keep all your leads in one place and update statuses in real-time
              to stay on top of your sales pipeline.
            </p>
          </div>
          <div className="space-y-2">
            <FaChartColumn className="text-blue-700" size={35} />
            <h3 className="font-bold">Comprehensive Analytics</h3>
            <p className="md:w-2/3 text-gray-500">
              Get insights to optimize your sales and marketing efforts, helping
              you make smarter decisions.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            className="w-full object-cover"
            src="/assets/img/laptop.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
