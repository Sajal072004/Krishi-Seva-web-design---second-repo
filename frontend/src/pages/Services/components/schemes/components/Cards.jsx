import React from 'react';
import Card from './Card';
import data from '../../../../../../jsons/india.json';

const Cards = () => {

  const slicedData = data.slice(0, 3);

  return (
    <div className='flex flex-row justify-between mx-[3vw] space-x-6'>
      {slicedData.map((item, index) => {
        return (
          <div key={index} className='flex-1'>
            <Card
              title={item.Title}
              downloadLink={item.Download}
              link={item.Link}
            />
          </div>
        );
      })}


<div
  className='h-[50vh] w-full shadow-md rounded-lg overflow-hidden flex items-center justify-center flex-1'
  style={{  backgroundImage: 'radial-gradient(circle, #003d00, #a8e6a3)' }}
>
  <button className='bg-white text-[#1b7a43] py-2 px-4 rounded-md'>
    Explore More
  </button>
</div>



    </div>
  );
}

export default Cards;
