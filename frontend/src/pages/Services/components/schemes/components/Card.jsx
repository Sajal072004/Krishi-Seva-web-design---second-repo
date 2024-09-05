import React from 'react';

const Card = ({ title, downloadLink, link }) => {
  return (
    <div className='h-[50vh] shadow-md rounded-lg overflow-hidden'>
      {/* Image at the top of the card */}
      <div 
        className='h-[25vh] w-full bg-cover bg-center'
        style={{ backgroundImage: `url('home_image.png')` }} // Replace 'home_image.png' with your actual image path
      >
        {/* Alternatively, you can use an <img> tag */}
        {/* <img src="home_image.png" alt="Card Image" className="h-full w-full object-cover" /> */}
      </div>

      {/* Card content */}
      <div className='p-4'>
        <h1 className='text-lg font-semibold'>{title}</h1>
        <p className='my-4'>
          {downloadLink !== 'NA' ? (
            <a 
              href={downloadLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className='text-blue-500 underline'>
              Download Guidelines
            </a>
          ) : (
            <span>Download not available</span>
          )}
        </p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer">
          <button className='w-full bg-[#1b7a43] text-white py-2 rounded-md text-center'>
            Visit Link
          </button>
        </a>
      </div>
    </div>
  );
}

export default Card;
