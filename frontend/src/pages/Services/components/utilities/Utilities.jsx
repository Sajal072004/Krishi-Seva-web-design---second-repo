import React from 'react'
import Cards from './components/Cards'

const Utilities = () => {
  return (
    <div className='mt-20 h-[112vh] bg-[#f3fff1] py-11 ' id='services'>
      <div >
        <h1 className='text-3xl text-center font-semibold'>Our Services</h1>
        <p className='mt-8 text-center text-[18px] text-gray-500'>Discover a comprehensive range of services tailored to meet our needs. </p>
        <p className='text-center text-[18px] text-gray-500'>From strategic consultancies to hands on implementations.</p>
      </div>

      <div className='mt-12'>
        <Cards/>
      </div>
    </div>
  )
}

export default Utilities