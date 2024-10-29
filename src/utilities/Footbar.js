import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ResponsiveCarousel = () => {
  // Custom Previous Arrow Component
  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-75 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        className="w-6 h-6 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M12.293 16.293a1 1 0 010-1.414L15.586 12H5a1 1 0 110-2h10.586l-3.293-2.879a1 1 0 111.414-1.414l5 4.5a1 1 0 010 1.414l-5 4.5a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );

  // Custom Next Arrow Component
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-75 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        className="w-6 h-6 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M7.707 3.707a1 1 0 010 1.414L4.414 8H15a1 1 0 110 2H4.414l3.293 2.879a1 1 0 11-1.414 1.414l-5-4.5a1 1 0 010-1.414l5-4.5a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  const images = [
    "/logo512.png",
    "/logo512.png",
    "/logo512.png",
    "/logo512.png",
    "/logo512.png",
    "/logo512.png"
  ];

  return (
    <div className="container mx-auto py-8">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <img
              src={image}
              alt={`Carousel ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ResponsiveCarousel;