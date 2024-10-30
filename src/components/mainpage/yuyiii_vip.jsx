import React, { useEffect, useState } from 'react';

const VIP = () => {
  const videoId = "7dC2IzA1a6s"; // YouTube video ID
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Load YouTube Iframe API
    const loadYouTubeAPI = () => {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.onYouTubeIframeAPIReady = () => {
          new window.YT.Player("youtube-player", {
            videoId,
            events: {
              onStateChange: (event) => {
                if (event.data === window.YT.PlayerState.PLAYING) {
                  setIsPlaying(true);
                } else {
                  setIsPlaying(false);
                }
              },
            },
          });
        };
      };
    };

    if (!window.YT) {
      loadYouTubeAPI();
    } else {
      window.onYouTubeIframeAPIReady();
    }
  }, [videoId]);

  return (
    <div>
    {/* <div className="text-sm font-bold text-left p-4">
          Yuyiii VIP
    </div> */}
    <div className="flex flex-col items-center">
      {/* Video Embed */}
      <div className="relative w-full">
        <iframe
          id="youtube-player"
          className="w-full h-[56.25vw] max-h-[600px] shadow-lg"
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Overlay for Thumbnail */}
        {!isPlaying && (
          <div className="absolute top-10 left-10 bg-black bg-opacity-50 text-white text-sm font-bold p-2 rounded">
            Meet Sumedh! AKA the BirdMan
          </div>
        )}
      </div>

      {/* Text Below the Video */}
      <div className="bg-black w-full flex flex-col items-end p-4">
        <div className="text-white text-sm font-bold text-right">
          Everyone Needs a Friend!
        </div>
        <div className="text-white text-sm text-right">
          Experience the comfort of local companionship
        </div>
      </div>
    </div></div>
  );
};

export default VIP;
