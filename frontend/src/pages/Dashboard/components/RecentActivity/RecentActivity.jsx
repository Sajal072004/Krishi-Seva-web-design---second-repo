import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const arr = [
  {
    id: 1,
    name: "John",
    activity: "Ordered a new plant",
    time: "1 min ago",
    img: "profile_icon.png"
  },
  {
    id: 2,
    name: "Alice",
    activity: "Bought a gardening tool",
    time: "5 mins ago",
    img: "profile_icon.png"
  },
  {
    id: 3,
    name: "Bob",
    activity: "Reviewed a plant",
    time: "10 mins ago",
    img: "profile_icon.png"
  },
  {
    id: 4,
    name: "Charlie",
    activity: "Added a new plant to wishlist",
    time: "15 mins ago",
    img: "profile_icon.png"
  },
  {
    id: 5,
    name: "Diana",
    activity: "Checked out with a new pot",
    time: "20 mins ago",
    img: "profile_icon.png"
  },
  {
    id: 6,
    name: "Eve",
    activity: "Asked a question about a plant",
    time: "30 mins ago",
    img: "profile_icon.png"
  },
  {
    id: 7,
    name: "Eve",
    activity: "Asked a question about a plant",
    time: "30 mins ago",
    img: "profile_icon.png"
  }
];

const RecentActivity = () => {
  return (
    <div>
      <div className='flex justify-between items-center mx-2'>
        <h1 className='text-3xl font-semibold text-[#2F580F]'>Recent Activity</h1>
        <div className='flex items-center text-gray-500 cursor-pointer'>
          <p className='mr-1'>View All</p>
          <FaArrowRight />
        </div>
      </div>

      <div className='mt-8'>
        {arr.map((item) => (
          <div key={item.id} className='flex items-start justify-between py-2 border-b'>
            
            <div className='flex-shrink-0 mr-4'>
              <img src={item.img} alt={item.name} className='w-12 h-12 rounded-full' />
            </div>
            
            <div className='flex-1'>
              <p className='font-semibold'>{item.name}</p>
              <p className='text-gray-700'>{item.activity}</p>
            </div>
            
            <div className='text-gray-500'>
              {item.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivity;
