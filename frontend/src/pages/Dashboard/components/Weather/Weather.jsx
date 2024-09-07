import React from 'react';
import { TiWeatherPartlySunny } from "react-icons/ti";

const SectionOne = () => {
  return (
    <div
      className='relative mt-10 w-[25vw] h-[280px] flex flex-col items-center rounded-lg border-2 overflow-hidden'
      style={{
        backgroundImage: 'url("/weather_bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

      <div className='relative z-20 flex items-center'>
        <TiWeatherPartlySunny className='w-[11vh] h-[11vh] mr-4 text-white' />

        {/* Container for temperature and labels */}
        <div className='flex flex-col'>
          <div className='flex mt-10 items-center mb-2'>
            <p className='text-4xl font-semibold mr-6 text-white'>25°C</p>
            <div className='flex flex-col text-left text-white'>
              <p className='text-[15px] font-medium'>Precipitation: 61%</p>
              <p className='text-[15px] font-medium'>Humidity: 88%</p>
              <p className='text-[15px] font-medium'>Wind: 8km/h</p>
            </div>
          </div>
        </div>
      </div>

      <p className='relative z-20 ml-[-160px] text-2xl mt-1 text-white'>Mostly Sunny</p>

      <a href="https://sajal072004.github.io/Weather-App/">
        <button className='relative z-20 bg-white mt-8 w-[200px] py-4 text-[#1b7a43] rounded-lg text-xl'>
          Know More
        </button>
      </a>

    </div>
  );
};

export default SectionOne;
