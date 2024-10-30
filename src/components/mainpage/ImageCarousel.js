import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/01.png"; // Import your clickable images here
import img2 from "../../assets/02.png"; // Import your clickable images here
import img3 from "../../assets/03.png"; // Import your clickable images here
import img4 from "../../assets/04.png"; // Import your clickable images here


const ImageCarousel = () => {
  // Custom Arrow Components with styling changes
  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-[-5px] transform -translate-y-1/2 cursor-pointer z-10 text-black text-2xl"
      onClick={onClick}
    >
      &lt;
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-[-5px] transform -translate-y-1/2 cursor-pointer z-10 text-black text-2xl"
      onClick={onClick}
    >
      &gt;
    </div>
  );

  const settings = {
    dots: false, // Dots removed here
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

  // List of clickable images
  const images = [
    { id: 1, src: img1, link: "https://example.com/1" },
    { id: 2, src: img2, link: "https://example.com/2" },
    { id: 3, src: img3, link: "https://example.com/3" },
    { id: 4, src: img4, link: "https://example.com/4" }
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-left text-xs text-gray-400 font-semibold ">
      Categorized experiences just for you!
      </h2>
      <h2 className="underline text-left text-l font-semibold mb-6">
        What’s your next travel plan?
      </h2>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="px-4">
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <div className="bg-white border border-white rounded-lg shadow-md overflow-hidden flex flex-col items-center relative">
                {/* Clickable Image Section */}
                <img
                  src={image.src}
                  alt={`Image ${image.id}`}
                  className="w-full h-auto"
                />
              </div>
            </a>
          </div>
        ))}
      </Slider>

      {/* Custom CSS for larger dots can be removed as they won't show up */}
      <style jsx global>{`
        .slick-dots {
          margin-bottom: -10px; /* This can be removed as dots are disabled */
        }
        .slick-dots li button:before {
          font-size: 16px; /* This can be removed as dots are disabled */
          color: #444;     /* This can be removed as dots are disabled */
        }
        .slick-dots li.slick-active button:before {
          color: #000;     /* This can be removed as dots are disabled */
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel;
