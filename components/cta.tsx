import React from 'react';


const Hero = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat  py-[200px]" style={{ backgroundImage: 'url(/9.png)' }}>
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="text-center">
          <h1 className="text-2xl md:text-5xl xl:text-6xl font-bold text-cTtext">
            The competition is artificially unintelligent
          </h1>
          <button 
            className="mt-8 bg-cTtext text-white font-bold py-2 px-4 rounded hover:bg-orange-600 focus:outline-none focus:shadow-outline"
          >
            Get Started
          </button>
        </div>
      </div>
      {/* Overlay to darken the background image if needed */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30"></div>
    </div>
  );
};

export default Hero;
