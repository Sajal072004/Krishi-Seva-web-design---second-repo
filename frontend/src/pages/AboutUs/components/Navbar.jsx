import React, { useState } from 'react';
import { MdDarkMode } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('isSeller');
    localStorage.removeItem('otp'); // Remove the token
    navigate('/sign-in'); // Redirect to sign-in page
  };

  const handleSellerProfile = () => {
    const isSeller = localStorage.getItem('isSeller');
    if (isSeller) navigate('/mandi/seller-profile');
    else navigate('/mandi/seller-signup');
  }

  return (
    <>
      <div className={'flex justify-between w-[70vw] md:w-full h-[17vh] ml-5 bg-[#f9fafc]'}>
        <div className='w-[90%] md:w-[28%] mt-3'>
          <h1 className='text-2xl md:text-3xl p-4 pb-2 text-gray-700 font-semibold'>About Us</h1>
          <p className='p-4 pt-1 text-gray-700'>Hello {localStorage.getItem('userName')}, welcome back!</p>
        </div>
        <div className='hidden md:flex w-[40%] items-center mr-[-100px]'>
          <div className='w-[320px] h-[40px] shadow-lg rounded-lg flex p-3 bg-white'>
            <IoSearch />
            <input type="text" className='p-2 outline-none w-full' placeholder='Search Videos here' />
          </div>
        </div>

        <div className='ml-[-100px] hidden md:flex w-[25%] items-start justify-center mt-2'>
          {/* Placeholder for future content */}
        </div>

        <div className='flex items-center w-[30%] md:w-[20%]'>
          <div className='mx-4'>
            <MdDarkMode style={{ width: '30px', height: '50px' }} />
          </div>
          <div className='mx-4'>
            <FaRegBell style={{ width: '22px', height: '50px' }} />
          </div>
          <div className='relative ml-4'>
            <img
              src="/profile_icon.png"
              alt="Profile"
              className='w-[35px] cursor-pointer'
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-[200px] bg-white border border-gray-300 rounded-lg shadow-lg">
                <ul className="py-2">
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={() => navigate('/profile')}>Profile</li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={() => handleSellerProfile()}>Seller Profile</li>
                  <li
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
