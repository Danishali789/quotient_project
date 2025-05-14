import UserStatus from "@/components/Badge/UserStatus";
import ContactOptions from "@/components/Shared/contactOption";
import React from "react";
import BusinessDetailsForm from "../Shared/businessDetailForm";

export default function SideBar() {
  return (
    <div className=" flex-col gap-4 sm:w-[390px] w-full dark:bg-dark-blue sm:flex hidden">
      <div className="flex sm:flex-col xs:flex-row flex-col gap-4 sm:w-[390px] w-ful ">
        <div className="card flex justify-between flex-1 dark:bg-navy-blue">
          <div className="flex gap-2">
            <div className="h-10 w-10 flex flex-col items-center justify-center rounded-full bg-blue-600 text-white font-semibold text-sm">
              <div>JD</div>
              <span className="font-medium text-[10px]">edit</span>
            </div>
            <div className="flex flex-col ">
              <div className="flex gap-2 mb-1">
                <span className="text-sembold-16 text-gray-800 dark:text-white">John Doe</span>
                <UserStatus status="Business" />
              </div>
              <span className="text-xs text-gray-500 dark:text-white">Admin</span>
            </div>
          </div>

          <button type="button" className="h-max text-blue-100 text-regular-12">
            change status
          </button>
        </div>
        <div className="flex-1 dark:bg-navy-blue">
          <ContactOptions />
        </div>
      </div>
      <BusinessDetailsForm />
    </div>
  );
}
