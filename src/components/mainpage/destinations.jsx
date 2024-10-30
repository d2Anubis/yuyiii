import React, { useState } from 'react';
import img_dummy1 from "../../assets/11.png";
import img_dummy2 from "../../assets/12.png";
import img_dummy3 from "../../assets/13.png";
import img_dummy from "../../assets/01.png";

const ImageTabs = () => {
  const destinations = [
    { name: "Nathukan\nUttarakhand", images: [img_dummy1, img_dummy2, img_dummy3] },
    { name: "Saswad\nMaharashtra", images: [img_dummy, img_dummy, img_dummy] },
    { name: "Sariska\nRajasthan", images: [img_dummy, img_dummy, img_dummy] },
    { name: "Karjat\nMaharashtra", images: [img_dummy, img_dummy, img_dummy] },
    { name: "Sultan Bathery\nKerala", images: [img_dummy, img_dummy, img_dummy] },
    { name: "Another\nDestination", images: [img_dummy, img_dummy, img_dummy] },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const visibleDestinations = destinations.slice(startIndex, startIndex + 6);

  const handleLeftClick = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleRightClick = () => {
    if (startIndex < destinations.length - 6) setStartIndex(startIndex + 1);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mt-4 mb-2">Unspoilt Destinations</h2>

      {/* Tab Navigation */}
      <div className="flex mt-2 items-center space-x-1">
        <button
          onClick={handleLeftClick}
          className="text-xl px-2 py-1 border rounded-md bg-gray-200 hover:bg-gray-300"
        >
          &lt;
        </button>
        {visibleDestinations.map((dest, index) => (
          <button
            key={dest.name}
            onClick={() => setSelectedIndex(startIndex + index)}
            className={`px-2 py-1 ${
              selectedIndex === startIndex + index ? 'font-bold underline' : ''
            } text-center whitespace-pre-line`}
          >
            {dest.name}
          </button>
        ))}
        <button
          onClick={handleRightClick}
          className="text-xl px-2 py-1 border rounded-md bg-gray-200 hover:bg-gray-300"
        >
          &gt;
        </button>
      </div>

      {/* Display Images */}
      <div className="grid grid-cols-10 gap-2 mt-6 w-2/3">
        {/* First column: large image covering 70% of the width */}
        <div className="col-span-7">
          <img
            src={destinations[selectedIndex].images[0]}
            alt="Main"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        {/* Second column: two stacked images covering 30% of the width */}
        <div className="col-span-3 flex flex-col gap-2">
          <img
            src={destinations[selectedIndex].images[1]}
            alt="Secondary 1"
            className="w-full h-1/2 object-cover rounded-md"
          />
          <img
            src={destinations[selectedIndex].images[2]}
            alt="Secondary 2"
            className="w-full h-1/2 object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageTabs;
