import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from '../Dashboard/components/Sidebar/Sidebar';
import CardSection from './components/CardSection';

const arr = [
  { "category" : "Crops" },
  { "category": "Seeds" },
  { "category": "Pulses" },
  { "category": "Fruits" },
  { "category": "Vegetables" },
  { "category": "Fodder Crops" },
  { "category": "Dairy Products" },
  { "category": "Fertilizers" }
];

const Mandi = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='flex bg-[#f9fafc] w-[100vw] overflow-x-hidden'>
        
        <div className='fixed h-screen w-[25vw] md:w-[20vw]'>
          <Sidebar />
        </div>

       
        <div className='ml-[25vw] md:ml-[18vw] w-[calc(100vw-25vw)] md:w-[calc(100vw-20vw)]'>
          
          <div className='fixed w-[84vw] bg-[#f9fafc] z-10 -ml-4' style={{ height: '18vh' }}>
            <Navbar />
          </div>

          
          <div className='mt-[21vh]'> 
            {arr.map((item, index) => {
              return (
                <div
                  key={index}
                  className='flex flex-row w-full z-0 mt-8 justify-between mr-12 ml-8 gap-6 mb-8'
                >
                  <CardSection title={item.category} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mandi;
