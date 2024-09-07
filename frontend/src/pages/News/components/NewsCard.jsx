import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewsCard = ({ id, title, imageUrl, description, date, link }) => {
  

  

  return (
    <a href={link} target='_blank' className="cursor-pointer w-full md:w-[48%] bg-white rounded-lg shadow-md mb-4 p-4">


      
        <div className='flex'>
          <img src={imageUrl} alt={title} className="rounded-t-lg" />
          <h3 className="text-lg font-semibold ml-2">{title}</h3>

        </div>

        <div className="p-2">

          <p className="text-gray-700 mt-2">{description}</p>
          <p className="text-sm text-gray-500 mt-4">{date}</p>
        </div>
      
    </a>
  );
};

export default NewsCard;
