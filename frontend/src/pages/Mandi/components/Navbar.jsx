import React from 'react'
import { MdDarkMode } from "react-icons/md";

import { IoSearch } from "react-icons/io5";
import { BsBagFill } from "react-icons/bs";

const Navbar = () => {
  const itemCount = 2; // Example item count; update this with actual cart data

  return (
    <>
      <div className={'flex justify-between w-[70vw] md:w-full h-[17vh] ml-5'}>
        <div className='w-[90%] md:w-[28%] mt-3'>
          <h1 className='text-2xl md:text-3xl p-4 pb-2 text-gray-700 font-semibold'>Welcome to Mandi</h1>
          <p className='p-4 pt-1 text-gray-700'>Hello Sajal Namdeo, welcome back!</p>
        </div>
        <div className='hidden md:flex w-[40%] items-center mr-[-100px]'>
          <div className='w-[320px] h-[40px] shadow-lg rounded-lg flex p-3 bg-white'>
            <IoSearch />
            <input type="text" className='p-2 outline-none w-full' placeholder='Search Items Here' />
          </div>
        </div>

        <div className='ml-[-100px] hidden md:flex w-[25%] items-start justify-center mt-2'>
          <div className='w-[320px] h-[40px] rounded-lg flex pl-10 pt-1 text-[24px] ml-20 mt-8 text-[#1b7a43] underline cursor-pointer'>
            Become a Seller
          </div>
        </div>

        <div className='flex items-center w-[30%] md:w-[20%]'>
          <div className='mx-4'>
            <MdDarkMode style={{ width: '30px', height: '50px' }} />
          </div>
          <div className='relative mx-4'>
            <BsBagFill style={{ width: '22px', height: '50px' }} />
            {itemCount > 0 && (
              <div className='absolute top-0 -right-2 bg-red-600 text-white rounded-full h-4 w-4 text-xs flex items-center justify-center'>
                {itemCount}
              </div>
            )}
          </div>
          <div className='ml-4'>
            <img src="./farmer_profile_icon.png" alt="Profile" className='w-[35px]' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
