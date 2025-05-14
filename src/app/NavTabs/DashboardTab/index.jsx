import React from 'react'
import ProductSlider from './components/ProductSlider'
import OrderStatus from './components/orderStatus'
import RecentActivities from './components/recenActivities'
import RecentOrders from './components/recentOrders'
import RevenueChart from './components/revenueDetails'
import Breadcrumb from '@/components/BreadCrumbs'

export default function DashboardTab() {
   
  return (
    <section>
     
       <div className='flex flex-col gap-3'>
        <ProductSlider />
        <div className='flex gap-3 lg:flex-row flex-col'>
            <OrderStatus />
            <RecentActivities />
        </div>
        <div>
          <RecentOrders />
        </div>
        <div>
          <RevenueChart />
        </div>
    </div>
    </section>
    
  )
}
