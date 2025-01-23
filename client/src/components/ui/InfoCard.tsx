import { ReactNode } from "react";

type Props = {
  text: string;
  data: string | number;
  icon: ReactNode;
};

const InfoCard = ({ text, data, icon }: Props) => {
  return (
    <div className="flex-1 w-full border-slate-200 border-2 flex items-center p-3 lg:p-6 bg-gray-50 rounded-lg shadow-lg">
      <div className="p-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 text-white rounded-full">
        {icon}
      </div>
      <h4 className="text-lg lg:text-2xl mx-5 font-semibold text-gray-900">
        {text} : {data}
      </h4>
    </div>
  );
};

export default InfoCard;
