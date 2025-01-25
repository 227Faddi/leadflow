import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { useGetStatusCount } from "../../features/lead/hooks";
import { firstLetterUpperCase } from "../../utils";

type CustomLabel = {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
};

const RADIAN = Math.PI / 180;
const RenderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: CustomLabel) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const StatusChart = () => {
  const { data } = useGetStatusCount();

  const colors = {
    new: "#3B82F6",
    contacted: "#F59E0B",
    negotiating: "#F97316",
    converted: "#10B981",
    disqualified: "#EF4444",
  };

  return (
    <div className="w-full h-full border-slate-200 border-2 bg-white rounded-lg p-4 xl:p-6 flex flex-col items-center justify-center shadow-lg">
      <h4 className="p-2 xl:p-4 border-slate-200 rounded-lg border-2 font-bold text-center">
        Status Distribution
      </h4>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="status"
            label={RenderCustomizedLabel}
            labelLine={false}
          >
            {data?.map((item, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[item.status as keyof typeof colors]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) => [
              value,
              firstLetterUpperCase(name as string),
            ]}
          />
        </PieChart>
      </ResponsiveContainer>
      {/* Legend */}
      <div className="gap-2 flex flex-col xl:flex-row xl:flex-wrap xl:gap-4">
        {data?.map((item) => (
          <div
            key={item.status}
            className="flex items-center gap-2 text-sm text-gray-700"
          >
            <span
              className="w-4 h-4 inline-block rounded-full"
              style={{
                backgroundColor: colors[item.status as keyof typeof colors],
              }}
            ></span>
            {firstLetterUpperCase(item.status)}: {item.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusChart;
