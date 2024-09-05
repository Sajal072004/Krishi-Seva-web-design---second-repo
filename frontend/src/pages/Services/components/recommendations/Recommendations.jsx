import React from 'react'

const Recommendations = () => {
  return (
    <div className='h-[59vh] flex justify-between items-center'>

      <div className='w-[70%] ml-20 '>
        <h1 className='font-semibold text-3xl mb-3'>
          <span className='text-[#1b7a43] font-bold text-4xl'>Grow your Farm</span>
        </h1>
        <h1 className='font-semibold text-3xl'>
          with Smart Crop Recommendations and Best Practices
        </h1>

        <p className='mt-6 text-[18px] text-gray-500'>
          Our feature provides tailored, data-driven insights to enhance your farming efforts. By analyzing soil type, composition, NPK levels, weather conditions, and location, our system recommends the most suitable crops for your specific environment. It also offers customized production methods and best practices, including irrigation techniques and soil management strategies, to maximize yield and ensure sustainable farming.
        </p>
        <button className='p-3 border border-[#1b7a43] hover:bg-[#1b7a43] hover:text-white mt-8 px-8 rounded-lg'>Learn More</button>
      </div>

      <div className='w-[100%] flex justify-center items-center mt-6'>
        <img src="home_image2.png" alt="" className="w-[300px]" />
      </div>

    </div>
  )
}

export default Recommendations;
