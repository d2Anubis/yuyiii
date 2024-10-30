import React from 'react';
import Card from './card';

function Gallery() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search"
          className="border rounded-md px-2 py-1 w-1/2"
        />
        <button className="bg-gray-200 px-4 py-1 rounded-md">Travel Expert Review</button>
        <button className="bg-gray-200 px-4 py-1 rounded-md">Guest Reviews</button>
        <button className="bg-gray-200 px-4 py-1 rounded-md">Price Ascending</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
