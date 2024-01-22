const Hero = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat py-[200px]" style={{ backgroundImage: 'url(/9.png)' }}>
      {/* This div is the overlay; it's absolutely positioned and should not affect the clarity of the text */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70"></div>

      {/* This container holds the text and is relative to the Hero div, so it's on top of the overlay. The text here should be clear. */}
      <div className="container mx-auto px-6 md:px-12 xl:px-32 relative z-10"> {/* Ensure this is above the overlay with z-10 */}
        <div className="text-center">
          <h1 className="text-2xl md:text-5xl xl:text-6xl mb-5 font-bold text-gTbackground"> {/* changed class text-cTtext to text-white to ensure visibility */}
            The competition is <br/> artificially unintelligent
          </h1>
          <button 
            className="mt-8 bg-gTbackground text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" 
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
