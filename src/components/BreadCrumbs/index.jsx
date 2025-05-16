'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Breadcrumb({ paths = [] }) {
    const [selected, setSelected] = useState("day");
  if (!paths.length) return null;

  return (
    <nav className=" flex justify-between xxs:flex-row flex-col gap-3 w-full px-4 py-4 border-b border-gray-200 dark:border-white-20 bg-white-20 dark:bg-dark-blue" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1 text-sm text-gray-600">
        {paths.map((item, index) => {
          const isLast = index === paths.length - 1;
          return (
            <li key={item.path || index} className="flex items-center">
              {!isLast ? (
                <>
                  <Link href={item.path} className="text-gray-500 dark:text-white hover:text-black">
                    {item.title}
                  </Link>
                  <span className="mx-1 text-gray-400 dark:text-white">/</span>
                </>
              ) : (
                <span className="font-semibold text-gray-900 dark:text-white">{item.title}</span>
              )}
            </li>
          );
        })}
      </ol>

      <div className="sm:hidden inline-flex bg-gray-100 dark:bg-dark-blue rounded-xl p-[2px] xs:order-1 order-2 max-w-max">
          <button
            onClick={() => setSelected("day")}
            className={`px-4 py-1 rounded-xl text-sm font-medium transition ${
              selected === "day"
                ? "bg-white text-gray-900 shadow"
                : "text-gray-600"
            }`}
          >
            Day
          </button>
          <button
            onClick={() => setSelected("week")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
              selected === "week"
                ? "bg-white text-gray-900 shadow"
                : "text-gray-600"
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setSelected("years")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
              selected === "years"
                ? "bg-white text-gray-900 shadow"
                : "text-gray-600"
            }`}
          >
            Year
          </button>
        </div>
    </nav>
  );
}
