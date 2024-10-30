import React, { useState } from 'react';
import { FaMapSigns, FaCompass, FaFlag, FaCity, FaCampground } from 'react-icons/fa';

const TabNavigation = () => {
  const [selectedTab, setSelectedTab] = useState('Not Sure');
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  const tabs = [
    { name: 'Not Sure', icon: <FaMapSigns className="text-2xl" /> },
    { name: 'Explore by Zone', icon: <FaCompass className="text-2xl" /> },
    { name: 'Explore by State', icon: <FaFlag className="text-2xl" /> },
    { name: 'Explore by City', icon: <FaCity className="text-2xl" /> },
    { name: 'Find hideaways', icon: <FaCampground className="text-2xl" /> },
  ];

  const renderContent = () => {
    switch (selectedTab) {
      case 'Not Sure':
        return (
          <div className="text-center text-lg font-semibold text-gray-700">
            Let yuvii recommend <span className="text-black">{currentMonth}</span> stays
          </div>
        );
      case 'Explore by Zone':
        return (
          <div className="flex justify-between items-center w-full max-w-lg mx-auto">
            <div className="flex flex-col items-center">
              <label className="text-gray-700 mb-2">Which Region?</label>
              <div className="flex space-x-4">
                <button className="px-3 py-1 bg-white rounded-full shadow-md border border-gray-300">North</button>
                <button className="px-3 py-1 bg-white rounded-full shadow-md border border-gray-300">South</button>
                <button className="px-3 py-1 bg-white rounded-full shadow-md border border-gray-300">West</button>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <label className="text-gray-700 mb-2">What are you in a mood for?</label>
              <select className="px-3 py-1 bg-white rounded-full shadow-md border border-gray-300">
                <option>Fantasizing of staying in</option>
                {/* Additional options can go here */}
              </select>
            </div>
          </div>
        );
      case 'Explore by State':
        return (
          <div className="flex justify-between items-center w-full max-w-lg mx-auto">
            <div className="flex flex-col items-center">
              <label className="text-gray-700 mb-2">Which State?</label>
              <select className="px-3 py-1 bg-white rounded-full shadow-md border border-gray-300">
                <option>Select a state</option>
                {/* Add states as options */}
              </select>
            </div>
            <div className="flex flex-col items-center">
              <label className="text-gray-700 mb-2">What are you in a mood for?</label>
              <select className="px-3 py-1 bg-white rounded-full shadow-md border border-gray-300">
                <option>Fantasizing of staying in</option>
                {/* Additional options can go here */}
              </select>
            </div>
          </div>
        );
      case 'Explore by City':
        return (
          <div className="grid grid-cols-2 gap-4 w-full max-w-lg mx-auto">
            <div className="flex flex-col items-center">
              <label className="text-gray-700 mb-2">Travel from</label>
              <select className="px-3 py-1 bg-white rounded-full shadow-md border border-gray-300">
                <option>Select a city</option>
                {/* Add cities as options */}
              </select>
            </div>
            <div className="flex flex-col items-center">
              <label className="text-gray-700 mb-2">Travel by</label>
              <select className="px-3 py-1 bg-white rounded-full shadow-md border border-gray-300">
                <option>Car</option>
                <option>Bike</option>
                <option>Public Transport</option>
              </select>
            </div>
            <div className="flex flex-col items-center">
              <label className="text-gray-700 mb-2">Distance in kms</label>
              <input
                type="number"
                placeholder="Enter distance"
                className="px-3 py-1 bg-white rounded-full shadow-md border border-gray-300"
              />
            </div>
            <div className="flex flex-col items-center">
              <label className="text-gray-700 mb-2">What are you in a mood for?</label>
              <select className="px-3 py-1 bg-white rounded-full shadow-md border border-gray-300">
                <option>Fantasizing of staying in</option>
                {/* Additional options can go here */}
              </select>
            </div>
          </div>
        );
      case 'Find hideaways':
        return (
          <div className="flex flex-col items-center">
            <label className="text-gray-700 mb-2">What are you in a mood for?</label>
            <select className="px-3 py-1 bg-white rounded-full shadow-md border border-gray-300">
              <option>Fantasizing of staying in</option>
              {/* Additional options can go here */}
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
      {/* Tab Navigation */}
      <div className="flex items-center space-x-4 mb-6">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            onClick={() => setSelectedTab(tab.name)}
            className={`flex flex-col items-center p-3 cursor-pointer 
              ${selectedTab === tab.name ? 'relative bg-white text-black' : 'text-gray-500'}
            `}
          >
            {selectedTab === tab.name && (
              <div className="absolute -top-3 -left-2 w-full h-full bg-white -rotate-2 rounded-lg border border-gray-200 shadow-md transform -translate-y-1/2 translate-x-1/2"></div>
            )}
            <div className="relative z-10">
              {tab.icon}
              <span className={`text-sm mt-1 ${selectedTab === tab.name ? 'font-semibold' : 'font-normal'}`}>
                {tab.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Content */}
      <div className="w-full bg-gray-100 p-4 rounded-lg text-center">{renderContent()}</div>

      {/* Submit Button */}
      <button className="mt-6 px-6 py-2 bg-black text-white rounded-full shadow-md">
        Can’t wait to see places
      </button>
    </div>
  );
};

export default TabNavigation;
