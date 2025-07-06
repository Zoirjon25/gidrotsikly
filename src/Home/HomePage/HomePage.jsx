import React from 'react'
import { FaRubleSign } from "react-icons/fa";

export default function HomePage() {
  return (   <>
   <div className='w-[100%] h-[500px] flex justify-center items-center gap-15 pt-5 pl-10'>
    <div className='flex'>
        <img className='w-[800px] h-[380px]' src="https://i.postimg.cc/WzzSYRsV/image.png" alt="" />
    </div>
    <div className='w-[270px] h-[380px] flex flex-col   border-1 border-gray-400  '>
        <div className='flex  '>
            <button className='w-[90px] h-[30px] border-1 border-[#1C62CD] bg-[#1C62CD] text-white mt-0.5 '>Aкция</button>
            <h1 className='text-[#1C62CD] text-3xl font-bold pl-9'>190 000</h1>
            <FaRubleSign className='text-3xl text-[#1C62CD] pt-1'/>
        </div>
        <div className='pt-3 pl-15'>
         <img className='' src="https://i.postimg.cc/cCDjRXxb/438d21d0914ff349e903072c903b7b8a-1.png" alt="" />
        </div>
        <div className='text-center'>
            <h1 className='text-3xl text-bold'>Лодочный мотор 
            Suzuki DF9.9BRS</h1>
        </div>
        <div className='w-[269px] h-[82px] bg-[#F0F0F4] text-center pt-3'>
        <h1 className='text-xl font-semibold'>Акция действует до</h1>
        <h1 className='text-[#1C62CD] font-bold text-xl'>31.08.2025</h1>
        </div>
    </div>
   </div>
  </>
  )
}