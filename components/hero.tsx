import React from 'react';

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-no-repeat bg-cover bg-center text-white" style={{ backgroundImage: 'url("/8.png")' }}>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center px-20">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl p-4 mt-[120px] font-extrabold text-white mb-4">
            All your AI <br/> solutions to ease <br/> your tasks           
            </h1>
            
          </div>
           {/* <div className="flex justify-center md:justify-end">
            <Image 
              src={YourIllustration} 
              alt="Learning Illustration" 
              width={500} // Adjusted for smaller screens
              height={500} // Adjusted for smaller screens
              layout="responsive" 
            />
          </div>  */}
        </div>
      </div>
    // </div>
  );
};

export default HomePage;
