import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className='mt-[20vh] ml-[12vw]'>
      <h5 className='text-white font-bold text-[25px] '>Original & Natural</h5>
      <img src="/agriculture_text.png" alt="" width={500}/>
      <p className='text-white text-[19px] mt-6 max-w-[50vw]'>Buy and sell crops , access govt. schemes , get weather updates and manage everything from one easy to use platform</p>
      <div >
      <button className='bg-[#F7c35f] px-12 py-5 rounded-[18px] mt-10 text-[18px] mr-4 ' onClick={()=>navigate('/services')}>Discover More</button>
      <button className='bg-transparent border-2 border-[#f7c35f] px-12 py-5 rounded-[18px] mt-10 text-[18px] ml-4 text-white hover:bg-[#F7c35f] hover:text-black' onClick={()=>navigate('/sign-in')}>Login</button>
      </div>
      
    </div>
  )
}

export default Hero