import React from 'react'

const BottomSection = () => {
  return (
    <div className='mt-10 mx-10 pb-10'>
      <div className='flex justify-between gap-4'>
        
        {/* First Section */}
        <div className='w-1/2 h-[25vh] flex flex-col justify-between p-4 border-2 border-gray-300 rounded-lg'>
          <div className='flex justify-between items-center'>
            <h1 className='text-xl font-semibold text-[#2F580F]'>Top Sellers</h1>
            <p className='text-gray-500 cursor-pointer'>View All</p>
          </div>
          <div className='flex justify-between mr-8 items-center h-full'>
            <img src="multiple_user.png" alt="" className='object-contain w-[125px]' />
            <div className='flex-row'>
              <p className='text-xl font-semibold'>12000 Plants Sold</p>
              <div className='flex mt-2 justify-between mx-1 text-gray-500'>
              <p>10 Sellers</p>
              <p>7 Days</p>
              </div>
              

            </div>
          </div>
        </div>
        
        {/* Second Section */}
        <div className='w-1/2 h-[25vh] flex flex-col justify-between p-4 border-2 rounded-lg border-gray-300 '>
          <div className='flex justify-between items-center'>
            <h1 className='text-xl font-semibold text-[#2F580F]'>Featured Sellers</h1>
            <p className='text-gray-500 cursor-pointer'>View All</p>
          </div>
          <div className='flex justify-between mr-8 items-center h-full'>
            <img src="multiple_user.png" alt="" className='object-contain w-[125px]' />
            <div className='flex-row'>
              <p className='text-xl font-semibold'>6000 Plants Sold</p>
              <div className='flex mt-2 justify-between mx-1 text-gray-500'>
              <p>8 Sellers</p>
              <p>10 Days</p>
              </div>
              

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BottomSection;
