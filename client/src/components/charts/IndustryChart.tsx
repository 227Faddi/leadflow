import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useGetIndustryCount } from "../../features/lead/hooks";
import { firstLetterUpperCase } from "../../utils";

const IndustryChart = () => {
  const { data } = useGetIndustryCount();

  const transformedData = data?.map((entry) => ({
    ...entry,
    industry: firstLetterUpperCase(entry.industry),
  }));

  return (
    <div className="w-full h-full border-slate-200 border-2 bg-white rounded-lg p-4 xl:p-6 flex flex-col items-center justify-center shadow-lg">
      <h4 className="p-2 xl:p-4 border-slate-200 rounded-lg border-2 font-bold text-center">
        Top Industries Distribution
      </h4>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={transformedData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          {/* @ts-expect-error recharts */}
          <XAxis dataKey="industry" />
          {/* @ts-expect-error recharts */}
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#111827" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IndustryChart;
