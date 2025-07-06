import React from 'react'

export default function AboutPage() {
  return ( <>
    <div className='w-[1100px] h-[150px] flex justify-around items-center ml-17 bg-[#1C62CD] border-[#1C62CD] mt-20'>
        <div className='flex'>
            <img src="https://i.postimg.cc/fT1gQS09/CFMOTO-X6-EPS-blue-2.png" alt="" />
            <img src="https://i.postimg.cc/g0HMhMtV/2018-Maverick-X3-X-rc-TURBO-R-Carbon-Black-and-Octane-Blue-3-4-front4072-2.png" alt="" />
        </div>
        <div className='flex'>
            <h1 className='text-white font-semibold w-[250px] text-4xl'>CКИДКИ 
 на все запчасти 
до 70%</h1>
        </div>
        <div className='flex'>
            <button className='w-[285px] h-[55px] border-1 bg-white border-white font-stretch-50% text-2xl'>ПОСМОТЕТЬ ВСЕ</button>
        </div>
    </div>
  </>
  )
}
