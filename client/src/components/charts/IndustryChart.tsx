import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ChartData = {
  name: string;
  value: number;
};

const IndustryChart = () => {
  // Example data for the chart
  const barChartData: ChartData[] = [
    { name: "Tech", value: 30 },
    { name: "Construction", value: 20 },
    { name: "Health", value: 10 },
    { name: "Food", value: 25 },
    { name: "Finance", value: 15 },
  ];

  return (
    <div className="w-full h-full border-slate-200 border-2 bg-white rounded-lg p-4 xl:p-6 flex flex-col items-center justify-center shadow-lg">
      <p className="p-2 xl:p-4 border-slate-200 rounded-lg border-2 font-bold text-center">
        Industries Distribution
      </p>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={barChartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          {/* @ts-expect-error recharts */}
          <XAxis dataKey="name" />
          {/* @ts-expect-error recharts */}
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IndustryChart;
