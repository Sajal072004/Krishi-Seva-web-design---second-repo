import React, { useState } from 'react';
import { IoBagCheck } from "react-icons/io5";
import { FaStar, FaRegStar } from "react-icons/fa"; 
import { FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

// Utility functions
const truncateText = (text, wordLimit, addEllipsis = true) => {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + (addEllipsis ? '...' : '');
  }
  return text;
};

const renderStars = (rating) => {
  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;

  return (
    <div className="flex">
      {[...Array(filledStars)].map((_, i) => (
        <FaStar key={`filled-${i}`} className="text-yellow-500" />
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="text-gray-400" />
      ))}
    </div>
  );
};

// Updated Card component
const Card = ({ category, id, name, description, image, price, quantity, unit }) => {
  const [cartQuantity, setCartQuantity] = useState(1); // Default cart quantity is 1

  const handleQuantityIncrease = () => {
    setCartQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleQuantityDecrease = () => {
    setCartQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col justify-between border rounded-lg shadow-md overflow-hidden mt-5 bg-white mr-12"
      style={{ height: '450px', width: '260px' }}
      onClick={() => navigate(`/mandi/${category}/${id}`)}
    >
      <img
        src={image[0]} // Display the first image
        alt={name}
        className="object-cover"
        style={{ height: '56%', width: '100%' }}
      />

      <div className="flex-grow flex flex-col justify-between">
        <div>
          <div className="flex justify-between w-full px-4 mt-2">
            <p className="text-left text-lg font-medium">{truncateText(name, 2, false)}</p>
            <div className="text-right text-lg font-medium mt-1">
              {renderStars(4)} {/* Assuming a default rating */}
            </div>
          </div>

          <p className="text-left text-[14px] px-2 pl-4 mt-2">{truncateText(description, 10)}</p>

          <div className="flex justify-between w-full px-3 mt-2 items-center">
            <p className="text-left ml-1 text-lg text-gray-500">1U = 25kg</p>
            <div className="flex items-center bg-transparent">
              <button
                onClick={handleQuantityDecrease}
                className="w-7 h-7 flex items-center justify-center text-lg text-white bg-red-500 rounded-full hover:bg-red-600"
              >
                <FaMinus />
              </button>
              <p className="px-2 py-1 text-lg text-gray-500">{cartQuantity}</p>
              <button
                onClick={handleQuantityIncrease}
                className="w-7 h-7 flex items-center justify-center text-lg text-white bg-green-500 rounded-full hover:bg-green-600"
              >
                <FaPlus />
              </button>
            </div>
          </div>
        </div>

        <div className="flex w-full mt-auto">
          <button className="mt-4 mb-0 px-4 py-2 w-[45%] bg-white text-green-500 font-bold rounded flex items-center justify-center space-x-2 text-xl">
            <span>₹{price}</span>
          </button>

          <button className="mt-4 mb-0 px-4 py-2 w-[60%] bg-green-600 text-white font-bold rounded hover:bg-green-700 flex items-center justify-center space-x-2">
            <span>Add to Cart</span>
            <IoBagCheck />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
