"use client";
import React, { useState } from "react";
import Image from "next/image";
import MessageIcon from "@/assets/staticIcon/MessageIcon.png";
const activities = [
  {
    date: "Today",
    items: [
      {
        avatar: MessageIcon,
        name: "Christian Wood",
        action: "Sent Message to",
        target: "Nikita Houston",
        time: "1 min ago",
        type: "message",
        color: "text-yellow-500",
      },
      {
        avatar: MessageIcon,
        name: "Nikita Houston",
        action: "Replay your message",
        target: '"Hello"',
        time: "1 min ago",
        type: "email",
        color: "text-gray-400 dark:text-white",
      },
      {
        avatar: MessageIcon,
        name: "Christian Wood",
        action: "Accept Order from",
        target: "Ebay",
        time: "1 min ago",
        type: "order",
        color: "text-pink-500",
      },
      {
        avatar: MessageIcon,
        name: "Rohan Walker",
        action: "Replay your message",
        target: "Ebay",
        time: "1 min ago",
        type: "email",
        color: "text-blue-500",
      },
    ],
  },
  {
    date: "Yesterday",
    items: [
      {
        avatar: MessageIcon,
        name: "Christian Wood",
        action: "Accept Order from",
        target: "Amazon",
        time: "12:30PM",
        color: "text-purple-500",
      },
    ],
  },
  {
    date: "25 MAY 2024",
    items: [
      {
        avatar: MessageIcon,
        name: "Christian Wood",
        action: "Accept Order from",
        target: "Walmart",
        time: "11:20AM",
        color: "text-green-500",
      },
    ],
  },
];

export default function RecentActivities() {
  const [selected, setSelected] = useState("message");
  return (
    <div className="bg-light-gray dark:bg-dark-blue rounded-xl shadow-md w-full max-w-5xl h-[416px] overflow-x-auto">
      <div className="flex xs:flex-row flex-col justify-between gap-2 xs:items-center mb-4 p-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          Recent Activities
        </h2>
        <div>
          {/* <button className="px-4 py-1 text-sm bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200">Message</button>
          <button className="px-4 py-1 text-sm bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200">Email</button> */}
          <div className="inline-flex bg-gray-100 dark:bg-dark-blue rounded-xl p-[1px]">
            <button
              onClick={() => setSelected("message")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                selected === "message"
                  ? "bg-white dark:bg-black text-gray-900 dark:text-white shadow"
                  : "text-gray-600"
              }`}
            >
              Message
            </button>
            <button
              onClick={() => setSelected("email")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                selected === "email"
                  ? "bg-white text-gray-900 shadow"
                  : "text-gray-600"
              }`}
            >
              Email
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        {activities.map((section, index) => (
          <div key={index} className="mb-4">
            <p className="text-xs font-medium text-gray-400 uppercase mb-2">
              {section.date}
            </p>
            {section.items.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3 py-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </div>
                <div className="text-sm text-gray-700">
                  <span className="font-medium">{item.name}</span> {item.action}{" "}
                  <span className="text-indigo-500 font-medium">
                    {item.target}
                  </span>
                  <span className="text-gray-400 text-xs ml-2">
                    {item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
