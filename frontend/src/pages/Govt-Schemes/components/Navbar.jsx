import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <>
      <div className={'flex justify-between w-[70vw] md:w-full h-[17vh] ml-0 bg-[#f9fafc] z-10'}>
        <div className='w-[90%] md:w-[28%] mt-3'>
          <h1 className='text-2xl md:text-3xl p-4 pb-2 text-gray-700 font-semibold'>Schemes</h1>
          <p className='p-4 pt-1 text-gray-700'>Hello {localStorage.getItem('userName')}, welcome back!</p>
        </div>
        <div className=' hidden md:flex w-[40%] items-center mr-[-100px] '>
          <div className=' w-[320px] h-[40px] shadow-lg  rounded-lg flex p-3 bg-white'>
            <IoSearch />
            <input type="text" className=' p-2 outline-none w-full' placeholder='How you doing?' />
          </div>
        </div>

        <div className='ml-[-100px] hidden md:flex w-[25%] items-start justify-center mt-2 '>
          {/* <div className=' w-[320px] h-[40px]   rounded-lg flex pl-10 pt-1  text-[24px] ml-20 mt-8 text-[#1b7a43] underline'>
            Become a Seller
            
          </div> */}
        </div>


        <div className=' flex items-center  w-[30%] md:w-[20%]'>
          <div className='mx-4'>
            <MdDarkMode style={{ width: '30px', height: '50px' }} />
          </div>
          <div className='mx-4'>
            <FaRegBell style={{ width: '22px', height: '50px' }} />
          </div>
          <div className=' ml-4'>
            <CgProfile className='w-8 h-8' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
