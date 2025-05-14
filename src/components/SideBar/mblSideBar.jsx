import { useState } from "react";
import { Menu, X } from 'lucide-react'; // Hamburger and Close icons
import Image from "next/image";
import CompanyLogo from "@/assets/image/company_logo.svg";

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  console.log("isOpen",isOpen)
  return (
    <>
      <button
        className="p-2 sm:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} className="text-black dark:text-white" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30  z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-dark-blue shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between p-4 text-xl font-semibold border-b">
            <div>

           <Image width={125} height={32} alt="company logo" src={CompanyLogo} />
            </div>
             <button
        className="p-2 sm:hidden z-50 dark:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
         <X size={24} className="text-black dark:text-white"/>
      </button>
            </div>
        <ul className="p-4 space-y-4 text-gray-700 dark:text-white text-semibold-22">
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Tasks</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
    </>
  );
}
