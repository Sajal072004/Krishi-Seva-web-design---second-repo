import React from 'react';
import { useNavigate } from 'react-router-dom';

const SectionOne = () => {
  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate('/mandi'); // Absolute path ensures you navigate directly to /mandi
  };

  return (
    <div className='relative'>
      <img 
        src="sectionone_image.png" 
        alt="Section One" 
        width={1200}
      />

      <div className='absolute top-0 left-10 w-full h-full flex flex-col justify-center items-start p-8'>
        <h1 className='text-4xl font-bold mb-2 text-[#C0F196]'>
          Create and Sell Extraordinary Products
        </h1>
        <p className='text-xl mt-4 text-[#C0F196]'>
          The world's first and largest handmade products marketplace.
        </p>
        <div className='mt-8 flex'>
          <button 
            onClick={handleExploreMore}
            className='mr-4 bg-white py-3 px-16 rounded-lg text-[#61A629] text-[20px]'
          >
            Explore More
          </button>
          
          <button 
          onClick={handleExploreMore}
          className='ml-4 text-white py-3 px-16 rounded-lg border-2 font-bold text-[20px] hover:text-[#61a629] hover:bg-white hover:font-normal'>
            Top Sellers
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
