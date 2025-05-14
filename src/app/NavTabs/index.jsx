// components/Tabs/NavTabs.tsx
'use client';

import { useState } from 'react';
import DashboardTab from './DashboardTab';
import OrderTab from './OrderTabs';
import NotesTab from './NotesTab';
import AddressTab from './AdressTab';
import TasksTab from './TasksTab';


const tabs = [
  { title: 'Dashboard', component: <DashboardTab /> },
  { title: 'Orders', component: <OrderTab /> },
  { title: 'Notes', component: <NotesTab /> },
  { title: 'Address', component: <AddressTab /> },
  { title: 'Tasks', component: <TasksTab /> },
];

export default function NavTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full sm:w-[calc(100%-399px)] mx-auto mt-6">
      {/* Tab Navigation */}
      <div className="flex space-x-2 overflow-x-auto border-b border-gray-200 dark:border-white-20 rounded-t-xl">
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            onClick={() => setActiveTab(index)}
            className={`whitespace-nowrap px-4 py-2 text-regular-14 transition-all  rounded-t-xl
              ${
                activeTab === index
                  ? 'bg-white dark:bg-navy-blue text-[#513CCE] dark:text-[#8378FF] border border-b-white border-gray-200 dark:border-white-20'
                  : 'bg-gray-100 dark:bg-dark-blue text-gray-600 dark:text-white hover:text-purple-600 dark:border dark:border-white-20'
              }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white dark:bg-navy-blue border border-t-0 border-gray-200 dark:border-white-20 p-4 rounded-b-xl shadow-sm">
        {tabs[activeTab].component}
      </div>
    </div>
  );
}
