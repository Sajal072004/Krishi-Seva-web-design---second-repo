import React from 'react';
import Card from './Card';
import productsData from './productData.json';

const CardSection = ({ title }) => {
  const data = productsData[title] || [];

  return (
    <div className='flex flex-col'>
      <div className='text-2xl my-4 mr-8 text-gray-500'>
        <h1>{title}</h1>
      </div>
      {/* Using grid layout to display cards in a 4-column format */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {data.map(item => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
