import React from 'react';

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-no-repeat bg-cover bg-center text-white" style={{ backgroundImage: 'url("/8.png")' }}>
      <header className="absolute top-0 left-0 right-0 flex justify-between p-4">
        <div className="text-xl">Ujao Tech</div>
        <nav>
          <ul className="flex space-x-4">
            <li>The AI Cloud</li>
            <li>Solutions</li>
            <li className="bg-red-500 px-4 py-2 rounded-full text-sm">Sign Up</li>
          </ul>
        </nav>
      </header>
      <div className="flex flex-col items-center justify-center h-full z-10 p-4">
        <h1 className="text-5xl font-bold mb-6">All your AI solutions to ease your tasks</h1>
        <p className="mb-6">AI Accelerated Deal Flow and Portfolio Intelligence</p>
        <div className="flex flex-col items-center">
          <input type="email" placeholder="Enter email address" className="p-2 mb-4" />
          <button className="bg-red-500 px-6 py-2 rounded-full">Get Started</button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between">
        <div className="flex space-x-4">
          {/* Placeholder for social icons */}
        </div>
        <div className="flex space-x-4">
          <div className="bg-white text-black p-4 rounded-lg">
            <h2 className="font-bold">One Platform, Unlimited AI</h2>
            <p>Customize and deploy AI systems from a single platform</p>
          </div>
          <div className="bg-white text-black p-4 rounded-lg">
            <h2 className="font-bold">Private LLM's You Own</h2>
            <p>Build with private models that only you can access.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
