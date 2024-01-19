import React from 'react';


const Hero = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat py-20" style={{ backgroundImage: 'url(/6.png)' }}>
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="text-center">
          <h1 className="text-3xl md:text-3xl xl:text-3xl font-bold text-cTtext">
          Accelerate AI Transformation
          </h1>
          <h2 className="text-xl md:text-xl xl:text-xl text-white text-center">
          Deploy AI to solve mission critical problems 10x faster with Gradient's  AI Cloud  platform. We'll take care of the infrastructure so you can focus on your goals.
          </h2>
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
