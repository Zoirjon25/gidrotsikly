import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

export default function TitlePage() {
  return ( <>
     <div className='w-[100%] h-[500px] flex flex-col justify-around items-center  pt-10'>
       <div className='flex justify-around items-center gap-10'>
        {/*flex-1 */}
        <div className='w-[367px] h-[140px] flex border-1 border-[#CDCDCD] rounded-sm hover:border-1 hover:border-white hover:bg-white hover:shadow-black hover:shadow-sm hover:text-[#1C62CD]'>
            <div className='flex flex-col'>
          <h1 className='text-2xl text-black font-bold pt-10 pl-3 hover:text-[#1C62CD]'>Квадроциклы</h1>
          <div className='flex'>
          <h4 className='text-[#C4C4C4] text-sm pt-10 pl-3'>Подробее</h4>
          <IoIosArrowForward className='mt-11 text-[#C4C4C4]' />
          </div>
            </div>    
          <img className='pl-7 mt-5' src="https://i.postimg.cc/sgzdhpQP/CFMOTO-X6-EPS-blue-1.png" alt="" />
        </div>
        {/*flex-2 */}
        <div className='w-[367px] h-[140px] flex border-1 border-white bg-white shadow-black shadow-sm  rounded-sm '>
            <div className='flex flex-col'>
          <h1 className='text-2xl text-[#1C62CD] font-bold pt-10 pl-3'>Гидроциклы</h1>
          <div className='flex'>
          <h4 className='text-[#C4C4C4] text-sm pt-10 pl-3'>Подробее</h4>
          <IoIosArrowForward className='mt-11 text-[#C4C4C4]' />
          </div>
            </div>    
          <img className='pl-7 mt-5 w-[210px] h-[100px]' src="https://i.postimg.cc/Hk8zdKsB/jet-ski-PNG90-1-1.png" alt="" />
        </div>
        {/*flex-3 */}
        <div className='w-[367px] h-[140px] flex border-1 border-[#CDCDCD] rounded-sm hover:border-1 hover:border-white hover:bg-white hover:shadow-black hover:shadow-sm '>
            <div className='flex flex-col'>
          <h1 className='text-2xl text-black font-bold pt-10 pl-3 hover:text-[#1C62CD] '>Катера</h1>
          <div className='flex'>
          <h4 className='text-[#C4C4C4] text-sm pt-10 pl-3'>Подробее</h4>
          <IoIosArrowForward className='mt-11 text-[#C4C4C4]' />
          </div>
            </div>    
          <img className='pl-7 mt-5' src="https://i.postimg.cc/43Qs2Wtx/boat-PNG36-1-1.png" alt="" />
        </div>
       </div>
       {/*flex-col-div-opshi */}
       <div className='flex justify-around items-center gap-10'>
        {/*flex-1 */}
        <div className='w-[367px] h-[140px] flex border-1 border-[#CDCDCD] rounded-sm hover:border-1 hover:border-white hover:bg-white hover:shadow-black hover:shadow-sm hover:text-[#1C62CD]'>
            <div className='flex flex-col'>
          <h1 className='text-2xl text-black font-bold pt-10 pl-3 hover:text-[#1C62CD]'>Снегоходы</h1>
          <div className='flex'>
          <h4 className='text-[#C4C4C4] text-sm pt-10 pl-3'>Подробее</h4>
          <IoIosArrowForward className='mt-11 text-[#C4C4C4]' />
          </div>
            </div>    
          <img className='pl-7 mt-5' src="https://i.postimg.cc/6pdXTMMf/rmvector551-1.png" alt="" />
        </div>
        {/*flex-2 */}
        <div className='w-[367px] h-[140px] flex border-1 border-[#CDCDCD] rounded-sm hover:border-1 hover:border-white hover:bg-white hover:shadow-black hover:shadow-sm hover:text-[#1C62CD]'>
            <div className='flex flex-col'>
          <h1 className='text-2xl text-black font-bold pt-10 pl-3 hover:text-[#1C62CD]'>Вездеходы</h1>
          <div className='flex'>
          <h4 className='text-[#C4C4C4] text-sm pt-10 pl-3'>Подробее</h4>
          <IoIosArrowForward className='mt-11 text-[#C4C4C4]' />
          </div>
            </div>    
          <img className='pl-7 mt-5' src="https://i.postimg.cc/sXL8TWn2/2018-Maverick-X3-X-rc-TURBO-R-Carbon-Black-and-Octane-Blue-3-4-front4072-1.png" alt="" />
        </div>
        {/*flex-3 */}
        <div className='w-[367px] h-[140px] flex border-1 border-[#CDCDCD] rounded-sm hover:border-1 hover:border-white hover:bg-white hover:shadow-black hover:shadow-sm '>
            <div className='flex flex-col'>
          <h1 className='text-2xl text-black font-bold pt-10 pl-3 hover:text-[#1C62CD] '>Двигатели</h1>
          <div className='flex'>
          <h4 className='text-[#C4C4C4] text-sm pt-10 pl-3'>Подробее</h4>
          <IoIosArrowForward className='mt-11 text-[#C4C4C4]' />
          </div>
            </div>    
          <img className='pl-25 mt-5' src="https://i.postimg.cc/DZth8R35/images-1.png" alt="" />
        </div>
       </div>
     </div>
  </>
  )
}
