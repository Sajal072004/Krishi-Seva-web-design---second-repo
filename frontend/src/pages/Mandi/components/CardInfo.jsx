import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from '../../Dashboard/components/Sidebar/Sidebar';
import productData from './productData.json'; // Assuming the file is at this path

const CardInfo = () => {
  const { id, category } = useParams(); // Extracting id and category from the URL
  const [card, setCard] = useState(null);
  const [mainImage, setMainImage] = useState(''); // State for the main image
  const [quantity, setQuantity] = useState(1); // State for quantity

  // Fetch the card data based on the ID and category from the params
  useEffect(() => {
    const categoryData = productData[category]; // Access the category from the JSON
    if (categoryData) {
      const selectedCard = categoryData.find((item) => item.id === id); // Find card with matching ID
      setCard(selectedCard);
      setMainImage(selectedCard.image); // Set initial main image
    }
  }, [id, category]);

  // Function to handle small image clicks
  const handleImageClick = (image) => {
    setMainImage(image); // Update the main image when a small image is clicked
  };

  // Functions to increment and decrement quantity
  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  if (!card) {
    return <p>Loading card information...</p>; // Loading state or in case the card is not found
  }

  // Dummy small images (you can replace with actual images if needed)
  const smallImages = [
    card.image, // Include the main image in the small image gallery
    'https://via.placeholder.com/100x100?text=Img1',
    'https://via.placeholder.com/100x100?text=Img2',
    'https://via.placeholder.com/100x100?text=Img3',
    'https://via.placeholder.com/100x100?text=Img4',
    'https://via.placeholder.com/100x100?text=Img5'
  ];

  // Calculate the weight based on the quantity
  const weight = quantity * 25; // 25kg per quantity

  // Calculate the total price based on the quantity
  const totalPrice = card.price * quantity;

  return (
    <div className='overflow-x-hidden'>
      <div className='flex bg-[#f9fafc] w-[100vw] overflow-x-hidden'>
        
        <div className='fixed h-screen w-[25vw] md:w-[20vw]'>
          <Sidebar />
        </div>

        <div className='ml-[25vw] md:ml-[18vw] w-[calc(100vw-25vw)] md:w-[calc(100vw-20vw)]'>
          
          <div className='fixed w-[84vw] bg-[#f9fafc] z-10 -ml-4' style={{ height: '18vh' }}>
            <Navbar />
          </div>

          <div className='mt-[21vh] p-8 flex'>
            {/* Left Section with the small images and main image */}
            <div className="flex">
              {/* Small images in a vertical column */}
              <div className="flex flex-col mr-2 space-y-2 w-[70px]">
                {smallImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Small img ${index + 1}`}
                    className="cursor-pointer object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    style={{ width: '80px', height: 'calc(300px / 7)', borderRadius: '8px', border: '1px solid #ddd' }}
                    onClick={() => handleImageClick(img)}
                  />
                ))}
              </div>

              <div>
                {/* Main Image with border and shadow */}
                <div 
                  className="mb-4 border-2 border-gray-200 rounded-lg overflow-hidden shadow-md" 
                  style={{ width: '500px', height: '300px' }} 
                >
                  <img
                    src={mainImage}
                    alt={card.title}
                    className="object-cover w-full h-full"
                    style={{ objectFit: 'cover' }} // Ensures the image covers the container without distortion
                  />
                </div>

                {/* Add to Cart and Buy Now Buttons */}
                <div className='flex items-center justify-between mt-6'>
                  <button className='bg-yellow-500 text-center w-full py-3 rounded-lg mr-2 text-white font-semibold hover:bg-yellow-600 transition-transform duration-300'>
                    ADD TO CART
                  </button>
                  <button className='bg-green-500 w-full py-3 rounded-lg ml-2 text-white font-semibold hover:bg-green-600 transition-transform duration-300'>
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>

            {/* Right Section with the content */}
            <div className='ml-8'>
              <h1 className="text-4xl font-bold mb-4 text-gray-800">{card.title}</h1>
              <p className="text-xl mb-8 text-gray-600 leading-relaxed">{card.description}</p>
              <p className="text-2xl font-semibold mb-6 text-gray-700">Price: ₹{card.price} per Kg</p>
              <p className="text-lg text-yellow-500 font-medium">Rating: {card.rating} stars</p>

              {/* Quantity Selector */}
              <div className="flex items-center mt-6">
                <button 
                  onClick={decrementQuantity} 
                  className="bg-red-500 text-white w-12 h-12 rounded-l-lg border border-red-600 text-lg font-semibold transition-transform duration-300 hover:bg-red-600"
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="text-center w-20 h-12 border-t border-b border-gray-400 text-lg font-semibold"
                />
                <button 
                  onClick={incrementQuantity} 
                  className="bg-green-500 text-white w-12 h-12 rounded-r-lg border border-green-600 text-lg font-semibold transition-transform duration-300 hover:bg-green-600"
                >
                  +
                </button>
              </div>

              <div className='flex gap-52'>

                 {/* Weight Display */}
              <div className="mt-6 ml-8">
                <p className="text-lg font-medium">Weight:</p>
                <p className="text-xl font-semibold">{weight} kg</p>
              </div>

              {/* Total Price Display */}
              <div className="mt-6 mr-20">
                <p className="text-lg font-medium">Total Price:</p>
                <p className="text-xl font-semibold">₹{totalPrice}</p>
              </div>

              </div>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
