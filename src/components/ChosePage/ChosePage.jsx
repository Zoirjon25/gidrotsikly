import React from 'react'

export default function ChosePage() {
  return ( <>
   <div className='w-[100%]  flex justify-start items-start gap-15 pl-15'>
    <h1 className='text-[#2F3035] hover:text-black hover:font-bold hover:w-[230px] h-[35px] hover:border-1 hover:bg-[#F0F0F4] hover:border-[#F0F0F4] hover:text-center hover:pt-1 '>Поиск по  номеру</h1>
    <div className='w-[170px] h-[35px] border-1 pt-1 bg-[#F0F0F4] border-[#F0F0F4] text-center text-black '>
    <h1 className='font-bold'>Поиск по марке</h1>
    </div>
    <h1 className='text-[#2F3035] hover:text-black hover:font-bold hover:w-[230px] h-[35px] hover:border-1 hover:bg-[#F0F0F4] hover:border-[#F0F0F4] hover:text-center hover:pt-1'>Поиск по названию товара</h1>
   </div>
   <div className='flex justify-start items-start pt-10 pl-13'>
    <input className='w-[990px] h-[38px]  border-[#F0F0F4] bg-[#F0F0F4] text-[#656464] pl-5 rounded-sm' type="email" placeholder='Введите марку ' />
    <button className='w-[145px] h-[38px] border-1 border-[#1C62CD] bg-[#1C62CD] text-white rounded-sm'>искать</button>
   </div>
  </>
  )
}
