import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className='relative h-[59vh] mt-[80px]'>
      {/* Background Image */}
      <img src="/home_banner_bg.png" alt="Home Banner" className='absolute inset-0 h-full w-full object-cover z-0' />
      
      {/* Overlay */}
      <div className='absolute inset-0 bg-[#1b7a43]' style={{ opacity: 0.89 }} z-0 />
      
      {/* Content Container */}
      <div className='relative z-10 flex flex-col justify-center items-start mx-20 mt-[11.24vh] text-white'>
        <h1 className='text-[40px] leading-tight mt-20'>Discover Modern Agriculture and</h1>
        <h1 className='text-[40px] leading-tight'>Create a Greener Future</h1>
        <p className='text-[20px] mt-6'>Modern agriculture represents a paradigm shift in the way</p>
        <p className='text-[20px]'>we approach food production</p>
        
        {/* Button */}
        <button 
          className='bg-white mt-8 px-10 py-3 rounded-[10px] text-[#1b7a43] z-20' 
          onClick={handleClick}
        >
          Learn More
        </button>
      </div>

      {/* Side Image */}
      <div className='absolute inset-0 mt-[7.365vh] flex justify-end z-0'>
        <img src="home_banner_image.png" alt="Home Banner Image" className='w-[42.28vh] h-[44.27vh] mr-12' />
      </div>
    </div>
  );
}

export default Hero;
