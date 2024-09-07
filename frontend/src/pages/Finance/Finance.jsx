import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Sidebar from '../Dashboard/components/Sidebar/Sidebar.jsx';
import { useNavigate } from 'react-router-dom';

const Finance = () => {
  const [language, setLanguage] = useState('en'); // Default language is English
  const navigate = useNavigate();

  return (
    <div className="overflow-x-hidden">
      <div className="flex bg-[#f9fafc] w-[100vw] overflow-x-hidden h-[100vh]">
        <div className="fixed h-screen w-[25vw] md:w-[20vw]">
          <Sidebar />
        </div>

        <div className="ml-[25vw] md:ml-[18vw] w-[calc(100vw-25vw)] md:w-[calc(100vw-20vw)]">
          {/* Fixed Navbar */}
          <div className="fixed w-[84vw] bg-[#f9fafc] z-10 -ml-4" style={{ height: '18vh' }}>
            <Navbar />
          </div>

          {/* Content area */}
          <div
            className="flex justify-center items-center"
            style={{ height: 'calc(100vh - 18vh)' }} // Subtract the height of the navbar
          >
            <h1 className="text-3xl font-bold text-center">Coming Soon</h1>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Finance;
