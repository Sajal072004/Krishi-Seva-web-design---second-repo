import React from 'react'

const Card = () => {
  return (
    <div className='h-[90vh] shadow'>
      <div 
        className='h-[35vh] w-full relative flex items-center justify-center bg-cover bg-center'
        style={{ backgroundImage: `url('home_image.png')` }}>
      </div>
      <div className='mr-3 ml-2 w-[20vw]  p-2'>
        <h1 className='text-xl mt-6 font-semibold'>From Farm to Table, Exploring the Journey of Agro Produce</h1>
        <p className='my-6'>
          Exploring the journey of agro produce, delving into the intricate process of bringing agricultural products from farms to consumers' tables. This enlightening exploration traces the various stages of production including cultivation, harvesting, processing, packaging, distribution, and retail.
        </p>
        <button className='w-full bg-[#1b7a43] text-white py-2 rounded-md text-center'>Read More</button>
      </div>
    </div>
  )
}

export default Card
