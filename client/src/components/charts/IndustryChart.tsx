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
    <div className="w-full h-full border-slate-200 border bg-white dark:bg-gray-900 rounded-lg p-4 xl:p-6 flex flex-col items-center justify-center shadow-lg dark:border-slate-700">
      <h4 className="p-2 xl:p-4 border-slate-200 rounded-lg border font-bold text-center dark:bg-gray-900 dark:text-white bg-white text-gray-900 dark:border-slate-700">
        Top Industries Distribution
      </h4>
      {!data || data.length === 0 ? (
        <p className="text-center py-24 text-lg leading-5 text-gray-500 dark:text-gray-300">
          No Data Available
        </p>
      ) : (
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={transformedData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            className="fill-gray-300"
          >
            <CartesianGrid strokeDasharray="3 3" />
            {/* @ts-expect-error recharts */}
            <XAxis dataKey="industry" tick={{ fill: "gray" }} />
            {/* @ts-expect-error recharts */}
            <YAxis tick={{ fill: "gray" }} />
            <Tooltip />
            <Bar
              dataKey="value"
              className="fill-gray-900 dark:fill-slate-300"
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default IndustryChart;
