'use client';
import React from 'react';

const Trailer: React.FC = () => {
  const src = "/trailer.mp4";
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
      <iframe
        width="1080"
        height="500"
        src={src}
        title="Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className=""
      ></iframe>
    </div>
  );
};

export default Trailer;
