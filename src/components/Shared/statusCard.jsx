// components/StatsCard.tsx
import Image from 'next/image';



export default function StatusCard({
  icon,
  title,
  value,
  change,
  changeColor = 'text-red-500',
  trendingIcon,
  note,
}) {
  return (
    <div className="rounded-2xl border border-gray-100 dark:border-white-20">
      <div className="flex items-center space-x-3 bg-gray-100 dark:bg-dark-blue border-b border-white-20 p-2 rounded-t-2xl">
        <div className="w-[54px] h-[54px]  flex items-center justify-center">
          <Image src={icon} alt="icon" width={54} height={54} />
        </div>
        <div>
          <p className="text-medium-12 text-gray-500 dark:text-white">{title}</p>
          <p className="text-semibold-22 text-gray-900 dark:text-white">{value}</p>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-500 dark:text-white p-2">
        <span className={`flex items-center space-x-1 ${changeColor}`}>
          <Image src={trendingIcon} alt="icon" width={16} height={16} />
          <span className='text-medium-12'>{change}</span>
        </span>
        <p className='text-medium-12 w-[calc(100%-45px)]'>{note}</p>
      </div>
    </div>
  );
}
