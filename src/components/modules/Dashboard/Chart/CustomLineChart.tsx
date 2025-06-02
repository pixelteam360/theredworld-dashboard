"use client";
import Spinner from "@/components/common/Spinner";
import { useChartQuery } from "@/redux/features/dashboard/dashboard.api";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

const CustomLineChart = () => {
  const { data, isFetching } = useChartQuery(undefined);

  if (isFetching) {
    return <Spinner />;
  }

  const chardData = data?.data || [
    {
      month: "No data available",
      price: "0",
      count: "0",
    },
  ];
  console.log(chardData);
  return (
    <div className="w-full h-full">
      <p className="font-medium my-5 text-xl">Earning</p>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          width={730}
          height={250}
          data={chardData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#EB493B" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#EB493B" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="price"
            name="Amount"
            stroke="#EB493B"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
