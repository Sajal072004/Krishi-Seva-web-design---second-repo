import React from 'react'
import Card from './components/Card';

const arr = [
  {
    id: 1,
    image: "leaf_text.png",
    name: "Baby Rubberplant",
  },
  {
    id: 2,
    image: "leaf_text.png",
    name: "Baby Rubberplant",
  },
  {
    id: 3,
    image: "leaf_text.png",
    name: "Baby Rubberplant",
  }
];

const TopSeller = () => {
  return (
    <div className='h-30vh mt-[-10px]'>
      <div className='flex justify-between mx-12'>
        <h1 className='text-3xl text-[#2F580F] font-semibold'>Top Seller</h1>
        <p className='text-gray-500 mr-4 cursor-pointer'>View More</p>
      </div>

      <div className='flex gap-8 justify-start mx-12'>
        {arr.map((item, index) => (
          <Card key={item.id} image={item.image} name={item.name} />
        ))}
      </div>
    </div>
  )
}

export default TopSeller;
