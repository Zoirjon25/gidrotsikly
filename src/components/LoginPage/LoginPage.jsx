import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaVk } from "react-icons/fa";

export default function LoginPage() {
  return (  <>
   <div className='w-[100%] h-[240px] bg-[#F0F0F4] mt-15 flex gap-5  justify-around items-center'>
    <div className='flex flex-col'>
        <h1 className='text-black w-[300px] font-bold'>Подпишитесь на нашу рассылку 
        и узнавайте о акция быстрее</h1>
        <div className='flex pt-10'>
            <input className='w-[200px] h-[35px] boder-1 border-white bg-white pl-3' type="email" placeholder='Введите ваш e-mail:'/>
            <button className='w-[110px] h-[35px] border-1 border-[#1C62CD] bg-[#1C62CD] text-white'>Отправить</button>
        </div>
    </div>
    <div className='flex  gap-15'>

        <div className='flex flex-col pt-7'>
            <h2 className='text-black font-semibold '>Информация</h2>
            <h3>О компании</h3>
            <h3>Контакты</h3>
            <h3>Акции</h3>
            <h3>Магазины</h3>
            <h3 className='pt-10'>Договор оферты</h3>
        </div>
        <div className='flex flex-col pt-7'>
            <h2 className='text-black font-semibold '>Интернет-магазин</h2>
            <h3>Доставка и самовывоз</h3>
            <h3>Оплата</h3>
            <h3>Возврат-обмен</h3>
            <h3>Новости</h3>
            <h3 className='pt-10'>Политика обработки персональных</h3>
    </div>
    <div className='flex gap-5 pt-20'>
    <IoLogoInstagram className='text-3xl' />
    <FaVk  className='text-3xl'/>
    <FaFacebook className='text-3xl'/>
    <IoLogoYoutube className='text-3xl' />  
      
    </div>
        </div>

   </div>
  </>
  )
}
