import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-[59vh] mt-[80px]'>
      <img src="/home_banner_bg.png" alt="" className='h-[100%] w-[100%] object-cover' />
      <div
        className='absolute inset-0 bg-[#1b7a43]'
        style={{ opacity: 0.89 }}
      />
      <div className='absolute inset-[0px] mt-[11.24vh]
      text-white mx-20'>
        <h1 className='text-[40px]'>Discover Modern Agriculture and </h1>
        <h1 className='text-[40px]'>Create a Greener Future</h1>
        <p  className='text-[20px] mt-6'>Modern agriculture represents a paradigm shift in the way </p>
        <p className='text-[20px]'>we approach food production</p>
        <button className='bg-white mt-8 px-10 py-3 rounded-[10px] text-[#1b7a43]'>Learn More</button>
      </div>
      <div className='absolute inset-[0px] mt-[7.365vh]
      flex justify-end'>
          <img src="home_banner_image.png" alt="" className='w-[42.28vh] h-[44.27vh] mr-12' />
      </div>
    </div>

  )
}

export default Hero
