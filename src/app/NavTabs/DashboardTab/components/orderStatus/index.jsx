"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PieChart } from "@mui/x-charts/PieChart";
import AllOrder from "@/assets/staticIcon/allOrder.png";
import NewOrder from "@/assets/staticIcon/newOrders.png";
import PendingOrder from "@/assets/staticIcon/pendingorder.svg";
import DispatchOrder from "@/assets/staticIcon/dispatchOrder.png";
import DeliveredOrder from "@/assets/staticIcon/delivered.png";
import CanceledOrder from "@/assets/staticIcon/canceledOrder.png";
import Image from "next/image";
import { useState } from "react";
import DatePickerInput from "@/components/Shared/datePickerInput";

const orderData = [
  { label: "All", value: 50, color: "#7c3aed", icon: AllOrder },
  { label: "New", value: 50, color: "#6366f1", icon: NewOrder },
  { label: "Pending", value: 50, color: "#8b5cf6", icon: CanceledOrder },
  { label: "Dispatched", value: 50, color: "#3b82f6", icon: DispatchOrder },
  { label: "Delivered", value: 123, color: "#10b981", icon: DeliveredOrder },
  { label: "Cancelled", value: 50, color: "#f43f5e", icon: CanceledOrder },
];

export default function OrderStatus() {
  const [selectedYear, setSelectedYear] = useState(new Date());
  const total = orderData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-light-gray dark:bg-dark-blue rounded-xl shadow-md w-full max-w-5xl xs:h-[416px] h-auto">
      <div className="flex xs:flex-row flex-col gap-2 justify-between xs:items-center  p-4 mb-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold dark:text-white">Order Status</h2>
        <div className="flex justify-between gap-2">
          <select className="border border-gray-100 dark:border-white-20 rounded-md px-2 py-1 text-sm bg-white dark:bg-dark-blue dark:text-white">
            <option>All Categories</option>
          </select>
          {/* <div>
              <select className="border border-gray-100 rounded-md px-2 py-1 text-sm bg-white">
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
          </select>
          </div> */}
          {/* <DatePicker
  selected={selectedYear}
  onChange={(date) => setSelectedYear(date)}
  showYearPicker
  dateFormat="yyyy"
  className="your-custom-input-class"
/> */}
<DatePickerInput />
        
        </div>
      </div>

      <div className="flex flex-col h-9/12 md:flex-row gap-6 p-4">
        {/* Left status cards */}
        <div className="xs:w-1/2 h w-full grid grid-cols-2 flex-1">
          {orderData.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center border-b border-gray-100 dark:border-white-20 odd:border-r odd:border-gray-100 pl-2 dark:odd:border-white-20"
            >
              <div className="min-w-[28px] w-[28px] h-[28px] mr-2">
                <Image
                  src={item.icon}
                  alt="Next"
                  width={28}
                  height={28}
                  className="w-full"
                />
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-white">{item.label}</div>
                <div className="font-semibold text-lg dark:text-white">{item.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Pie Chart */}
        <div className="xs:w-1/2 h w-full flex-1 flex items-center justify-center">
          <div className="chart-container relative w-[200px] h-[200px]">
            <PieChart
              series={[
                {
                  data: orderData.map((item) => ({
                    id: item.label,
                    value: item.value,
                    color: item.color,
                    label: "",
                  })),
                  innerRadius: 70,
                  outerRadius: 100,
                  arcLabel: (item) =>
                    `${((item.value / total) * 100).toFixed(1)}%`,
                  arcLabelTextColor: '#ffffff', // <-- change text color
             arcLabelFontSize: 12,
                },
              ]}
              width={220}
              height={220}
              margin={{ top: 10, bottom: 10, left: 10, right: 10 }}
              slotProps={{
                legend: { hidden: true },
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
              {total}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
