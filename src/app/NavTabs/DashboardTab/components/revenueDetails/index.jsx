"use client";

import { BarChart } from '@mui/x-charts/BarChart';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { useState } from 'react';
import DatePickerInput from '@/components/Shared/datePickerInput';

const chartData = [
  { month: 'Jan', revenue: 589.12 },
  { month: 'Feb', revenue: 840.2 },
  { month: 'Mar', revenue: 889.0 },
  { month: 'Apr', revenue: 203.0 },
  { month: 'May', revenue: 400.01 },
  { month: 'Jun', revenue: 920.12 },
  { month: 'Jul', revenue: 389.0 },
  { month: 'Aug', revenue: 882.0 },
  { month: 'Sep', revenue: 390.0 },
  { month: 'Oct', revenue: 910.0 },
  { month: 'Nov', revenue: 410.12 },
  { month: 'Dec', revenue: 840.2 },
];

const RevenueChart = () => {
   const [selected, setSelected] = useState("revenue");
  const totalRevenue = chartData.reduce((acc, curr) => acc + curr.revenue, 0).toFixed(2);

  return (
    <div className="bg-light-gray dark:bg-dark-blue rounded-xl shadow-md w-full p-5">
      <div className="flex xs:flex-row flex-col gap-2 justify-between">
        <div className="inline-flex bg-gray-100 dark:bg-dark-blue rounded-xl p-[2px] xs:order-1 order-2 max-w-max">
          <button
            onClick={() => setSelected("revenue")}
            className={`px-4 py-1 rounded-xl text-sm font-medium transition ${
              selected === "revenue"
                ? "bg-white text-gray-900 shadow"
                : "text-gray-600"
            }`}
          >
            Revenue
          </button>
          <button
            onClick={() => setSelected("customer")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
              selected === "customer"
                ? "bg-white text-gray-900 shadow"
                : "text-gray-600"
            }`}
          >
            Customer
          </button>
          <button
            onClick={() => setSelected("orders")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
              selected === "orders"
                ? "bg-white text-gray-900 shadow"
                : "text-gray-600"
            }`}
          >
            Orders
          </button>
        </div>
        <div className="flex gap-2 xs:order-2 order-1 justify-between">
          <select className="border border-gray-100 dark:border-white-20 rounded-md px-2 py-1 text-sm bg-white">
            <option>All Categories</option>
          </select>
         <DatePickerInput />
        </div>
      </div>

      <CardContent>
        <Box className="flex justify-between items-center mb-2">
          <Typography variant="h6">Revenue</Typography>
          <Typography variant="body2" className="text-gray-500">
            Total Revenue:{" "}
            <span className="text-blue-700 font-semibold">${totalRevenue}</span>
          </Typography>
        </Box>

        <BarChart
    xAxis={[
      {
        scaleType: "band",
        data: chartData.map((d) => d.month),
        grid: false,
      }
    ]}
    yAxis={[
      {
        grid: true,
          color: "#6B5AED"
      }
    ]}
    series={[
      {
        data: chartData.map((d) => d.revenue),
        color: "#6B5AED"
      }
    ]}
    height={300}
      slotProps={{
    axisLabel: {
      style: {
        fill: "#FFFFFF", // Tailwind's text-gray-600
        fontSize: 12,
      },
    },
    tickLabel: {
      style: {
        fill: "#FFFFFF", // Tailwind's text-blue-700
        fontWeight: 500,
        fontSize: 12,
      },
    },
  }}
  />
        <Typography
          variant="caption"
          className="text-gray-400 dark:text-white text-center mt-2 block"
        >
          • 2023
        </Typography>
      </CardContent>
    </div>
  );
};

export default RevenueChart;
