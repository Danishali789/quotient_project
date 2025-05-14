"use client";
import React, { useState } from "react";
import CountryFLag from "@/assets/staticIcon/CountryFlag.png";
import Image from "next/image";

const BusinessDetailsForm = () => {
  const [accountName, setAccountName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumbers, setPhoneNumbers] = useState([
    { country: "US", number: "+1 344 434 4455" },
  ]);
  const [contactOwner, setContactOwner] = useState("");

  const handlePhoneAdd = () => {
    setPhoneNumbers([...phoneNumbers, { country: "US", number: "" }]);
  };

  const handlePhoneRemove = (index) => {
    const updatedPhoneNumbers = phoneNumbers.filter((_, i) => i !== index);
    setPhoneNumbers(updatedPhoneNumbers);
  };

  const handleChangePhone = (index, field, value) => {
    const updatedPhoneNumbers = [...phoneNumbers];
    updatedPhoneNumbers[index][field] = value;
    setPhoneNumbers(updatedPhoneNumbers);
  };

  const handleSave = () => {
    console.log("Form saved:", {
      accountName,
      email,
      phoneNumbers,
      contactOwner,
    });
  };

  return (
    <div className="sm:max-w-lg max-w-full sm:mx-auto p-4 bg-white dark:bg-dark-blue border border-gray-200  dark:border-white-20 rounded-xl shadow">
      <div className="flex justify-between mb-4">
        <h2 className="text-semibold-16 dark:text-white">Business Details</h2>
        <button
          type="button"
          onClick={handleSave}
          className="text -semibold-16 text-green-100"
        >
          Save & Close
        </button>
      </div>
      <form>
        {/* Account Name */}
        <div className="mb-4">
          <label
            htmlFor="accountName"
            className="block text-medium-12 text-gray-700 dark:text-white"
          >
            Account Name
          </label>
          <input
            type="text"
            id="accountName"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-white-20 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-medium-12 text-gray-700 dark:text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-white-20 dark:text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Phone Numbers */}
        <div className="mb-4">
          <label className="block text-medium-12 text-gray-700 dark:text-white">
            Phone Numbers
          </label>
          {phoneNumbers.map((phone, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <div className="relative flex min-w-[100px] items-center justify-center px-3 py-2 gap-1 border border-gray-300 dark:border-white-20 rounded-md">
                 <Image src={CountryFLag} alt="icon" width={24} height={16} />
                 <select
                value={phone.country}
                onChange={(e) =>
                  handleChangePhone(index, "country", e.target.value)
                }
                className=" outline-none border-none focus:ring-0 focus:outline-none bg-transparent dark:text-white"
              >

                <option value="US">US</option>
                <option value="UK">UK</option>
              </select>
              </div>
             
              <input
                type="text"
                value={phone.number}
                onChange={(e) =>
                  handleChangePhone(index, "number", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 dark:border-white-20 rounded-md dark:text-white"
              />
              <button
                type="button"
                onClick={() => handlePhoneRemove(index)}
                className="text-red-500 hover:text-red-700 border border-red-500 rounded-xl p-[6px]"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Contact Owner */}
        <div className="mb-4">
          <label
            htmlFor="contactOwner"
            className="block text-medium-12 text-gray-700 dark:text-white"
          >
            Contact Owner
          </label>
          <select
            id="contactOwner"
            value={contactOwner}
            onChange={(e) => setContactOwner(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-white-20 rounded-md  dark:text-white shadow-sm"
          >
            <option value="">Select Contact Owner</option>
            <option value="Suchithkumar@Onechanneladmin.Com">
              Suchithkumar@Onechanneladmin.Com
            </option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default BusinessDetailsForm;
