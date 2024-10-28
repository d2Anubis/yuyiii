import React from 'react';

const VIP = () => {
  const videoId = "7dC2IzA1a6s"; // YouTube video ID

  return (
    <div className="flex flex-col items-center">
      {/* Video Embed */}
      <div className="relative w-full">
        <iframe
          className="w-full h-[56.25vw] max-h-[600px] shadow-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Overlay for Thumbnail */}
        <div className="absolute top-10 left-10 bg-black bg-opacity-50 text-white text-sm font-bold p-2 rounded">
          Meet Sumedh! AKA the BirdMan
        </div>

        <div className="absolute bottom-5 right-5 bg-black bg-opacity-50 text-white text-sm font-bold p-2 rounded">
        Experience the comfort of local companionship
        </div>

      </div>

      {/* Caption Below Video */}
    </div>
  );
};

export default VIP;
