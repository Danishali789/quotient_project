import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar } from 'lucide-react';

const DatePickerInput = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="flex flex-col gap-2">
      {/* <label htmlFor="date-picker" className="font-semibold text-sm text-gray-700">
        Select Date
      </label> */}
      <div className="relative border border-gray-100 dark:border-white-20 rounded-md px-2 py-2 text-sm bg-white dark:bg-dark-blue shadow">
        <DatePicker
          id="date-picker"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Pick a Date"
           showYearPicker
           dateFormat="yyyy"
          className="w-full outline-none focus:outline-none focus:ring-0 border-none bg-transparent"
        />
        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary-black" size={18} />
      </div>
    </div>
  );
};

export default DatePickerInput;
