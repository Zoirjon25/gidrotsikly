import React from 'react'
import { SlSpeedometer } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { TfiShoppingCart } from "react-icons/tfi";

export default function HeaderPage() {
  return (  <>
   <div className='w-[100%] flex justify-around items-center  text-black pt-5'>
    <div className='flex gap-5 text-lg font-bold '>
        <h1>Магазины</h1>
        <h1>Акции</h1>
        <h1>Доставка и оплата</h1>
    </div>
    
    <div className="flex flex-col items-center gap-2 pt-1">
    <SlSpeedometer className='text-4xl text-black '/>
  <h1 className="font-bold text-lg">DRIVE MOTO</h1>
</div>

    <div className='flex font-bold '>
    <IoLocationOutline className='text-2xl text-black'/>
        <h1 className='text-lg'>Москва,  ул. Науки  25</h1>
    </div>
    <div className='flex gap-2 '>
    <FaRegHeart className='text-xl'/>
    <IoPersonSharp  className='text-xl'/>
    <TfiShoppingCart className='text-xl'/>
    </div>
   </div>
  </>
  )
}