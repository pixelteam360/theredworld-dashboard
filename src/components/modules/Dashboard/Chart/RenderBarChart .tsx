"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
const data = [
  { name: "Page A", uv: 200 },
  { name: "Page B", uv: 150 },
];

const RenderBarChart = () => {
  return (
    <div className="w-full h-full">
      <p className="font-medium my-5 text-xl">Subscription Purchase</p>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" stroke="#EB493B" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="uv" fill="#EB493B" barSize={30} className="rounded-xl" />
      </BarChart>
    </div>
  );
};

export default RenderBarChart;
