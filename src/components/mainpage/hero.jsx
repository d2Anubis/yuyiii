import React, { useEffect, useState } from 'react';
import heroImage from '../../assets/hero.png'; // Adjust the path according to your project structure

const Hero = () => {
  const fullText = "Hand Picked Stays";
  const [displayText, setDisplayText] = useState('');
  const typingSpeed = 200; // Speed of typing effect in milliseconds
  const erasingSpeed = 200; // Speed of erasing effect in milliseconds
  const [isTyping, setIsTyping] = useState(true); // To manage typing and erasing
  const [index, setIndex] = useState(0); // To keep track of the current character index

  useEffect(() => {
    let interval;

    const type = () => {
      if (index < fullText.length) {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1); // Move to the next character
      } else {
        clearInterval(interval);
        setIsTyping(false); // Switch to erasing mode after typing is done
      }
    };

    const erase = () => {
      if (index > 0) {
        setDisplayText((prev) => prev.slice(0, -1)); // Remove the last character
        setIndex((prev) => prev - 1); // Move to the previous character
      } else {
        clearInterval(interval);
        setIsTyping(true); // Switch back to typing mode
        setIndex(0); // Reset index for typing again
      }
    };

    // Start the typing or erasing effect based on the current mode
    interval = setInterval(() => {
      if (isTyping) {
        type();
      } else {
        erase();
      }
    }, isTyping ? typingSpeed : erasingSpeed);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [isTyping, index]); // Dependencies to track typing state and index

  return (
    <div 
      className="flex min-h-screen items-center justify-center bg-cover bg-center relative" 
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute top-20 right-10 flex items-center text-white cursor-pointer">
        <i className="fas fa-map-marker-alt mr-2"></i> {/* Location Icon */}
        <span>Sultan Bhatery, Kerala</span>
      </div>
      <div className="w-max">
        <h1 className="text-5xl text-white font-bold">
          {displayText}
          <span className="inline-block">|</span> {/* Static Cursor */}
        </h1>
      </div>
    </div>
  );
};

export default Hero;