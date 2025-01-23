import {
  Cell,
  Label,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Lead } from "../../types";

type Props = {
  leads: Lead[];
};
const StatusChart = ({ leads }: Props) => {
  const newCount = leads?.reduce(
    (tot, lead) => (lead.status === "new" ? (tot += 1) : tot),
    0
  );
  const contactedCount = leads?.reduce(
    (tot, lead) => (lead.status === "contacted" ? (tot += 1) : tot),
    0
  );
  const negotiatingCount = leads?.reduce(
    (tot, lead) => (lead.status === "negotiating" ? (tot += 1) : tot),
    0
  );
  const convertedCount = leads?.reduce(
    (tot, lead) => (lead.status === "converted" ? (tot += 1) : tot),
    0
  );
  const disqualifiedCount = leads?.reduce(
    (tot, lead) => (lead.status === "disqualified" ? (tot += 1) : tot),
    0
  );

  const statusData = [
    {
      name: "new",
      value: newCount,
      color: "#3B82F6", // bg-blue-500 equivalent
    },
    {
      name: "contacted",
      value: contactedCount,
      color: "#F59E0B", // bg-yellow-500 equivalent
    },
    {
      name: "negotiating",
      value: negotiatingCount,
      color: "#F97316", // bg-orange-500 equivalent
    },
    {
      name: "converted",
      value: convertedCount,
      color: "#10B981", // bg-green-500 equivalent
    },
    {
      name: "disqualified",
      value: disqualifiedCount,
      color: "#EF4444", // bg-red-500 equivalent
    },
  ];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    if (percent > 0) {
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
    }
    return null;
  };

  return (
    <div className="w-full h-full border-slate-200 border-2 bg-white rounded-lg p-4 xl:p-6 flex flex-col items-center justify-center shadow-lg">
      <p className="p-2 xl:p-4 border-slate-200 rounded-lg border-2 font-bold text-center">
        Status Distribution
      </p>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={statusData}
            dataKey="value"
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {statusData.map((item, index) => (
              <Cell key={`cell-${index}`} fill={item.color} />
            ))}
          </Pie>
          <Tooltip />
          <Label />
        </PieChart>
      </ResponsiveContainer>
      {/* Legend */}
      <div className="gap-2 flex flex-col xl:flex-row xl:flex-wrap xl:gap-4">
        {statusData.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-2 text-sm text-gray-700"
          >
            <span
              className="w-4 h-4 inline-block rounded-full"
              style={{ backgroundColor: item.color }}
            ></span>
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}:{" "}
            {item.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusChart;
