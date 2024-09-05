import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardData = [

  {
    name:"Crops",
    image:'/crop_image.jpg'
  },
  {
    name: "Seeds",
    image: "/seeds_image.webp",
  },
  {
    name: "Pulses",
    image: "/pulses_image.jpg",
  },
  {
    name: "Fruits",
    image: "/fruits_image.jpg",
  },
  {
    name: "Vegetables",
    image: "/vegetable_image.png",
  },
  {
    name: "Fodder Crops",
    image: "/fodder_image.jpg"
  },
  {
    name: "Dairy Products",
    image: "/dairy_image.jpg"
  },
  {
    name: "Fertilizers",
    image: "/fertilizer_image.jpg",
  }

];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[42%] transform -translate-y-1/2 right-[-70px] z-10 cursor-pointer"
      onClick={onClick}
    >
      <div className="text-black p-2 rounded-full">
        <img src="/arrow_right.png" alt="" className="w-10" /> {/* Right Arrow Symbol */}
      </div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[42%] transform -translate-y-1/2 left-[-70px] z-10 cursor-pointer"
      onClick={onClick}
    >
      <div className="text-white p-2 rounded-full">
       <img src="arrow_left.png" alt="" className="w-10" /> {/* Left Arrow Symbol */}
      </div>
    </div>
  );
};

const Cards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-3/4 m-auto relative h-[450px] ">
      <div className="mt-20 h-full"> 
        <Slider {...settings}>
          {cardData.map((d, index) => {
            return (
              <div
                key={index}
                className="bg-white h-full text-black rounded-xl shadow-xl "
                
              >
                <div className="rounded-xl border-y-[3px] border-x-[3px] shadow-t-xl bg-white flex  flex-col justify-center items-center h-56 hover:bg-[#1b7a43] hover:text-white">
                  <img
                    src={d.image}
                    alt=""
                    className="h-44 w-44 rounded-full p-4"
                  />
                  <p className="text-xl font-semibold">{d.name}</p>
                </div>
                
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Cards;
