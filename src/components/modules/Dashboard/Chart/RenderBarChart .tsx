"use client";
import Spinner from "@/components/common/Spinner";
import { useChartQuery } from "@/redux/features/dashboard/dashboard.api";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const RenderBarChart = () => {
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
  return (
    <div className="w-full h-full">
      <p className="font-medium my-5 text-xl">Subscribers</p>
      <BarChart width={600} height={300} data={chardData}>
        <XAxis dataKey="month" stroke="#EB493B" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar
          dataKey="count"
          name="Subscribers"
          fill="#EB493B"
          barSize={30}
          className="rounded-xl"
        />
      </BarChart>
    </div>
  );
};

export default RenderBarChart;
