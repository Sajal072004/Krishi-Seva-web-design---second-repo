import React from 'react'
import Cards from './components/Cards'

const Schemes = () => {
  return (
    <div className='mt-4 h-[112vh] py-11 ' id='schemes'>
      <div >
        <h1 className='text-3xl text-center font-semibold'>Government Schemes</h1>
        
      </div>

      <div className='mt-16'>
        <Cards/>
      </div>
    </div>
  )
}

export default Schemes