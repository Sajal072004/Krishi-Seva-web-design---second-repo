import React, { useState, useEffect } from 'react';
import { RxDashboard } from "react-icons/rx";
import { FaTruck } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { ImAddressBook } from "react-icons/im";
import { RiMegaphoneFill } from "react-icons/ri";
import { MdContacts } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { VscCommentDiscussion } from "react-icons/vsc";
import { useNavigate, useLocation } from 'react-router-dom';

// Make sure to use correct paths for images
const logoPath = "/logo.png";
const helpCenterPath = "/help_center.png";

const arr = [
  {
    "id": 1,
    "title": "Dashboard",
    "icon": <RxDashboard />,
    "path": "/dashboard"
  },
  {
    "id": 2,
    "title": "Mandi",
    "icon": <FaTruck />,
    "path": "/mandi"
  },
  {
    "id": 3,
    "title": "Explore",
    "icon": <FaMagnifyingGlass />,
    "path": "/services"
  },
  {
    "id": 4,
    "title": "Educational",
    "icon": <FaBook />,
    "path": "/educational"
  },
  {
    "id": 5,
    "title": "Latest News",
    "icon": <RiMegaphoneFill />,
    "path": "/latest-news"
  },
  {
    "id": 6,
    "title": "Discussions",
    "icon": <VscCommentDiscussion />,
    "path": "/discussions"
  },
  {
    "id": 7,
    "title": "Contact Us",
    "icon": <ImAddressBook />,
    "path": "/contact-us"
  },
  {
    "id": 8,
    "title": "About Us",
    "icon": <MdContacts />,
    "path": "/about-us"
  },
  {
    "id": 9,
    "title": "Settings",
    "icon": <IoSettings />,
    "path": "/settings"
  }
];

const Sidebar = () => {
  const [selected, setSelected] = useState('Dashboard');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const currentItem = arr.find(item => 
      currentPath.startsWith(item.path) // Check if currentPath starts with item.path
    );
    if (currentItem) {
      setSelected(currentItem.title);
    }
  }, [location.pathname]);

  const handleClick = (path, title) => {
    setSelected(title);
    navigate(path);
  };

  return (
    <div className='w-[25vw] md:w-[17vw] bg-white h-screen flex flex-col'>
      <div className='flex flex-row items-center p-3 sticky top-0 bg-white z-10 justify-between mr-8 mb-8'>
        <img src={logoPath} alt="Logo" className='w-[70px] h-[70px]' />
        <h1 className='text-2xl text-gray-700 font-semibold'>Krishi Seva</h1>
      </div>

      {/* Scrollable content */}
      <div className='flex-1 overflow-y-auto'>
        <div className='mt-0'>
          {arr.map((item) => (
            <div 
              key={item.id} 
              onClick={() => handleClick(item.path, item.title)} 
              className={`mt-0 flex items-center py-[4px] justify-left text-xl pl-4 my-1 cursor-pointer ${selected === item.title ? 'bg-[#1b7a43]' : ''}`}
            >
              <div className={`p-3 ${selected === item.title ? 'text-white' : 'text-gray-500'}`}>
                {item.icon}
              </div>
              <div className={`p-3 pl-2 w-full ${selected === item.title ? 'text-white' : 'text-gray-500'}`}>
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* Help Center */}
        <div className='mt-8 mb-12 flex flex-col items-center relative p-3'>
          <img src={helpCenterPath} alt="Help Center" className='w-[85%] h-[100%] absolute z-0' />
          <p className='text-gray-700 z-20 mt-16 font-semibold'>Help Center</p>
          <p className='w-[80%] text-gray-700 z-20 mt-10 font-semibold'>Having trouble? Contact us for more questions.</p>
          <button className='z-20 mt-8 px-4 py-2 bg-[#1b7a43] text-white rounded-lg'>
            Go to Help Center
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
