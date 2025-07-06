import React from 'react'
import { TfiShoppingCart } from "react-icons/tfi";
import { GoHeart } from "react-icons/go";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";



export default function ShoppingPage() {
  return ( <>
  <div className='w-[100%] flex flex-col justify-start items-start pl-13'>
    <div>
    <h1 className='text-4xl font-bold'>Популярные товары</h1>
    </div>
    <div className='flex gap-10 pt-10 '>
    <div className="relative  ">
          <h1 className="text-gray-800 font-medium">запчасти</h1>
          <div className="absolute left-0 bottom-[-20] w-full h-1 rounded-sm  bg-blue-600"></div>
          </div>
        <h1>моторы</h1>
        <h1>шины </h1>
        <h1>электроника</h1>
        <h1>инструменты</h1>
        <h1>аксессуары </h1>
    </div>
  </div>
  <div className='w-[100%] flex justify-around items-center pt-15'>
    <div className='flex'>
    <MdArrowBackIos className='text-4xl'/>
    </div>
    {/*shopping mal flex-1 */}
    <div className='w-[280px] h-[390px] border-2 border-[#CDCDCD] rounded-sm hover:border-1 hover:border-white hover:bg-white hover:shadow-black hover:shadow-sm '>
     <div  className='flex justify-end items-end pr-3 pt-3'>
     <GoHeart className='text-3xl'/>
     </div>
     <div className='flex justify-around items-center '>
       <img src="https://i.postimg.cc/K8WwxwSY/cq5dam-web-768-1.png" alt="" />
     </div>
     <div className='text-2xl text-black font-semibold text-center flex flex-col'>
        <h1 className='hover:text-[#1C62CD]'>Водонепроницаемый
        Рюкзак</h1>
        <h2 className='pt-2 text-black text-3xl font-bold hover:text-[#1C62CD] '>9 800 ₽</h2>
     </div>
     <div className='w-[56px] h-[38px]  rounded-tl-xl ml-55 bg-[#1C62CD]'>
     <TfiShoppingCart  className='text-4xl text-white ml-3 '/>
     </div>
    </div>
    {/*shopping mal flex-2 */}
    <div className='w-[280px] h-[390px] border-2 border-[#CDCDCD] rounded-sm hover:border-1 hover:border-white hover:bg-white hover:shadow-black hover:shadow-sm'>
     <div  className='flex justify-between items-center pr-3 '>
        <button className='w-[63px] h-[25px] border-1 border-[#1C62CD] bg-[#1C62CD]  text-white'>SALE</button>
        <div className=' '>
           
     <GoHeart className='text-3xl mt-3  '/>
        </div>
     </div>
     <div className='flex justify-around items-center '>
       <img src="https://i.postimg.cc/MpdwJdtP/55a4f760715a1-1.png" alt="" />
     </div>
     <div className='text-2xl text-black font-semibold text-center flex flex-col'>
        <h1 className='hover:text-[#1C62CD]'>Спасательный жилет BRP Men's Airflow PFD
        </h1>
        <h2 className=' text-black text-3xl font-bold pt-2 hover:text-[#1C62CD]'>6 900 ₽</h2>
     </div>
     <div className='w-[56px] h-[38px]  rounded-tl-xl ml-55 bg-[#1C62CD]'>
     <TfiShoppingCart  className='text-4xl text-white ml-3 '/>
     </div>
    </div>
    {/*shopping mal flex-3 */}
    <div className='w-[280px] h-[390px] bg-white shadow-sm shadow-black rounded-sm'>
     <div  className='flex justify-end items-end pr-3 '>
     <GoHeart className='text-3xl mt-3'/>
     </div>
     <div className='flex justify-around items-center '>
       <img src="https://i.postimg.cc/76X03vN1/s-l225-1.png" alt="" />
     </div>
     <div>
    
     </div>
     <div className='text-2xl text-black font-semibold text-center flex flex-col'>
        <h1 className='text-[#1C62CD]'>
        BRP Audio-Premium System</h1>
        <h2 className='pt-2 text-3xl font-bold text-[#1C62CD]'>68 000 ₽</h2>
     </div>
     <div className='w-[56px] h-[38px]  rounded-tl-xl ml-55 bg-[#1C62CD]'>
     <TfiShoppingCart  className='text-4xl text-white ml-3 '/>
     </div>
    </div>
    {/*shopping mal flex-4 */}
    <div className='w-[280px] h-[390px] border-2 border-[#CDCDCD] rounded-sm hover:border-1 hover:border-white hover:bg-white hover:shadow-black hover:shadow-sm'>
     <div  className='flex justify-between items-center pr-3 '>
     <button className='w-[63px] h-[25px] border-1 border-[#1C62CD] bg-[#1C62CD]  text-white'>SALE</button>
     <GoHeart className='text-3xl mt-3'/>
     </div>
     <div className='flex justify-around items-center '>
       <img src="https://i.postimg.cc/RhLS69Q9/s-l1600-1.png" alt="" />
     </div>
     <div className='text-2xl text-black font-semibold text-center flex flex-col'>
       <h1 className='hover:text-[#1C62CD]'>Спасательное
       снаряжение</h1>
        <h2 className='pt-2 text-black text-xl font-bold hover:text-[#1C62CD]'>нет в наличии</h2>
     </div>
     <div className="relative  ">
          <h1 className="text-[#1C62CD] font-medium text-center cursor-pointer">Сообщить о поступлении</h1>
          <div className="absolute left-10 bottom-0 w-[200px] h-0.5 rounded-sm cursor-pointer bg-[#1C62CD]"></div>
          </div>
    </div>
    <div className='felx'>
    <MdArrowForwardIos className='text-4xl' />
    </div>
  </div>
  <div className='pt-10 flex justify-around items-center'>
    <button className='w-[252px] h-[50px] border-1 border-[#F0F0F4] bg-[#F0F0F4] '>Показать еще</button>
  </div>
  </>

  )
}
