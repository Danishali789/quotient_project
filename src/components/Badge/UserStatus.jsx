import React from 'react'

export default function UserStatus({status}) {
  return (
    <div className='bg-[#E48D211A] flex items-center justify-center rounded-[99px] px-2'>
      <p className='text-[#E48D21] font-medium text-[10px]'>{status}</p>
    </div>
  )
}
