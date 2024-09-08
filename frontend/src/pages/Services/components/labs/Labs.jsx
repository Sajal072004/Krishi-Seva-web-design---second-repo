import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {
  const navigate = useNavigate();
  return (
    <div 
      className='h-[70vh] mt-16 ml-16 w-[90vw] flex justify-center items-center' id='labs'
      style={{ 
        backgroundImage: `url('labs.webp')`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <div 
        className='p-8 rounded-lg w-[60vw] flex flex-col items-center'
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
      >
        <h1 className='text-4xl font-bold text-center my-2 mb-8'>Soil Testing Labs</h1>
        <button className='bg-black text-white px-12 py-3 rounded-md text-[17px] '
        onClick={()=>navigate('/explore/nearby-labs')}
        >Near Me</button>
      </div>
    </div>
  )
}

export default Labs
