'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import StatusCard from '@/components/Shared/statusCard';
// import TotalIcon from "@/assets/staticIcon/totalTaken.svg";
import TotalTaken from '@/assets/staticIcon/totalTaken.svg';
import TotalRevenue from '@/assets/staticIcon/totalRevenue.svg';
import TotalOrder from '@/assets/staticIcon/totalOrder.svg';
import PendingOrder from '@/assets/staticIcon/pendingorder.svg';
import PendingReturn from '@/assets/staticIcon/pendingReturn.svg';
import TrendingDown from '@/assets/staticIcon/trending_down_fill.svg';
import TrendingUp from '@/assets/staticIcon/trending_up_line.svg';
import PrevIcon from '@/assets/icon/arrow-prev.svg';
import NextIcon from '@/assets/icon/arrow-next.svg';
import Image from 'next/image';

const stats = [
  {
    icon: TotalTaken,
    title: 'Total Taken',
    value: 123,
    change: '15%',
    note: 'From The Last Month',
    changeColor: 'text-red-500',
    trendingIcon: TrendingDown
  },
  {
    icon: TotalRevenue,
    title: 'Total Given',
    value: 87,
    change: '10%',
    note: 'From The Last Month',
    changeColor: 'text-green-500',
     trendingIcon: TrendingUp
  },
  {
    icon: TotalOrder,
    title: 'Total Taken',
    value: 123,
    change: '15%',
    note: 'From The Last Month',
    changeColor: 'text-red-500',
     trendingIcon: TrendingDown
  },
  {
    icon: PendingOrder,
    title: 'Total Given',
    value: 87,
    change: '10%',
    note: 'From The Last Month',
    changeColor: 'text-green-500',
     trendingIcon: TrendingUp
  },
  {
    icon: PendingReturn,
    title: 'Total Taken',
    value: 123,
    change: '15%',
    note: 'From The Last Month',
    changeColor: 'text-red-500',
     trendingIcon: TrendingDown
  },
  {
    icon: PendingReturn,
    title: 'Total Given',
    value: 87,
    change: '10%',
    note: 'From The Last Month',
    changeColor: 'text-green-500',
    trendingIcon: TrendingUp
  },
];

export default function ProductSlider() {
  const sliderConfig = {
  spaceBetween: 16,
  slidesPerView: 1,
  breakpoints: {
    0:{slidesPerView: 2},
    767: { slidesPerView: 3 },
    1220: { slidesPerView: 4 },
    1440: { slidesPerView: 5 },
  },
     pagination: {
      clickable: true,
    },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
modules: [Navigation,Pagination],
};

  return (
    <div className="relative w-full">
        <button className="swiper-button-next absolute top-[45%] left-[-10px] z-10">
          <Image src={NextIcon} alt="Prev" width={24} height={24} />
        </button>
        <button className="swiper-button-prev absolute top-[45%] -right-[10px] z-10">
          <Image src={PrevIcon} alt="Next" width={24} height={24} />
        </button>
      {/* </div> */}

      <Swiper {...sliderConfig}>
        {stats.map((item, index) => (
          <SwiperSlide key={index}>
            <StatusCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
