import React from 'react'
import { TfiShoppingCart } from "react-icons/tfi";
import { GoHeart } from "react-icons/go";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";


export default function ShoppingPage2() {
  return ( <>
     <div className='w-[100%] flex flex-col justify-start items-start pl-13 pt-15'>
    <div>
    <h1 className='text-4xl font-bold'>С этим товаром покупают</h1>
    </div>
    <div className='flex gap-10 pt-10 '>
        <h1>запчасти</h1>
        <h1>моторы</h1>
        <h1>шины </h1>
    <div className="relative  ">
          <h1 className="text-gray-800 font-medium"> электроника</h1>
          <div className="absolute left-0 bottom-[-20] w-full h-1 rounded-sm  bg-blue-600"></div>
          </div>
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
       <div  className='flex justify-between items-center  pr-3 '>
       <button className='w-[63px] h-[25px] border-1 border-[#1C62CD] bg-[#1C62CD]  text-white'>SALE</button>
       <GoHeart className='text-3xl mt-3'/>
       </div>
       <div className='flex justify-around items-center pt-10 '>
         <img src="https://i.postimg.cc/G3xqSSb6/1813210658-w640-h640-brp-audio-portativnaya-sistema-295100797-1.png" alt="" />
       </div>
       <div className='text-2xl text-black font-semibold text-center flex flex-col pt-5'>
          <h1 className='hover:text-[#1C62CD]'>BRP Audio-портативная система
          </h1>
          <h2 className='pt-3 text-black text-xl font-bold hover:text-[#1C62CD] '>нет в наличии</h2>
       </div>
      
       <div className="relative  pt-3 ">
            <h1 className="text-[#1C62CD] font-medium text-center cursor-pointer ">Сообщить о поступлении</h1>
            <div className="absolute left-10 bottom-0 w-[200px] h-0.5 rounded-sm cursor-pointer bg-[#1C62CD]"></div>
            </div>
      </div>
      {/*shopping mal flex-2 */}
      <div className='w-[280px] h-[390px] border-2 border-[#CDCDCD] rounded-sm hover:border-1 hover:border-white hover:bg-white hover:shadow-black hover:shadow-sm'>
       <div  className='flex justify-end items-end pr-3 '>
          
             
       <GoHeart className='text-3xl mt-3  '/>
          
       </div>
       <div className='flex justify-around items-center pt-9'>
         <img src="https://i.postimg.cc/qqFt5Tq8/2178888-1.png" alt="" />
       </div>
       <div className='text-2xl text-black font-semibold text-center flex flex-col'>
          <h1 className='hover:text-[#1C62CD] pt-5'>Garmin Echomap Plus 62cv
          </h1>
          <h2 className=' text-black text-3xl font-bold pt-2 hover:text-[#1C62CD]'>45 800 ₽</h2>
       </div>
       <div className='w-[56px] h-[38px]  rounded-tl-xl ml-55 bg-[#1C62CD]'>
       <TfiShoppingCart  className='text-4xl text-white ml-3 '/>
       </div>
      </div>
      {/*shopping mal flex-3 */}
      <div className='w-[280px] h-[390px] border-2 border-[#CDCDCD] rounded-sm hover:border-1 hover:border-white hover:bg-white hover:shadow-black hover:shadow-sm'>
       <div  className='flex justify-between items-center pr-3 '>
       <button className='w-[63px] h-[25px] border-1 border-[#1C62CD] bg-[#1C62CD]  text-white'>SALE</button>
       <GoHeart className='text-3xl mt-3 bg-blue-700'/>
       </div>
       <div className='flex justify-around items-center  pt-10'>
         <img src="https://i.postimg.cc/43KXW9tF/295100712-1.png" alt="" />
       </div>
       <div className='text-2xl text-black font-semibold text-center flex flex-col pt-5'>
         <h1 className='hover:text-[#1C62CD]'>RF D.E.S.S.TM Key
         </h1>
          <h2 className=' text-black text-xl font-bold hover:text-[#1C62CD] pt-3'>нет в наличии</h2>
       </div>
       <div className="relative   ">
            <h1 className="text-[#1C62CD] font-medium text-center cursor-pointer pt-1">Сообщить о поступлении</h1>
        
            </div>
      </div>
      {/*shopping mal flex-4 */}
      <div className='w-[280px] h-[390px] border-2 border-[#CDCDCD] rounded-sm hover:border-1 hover:border-white hover:bg-white hover:shadow-black hover:shadow-sm'>
       <div  className='flex justify-end items-end pr-3 '>
      
       <GoHeart className='text-3xl mt-3'/>
       </div>
       <div className='flex justify-around items-center pt-3 '>
         <img src="https://i.postimg.cc/7YTMrs4x/cq5dam-web-768-2.png" alt="" />
       </div>
       <div className='text-3xl text-black font-semibold text-center flex flex-col pt-3'>
         <h1 className='hover:text-[#1C62CD]'>Мужской костюм
         3мм</h1>
          <h2 className='pt-2 text-black text-4xl font-bold hover:text-[#1C62CD] '>7 000 ₽</h2>
       </div>
      
      </div>
           <div className='felx'>
           <MdArrowForwardIos className='text-4xl' />
           </div>
    </div>
 
  </>
  )
}
