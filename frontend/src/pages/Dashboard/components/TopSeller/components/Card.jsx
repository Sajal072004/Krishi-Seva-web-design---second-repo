import React from 'react'

const Card = ({ image, name }) => {
  return (
    <div className="flex flex-col items-center justify-center border rounded-lg shadow-md overflow-hidden mt-5" style={{ height: '250px', width: '220px' }}>
      <img src={image} alt={name} className="object-cover px-4" style={{ height: '60%', width: '100%' }} />
      <p className="mt-2 text-center text-lg font-medium">{name}</p>
    </div>
  )
}

export default Card;
