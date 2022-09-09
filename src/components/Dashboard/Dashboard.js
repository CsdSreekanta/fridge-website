import React from "react";
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";


const Dashboard = () => {
  const data = [
    {
      name: "January",
      Investment: 4000,
      Sell: 2400,
      Revenue: 2400,
    },
    {
      name: "February",
      Investment: 3000,
      Sell: 1398,
      Revenue: 2210,
    },
    {
      name: "March",
      Investment: 2000,
      Sell: 9800,
      Revenue: 2290,
    },
    {
      name: "April",
      Investment: 2780,
      Sell: 3908,
      Revenue: 2000,
    },
    {
      name: "May",
      Investment: 1890,
      Sell: 4800,
      Revenue: 2181,
    },
    {
      name: "June",
      Investment: 2390,
      Sell: 3800,
      Revenue: 2500,
    },
    {
      name: "July",
      Investment: 3490,
      Sell: 4300,
      Revenue: 2100,
    },
  ];
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-2">
      <div>
        <h1 className="text-3xl font-bold p-4 text-orange-500 "> Investment vs Sell</h1>
        <BarChart width={800} height={350} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Investment" fill="green" />
          <Bar dataKey="Sell" fill="blue" />
        </BarChart>
      </div>
      <div>
        <h1 className="text-3xl font-bold p-4 text-orange-500">Revenue</h1>
      <PieChart width={800} height={350}>
  <Pie data={data} dataKey="Revenue" nameKey="name" cx="50%" cy="50%" fill="blue" outerRadius={100} label  />
  <Tooltip></Tooltip>
  <Legend></Legend>

</PieChart>
      </div>
    </div>
  );
};

export default Dashboard;
