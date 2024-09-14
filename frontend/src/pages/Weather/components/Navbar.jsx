import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDarkMode } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false); // State to toggle profile dropdown
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  useEffect(() => {
    const token = localStorage.getItem('token'); // Check if token exists in local storage
    if (token) {
      setIsLoggedIn(true); // User is logged in if token is found
    }
  }, []);

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown); // Toggle profile dropdown visibility
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('isSeller');
    localStorage.removeItem('otp');
    setIsLoggedIn(false); // Update login status
    navigate('/sign-in'); // Redirect to sign-in page
  };

  return (
    <>
      <div className={'flex justify-between w-[70vw] md:w-full h-[17vh] ml-5 bg-[#f9fafc]'}>
        <div className='w-[90%] md:w-[28%] mt-3'>
          <h1 className='text-2xl md:text-3xl p-4 pb-2 text-gray-700 font-semibold'>Weather</h1>
          <p className='p-4 pt-1 text-gray-700'>Hello Sajal Namdeo, welcome back!</p>
        </div>

        <div className='hidden md:flex w-[40%] items-center mr-[-100px]'>
          <div className='w-[320px] h-[40px] shadow-lg rounded-lg flex p-3 bg-white'>
            <IoSearch />
            <input type="text" className='p-2 outline-none w-full' placeholder='Search Videos here' />
          </div>
        </div>

        <div className='ml-[-100px] hidden md:flex w-[25%] items-start justify-center mt-2'></div>

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
              onClick={handleProfileClick}
            />
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                <ul className="text-gray-700">
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => navigate('/profile')}
                  >
                    Profile
                  </li>
                  <li
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
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
