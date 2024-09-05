import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewsCard = ({ id, title, imageUrl, description, date }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/latest-news/${id}`, {
      state: {
        id,
        title,
        imageUrl,
        description,
        date,
      },
    });
  };

  return (
    <div
      onClick={handleCardClick}
      className="cursor-pointer w-full md:w-[48%] bg-white rounded-lg shadow-md mb-4 p-4"
    >
      <img src={imageUrl} alt={title} className="w-full h-[150px] object-cover rounded-t-lg" />
      <div className="p-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
