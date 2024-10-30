// components/Stats.js
import React from 'react';
import { FaHome, FaUser, FaCalendarAlt, FaStar } from 'react-icons/fa'; // Importing icons

const Stats = () => {
  const stats = [
    { icon: <FaHome />, label: '1500+ properties to explore' },
    { icon: <FaUser />, label: '1200+ registered users' },
    { icon: <FaCalendarAlt />, label: '700+ nights booked' },
    { icon: <FaStar />, label: 'Rated 4.3 stars on Google' },
  ];

  return (
    <section className="py-8 text-center bg-white">
      <h2 className="underline text-center text-sm font-semibold mb-8">Book Your Perfect Stay with Us!</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-3xl text-gray-900 mb-2">{stat.icon}</span> {/* Icon styling */}
            <p className="text-center text-sm mb-6">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
