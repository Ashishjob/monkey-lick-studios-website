'use client';
import React from 'react';

const Trailer: React.FC = () => {
  const src = "/new-trailer.mp4";
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h2 className="text-lg text-[#FED009] text-center mb-2 tracking-wider">
        Prepare Yourself With
      </h2>

      <div className="flex justify-center items-center">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Our Trailer
        </h2>
      </div>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Watch our official trailer to get a sneak peek of the game.
      </h3>
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-[95vw] sm:max-w-[600px] md:max-w-[900px] aspect-video rounded-lg overflow-hidden shadow-lg bg-black">
          <iframe
            src={src}
            title="Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Trailer;
