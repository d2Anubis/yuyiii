import React from 'react';

function Card() {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img
        src="https://via.placeholder.com/300x200"
        alt="Placeholder"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">Placeholder Destination</h3>
        <p className="text-gray-500">115/2h 32min from Sanganer</p>
        <p className="text-gray-500">75km from Mumbai Airport</p>
        <p className="font-semibold mt-2">Starting 12000/night</p>
      </div>
    </div>
  );
}

export default Card;
