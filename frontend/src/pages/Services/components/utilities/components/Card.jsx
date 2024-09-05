import React from 'react'

const Card = () => {
  return (
    <div className='h-[70vh]'>
      <div 
        className='h-[70vh] relative flex items-center justify-center bg-cover bg-center w-[20vw]'
        style={{ backgroundImage: `url('home_image.png')` }}>
        <h1 className='bg-[rgba(255,255,255,0.7)] p-4 rounded-lg font-semibold'>Farm Management Solution</h1>
      </div>
    </div>
  )
}

export default Card
