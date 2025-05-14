"use client";
import { useState } from "react";
import Image from "next/image";
import CompanyLogo from "@/assets/image/company_logo.svg";
import SearchIcon from "@/assets/icon/search.svg";
import NotificationIcon from "@/assets/icon/notification.svg";
import DownArrow from "@/assets/icon/down_line.png";
import MobileSidebar from "../SideBar/mblSideBar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-t border-b border-gray-200 dark:border-white-20 bg-white dark:bg-navy-blue px-6 py-3 shadow-sm">
      
      <div className="flex items-center justify-between">
        <div className=" text-xl font-bold text-blue-600">
          <div className="sm:hidden block">

          <MobileSidebar />
          </div>
          <div className="sm:block hidden">

          <Image width={125} height={32} alt="company logo" src={CompanyLogo} />
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="sm:w-1/3 w-[calc(100%-265px)] relative">
          <Image
            width={16}
            height={16}
            alt="search icon"
            src={SearchIcon}
            className="absolute left-3 top-1/2 h-4 w-4 text-gray-400 dark:text-white -translate-y-1/2"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-xl border border-gray-100 dark:border-white-20 dark:bg-dark-blue pl-10 pr-4 py-2 text-sm focus:border-blue-500 focus:outline-none dark:text-white"
          />
        </div>

        {/* Right: User Profile */}

        <div className="flex items-center space-x-4">
          <div className="relative cursor-pointer">
            <Image
              width={38}
              height={38}
              alt="company logo"
              src={NotificationIcon}
            />
            {/* <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" /> */}
          </div>

          {/* User Profile */}
          <div
            className="relative flex items-center space-x-3 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="h-9 w-9 flex items-center justify-center rounded-full bg-blue-600 text-white text-semibold-16">
              JD
            </div>
            <div className="flex flex-col">
              <span className="text-medium-12 text-gray-800 dark:text-white">
                John Doe
              </span>
              <span className="text-xs text-gray-500 dark:text-white">Admin</span>
            </div>

            <Image width={16} height={16} alt="down arrow" src={DownArrow} />

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 top-12 w-40 rounded-md border bg-white dark:bg-dark-blue shadow-md z-10">
                <ul className="text-sm text-gray-700 dark:text-white">
                  <li className="px-4 py-2 hover:bg-gray-100">Profile</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Settings</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
