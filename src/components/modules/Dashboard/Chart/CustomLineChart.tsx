// // import {
// //   LineChart,
// //   Line,
// //   XAxis,
// //   YAxis,
// //   CartesianGrid,
// //   Tooltip,
// //   Legend,
// // } from 'recharts';

// import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// import {
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";

// const CustomLineChart = () => {
//   return (
//     <div>
//     <ChartContainer
//       config={{
//         customers: {
//           label: "Total Customer",
//           color: "hsl(142.1 76.2% 36.3%)",
//         },
//       }}
//       className="h-[300px] w-full"
//     >
//       <ResponsiveContainer width="100%" height="100%">
//         <AreaChart data={data}>
//           <defs>
//             <linearGradient id="colorCustomers" x1="0" y1="0" x2="0" y2="1">
//               <stop
//                 offset="5%"
//                 stopColor="hsl(142.1 76.2% 36.3%)"
//                 stopOpacity={0.2}
//               />
//               <stop
//                 offset="95%"
//                 stopColor="hsl(142.1 76.2% 36.3%)"
//                 stopOpacity={0}
//               />
//             </linearGradient>
//           </defs>
//           <XAxis
//             dataKey="period"
//             stroke="#888888"
//             fontSize={12}
//             tickLine={false}
//             axisLine={false}
//           />
//           <YAxis
//             stroke="#888888"
//             fontSize={12}
//             tickLine={false}
//             axisLine={false}
//             tickFormatter={(value) => `${value}k`}
//           />
//           <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
//           <Area
//             type="monotone"
//             dataKey="customers"
//             stroke="var(--color-customers)"
//             fillOpacity={1}
//             fill="url(#colorCustomers)"
//             strokeWidth={2}
//           />
//         </AreaChart>
//       </ResponsiveContainer>
//     </ChartContainer>
//     </div>
//   );
// };

// export default CustomLineChart;
