import React from 'react'

const Hero = () => {
  return (
    <div className='mt-[20vh] ml-[12vw]'>
      <h5 className='text-white font-bold text-[25px] '>Original & Natural</h5>
      <img src="/agriculture_text.png" alt="" width={500}/>
      <p className='text-white text-[19px] mt-6 max-w-[50vw]'>Buy and sell crops , access govt. schemes , get weather updates and manage everything from one easy to use platform</p>
      <a href="/services"><button className='bg-[#F7c35f] px-12 py-5 rounded-[18px] mt-10 text-[18px] '>Discover More</button></a>
    </div>
  )
}

export default Hero