import React from 'react';


const Hero = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat py-[120px]" style={{ backgroundImage: 'url(/6.png)' }}>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-6 md:px-12 xl:px-32 relative z-10">
        <div className="text-center">
          <h1 className="text-3xl md:text-3xl xl:text-3xl font-bold text-cTtext mb-4">
            Accelerate AI Transformation
          </h1>
          <h2 className="text-2xl md:text-xl xl:text-xl text-white text-center">
            Deploy AI to solve mission critical problems 10x  faster <br/> with Gradient's AI Cloud platform. We'll take care of the <br/> infrastructure so you can focus on your goals.
          </h2>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
