import React from "react";

const accountData = [
  {
    label: "Account Name",
    value: "TRUCK GEAR",
  },
  {
    label: "Contact Owner",
    value: "Suchithkumar@Onechanneladmin.Com",
  },
];

const phoneNumbers = [
  "+1 344 434 4455",
  "+1 344 434 4455",
];

const emails = [
  "Jillali@Onechanneladmin.Com",
  "Jillali@Onechanneladmin.Com",
];

const companyInfo = [
  {
    label: "Company Type",
    value: "Partner",
  },
  {
    label: "Industry",
    value: "Accounting",
  },
];

const otherInfo = [
  {
    label: "Website",
    value: "WWW.TRUCKGEAR.COM",
  },
  {
    label: "No of Employees",
    value: "10",
  },
];

const creditInfo = [
  {
    label: "Credit Limit",
    value: "$ 5000",
    icon: "+",
  },
  {
    label: "Available Credit",
    value: "$ 806.71",
    icon: "⟳",
  },
];

const AccountDetails = () => {
  return (
    <div className="w-full bg-white dark:bg-navy-blue rounded-xl shadow-md p-6 text-sm sm:hidden dark:border dark:border-white-20">
      <div className="grid grid-cols-2 gap-6 mb-4">
        {accountData.map((item, index) => (
          <div key={index}>
            <p className="text-gray-500 dark:text-white uppercase">{item.label}</p>
            <p className="text-regular-14 dark:text-white">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 mb-4">
        <div>
          <p className="text-gray-500 uppercase flex items-center justify-between">
            Phone Number <span className="text-blue-600 dark:text-white text-xl">+</span>
          </p>
          {phoneNumbers.map((num, i) => (
            <p className="text-regular-14 dark:text-white" key={i}>{num}</p>
          ))}
        </div>
        <div>
          <p className="text-gray-500 dark:text-white uppercase flex items-center justify-between">
            Email <span className="text-blue-600 dark:text-white text-xl">+</span>
          </p>
          {emails.map((email, i) => (
            <p className="text-regular-14 dark:text-white" key={i}>{email}</p>
          ))}
        </div>
      </div>

      {/* Company Type & Industry */}
      <div className="grid grid-cols-2 gap-6 mb-4">
        {companyInfo.map((item, index) => (
          <div key={index}>
            <p className="text-gray-500 dark:text-white uppercase">{item.label}</p>
            <p className="text-regular-14 dark:text-white">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Website & Employees */}
      <div className="grid grid-cols-2 gap-6 mb-4">
        {otherInfo.map((item, index) => (
          <div key={index}>
            <p className="text-gray-500  dark:text-white uppercase">{item.label}</p>
            <p className="text-regular-14 dark:text-white">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Credit Info */}
      <div className="grid grid-cols-2 gap-6">
        {creditInfo.map((item, index) => (
          <div key={index}>
            <p className="text-gray-500 dark:text-white uppercase flex items-center justify-between">
              {item.label} <span className="text-blue-600 dark:text-white text-xl">{item.icon}</span>
            </p>
            <p className="text-regular-14 dark:text-white">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountDetails;
