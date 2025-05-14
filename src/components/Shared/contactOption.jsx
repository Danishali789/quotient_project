'use client';

import Image from 'next/image';
import PhoneIcon from "@/assets/icon/phone-icon.svg"
import messageIcon from "@/assets/icon/message-icon.svg"
import calenderIcon from "@/assets/icon/email-icon.svg"
import emailIcon from "@/assets/icon/calender-icon.svg"

const contactOptions = [
  { title: 'Email', icon: emailIcon },
  { title: 'Call', icon: PhoneIcon },
  { title: 'Message', icon: messageIcon },
  { title: 'Calendar', icon: calenderIcon },
];

export default function ContactOptions() {
  return (
    <div className="card flex items-center justify-between dark:bg-navy-blue">
      {contactOptions.map((option, index) => (
        <div key={option.title} className="flex flex-col items-center text-center text-sm text-gray-700 dark:text-white relative px-3">
          <Image src={option.icon} alt={option.title} width={20} height={20} />
          <span className="mt-1 text-regular-12">{option.title}</span>

          {/* Divider between items */}
          {index !== contactOptions.length - 1 && (
            <div className="absolute right-0 top-1/2 h-6 w-px -translate-y-1/2 bg-gray-200" />
          )}
        </div>
      ))}
    </div>
  );
}
