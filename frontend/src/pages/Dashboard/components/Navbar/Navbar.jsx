import React, { useState, useEffect, useRef } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { FaRegBell } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(prevState => !prevState);
  };

  const handleLogout = () => {
    // Handle logout logic here
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    alert('Logged out successfully!');
    // Redirect to login or home page
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div className='flex justify-between w-[70vw] md:w-full h-[17vh] ml-5 bg-[#f9fafc]'>
        <div className='w-[90%] md:w-[28%] mt-3'>
          <h1 className='text-2xl md:text-3xl p-4 pb-2 text-gray-700 font-semibold'>Welcome to Krishi Seva</h1>
          <p className='p-4 pt-1 text-gray-700'>Hello Sajal Namdeo, welcome back!</p>
        </div>
        <div className='hidden md:flex w-[40%] items-center mr-[-100px]'>
          <div className='w-[320px] h-[40px] shadow-lg rounded-lg flex p-3 bg-white'>
            <IoSearch />
            <input type="text" className='p-2 outline-none w-full' placeholder='How you doing?' />
          </div>
        </div>

        <div className='ml-[-100px] hidden md:flex w-[25%] items-start justify-center mt-2'>
          {/* Placeholder for additional content */}
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
              src="./farmer_profile_icon.png"
              alt="Profile"
              className='w-[35px] cursor-pointer'
              onClick={toggleMenu}
            />
            {showMenu && (
              <div
                ref={menuRef}
                className='absolute right-0 mt-2 w-[200px] bg-white border border-gray-300 shadow-lg rounded-lg z-50'
              >
                <ul className='p-2'>
                  <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => alert('User Profile')}>
                    User Profile
                  </li>
                  <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={handleLogout}>
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
}

export default Navbar;
