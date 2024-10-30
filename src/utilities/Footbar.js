import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaInstagram } from "react-icons/fa";
import dummy_person from "../assets/dummy_person.png"; // Direct import

const ResponsiveCarousel = () => {
  // Custom Arrow Components with Circle Styling
  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-500 bg-opacity-75 rounded-full cursor-pointer z-10 w-10 h-10 flex items-center justify-center" // Adjusted size
      onClick={onClick}
    >
      <span className="text-white text-lg font-bold">&lt;</span>
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-500 bg-opacity-75 rounded-full cursor-pointer z-10 w-10 h-10 flex items-center justify-center" // Adjusted size
      onClick={onClick}
    >
      <span className="text-white text-lg font-bold">&gt;</span>
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

  const testimonials = [
    { name: "Suzana", text: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.", image: dummy_person },
    { name: "Lívia", text: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.", image: dummy_person },
    { name: "Kátia", text: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.", image: dummy_person },
    { name: "Matheus", text: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.", image: dummy_person }
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="underline text-center text-sm font-semibold mb-6">
        What our users say about us?
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="bg-white border border-gray-900 rounded-lg shadow-md overflow-hidden flex flex-col items-center relative">
              
              {/* Text Section */}
              <div className="bg-white p-6 pb-16 text-center text-gray-700 w-full flex-grow">
                <blockquote className="italic">“{testimonial.text}”</blockquote>
              </div>
              
              {/* Profile Image */}
              <div className="relative -mt-12">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s profile`}
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg mx-auto"
                  style={{ position: 'relative', top: '-10px' }}
                />
              </div>
              
              {/* Name + Instagram Section */}
              <div className="bg-gray-900 w-full py-8 px-4 flex justify-between items-center text-white -mt-8">
                <p className="font-semibold text-sm">{testimonial.name.toUpperCase()}</p> {/* Smaller text size */}
                <FaInstagram className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom CSS for larger dots */}
      <style jsx global>{`
        .slick-dots {
          margin-bottom: -10px; /* Adds space between the cards and dots */
        }
        .slick-dots li button:before {
          font-size: 16px; /* Make the dots larger */
          color: #444;     /* Dot color */
        }
        .slick-dots li.slick-active button:before {
          color: #000;     /* Active dot color */
        }
      `}</style>
    </div>
  );
};

export default ResponsiveCarousel;
