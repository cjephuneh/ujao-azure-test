import React from 'react';
import Image from 'next/image';
import enterpriseImage from '@/public/1.png'; // Adjust the path as necessary
import industryImage from '@/public/2.png'; // Adjust the path as necessary
import developerApisImage from '@/public/5.png'; // Adjust the path as necessary
import customServicesImage from '@/public/4.png'; // Adjust the path as necessary

const FeatureCard: React.FC<{
    title: string;
    description: string;
    imageUrl: string;
    learnMoreUrl: string;
  }> = ({ title, description, imageUrl, learnMoreUrl }) => {
    return (
      <div className="border rounded-lg p-4 flex flex-col items-center text-center shadow-lg">
        {/* Note how the `src` attribute is set here */}
        <img src={imageUrl} alt={title} className="w-40 h-40 mb-4" />
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
        <a href={learnMoreUrl} className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
          Learn more
        </a>
      </div>
    );
  };
  

const ServicesSection: React.FC = () => {
    return (
      <div className="bg-gray-100 p-10 text-black">
        <h2 className="text-5xl font-bold text-center text-cTtext mb-10">
          Our Industry Expert AIs are built on  state- <br/> of-the-art open-source LLMs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FeatureCard
            title="Designed for Enterprise"
            description="Gradient's platform enables enterprises to build custom AIs best suited to their needs."
            imageUrl="/1.png" // Just provide the path as a string
            learnMoreUrl="#"
        />
          <FeatureCard
            title="Industry Expert AIs"
            description="Build on Gradient's domain-specific LLMs in healthcare, finance and law to solve critical problems."
            imageUrl="/2.png"
            learnMoreUrl="#"
          />
          <FeatureCard
            title="Developer APIs"
            description="Powerful APIs for developers to integrate AI capabilities."
            imageUrl="/4.png"
            learnMoreUrl="#"
          />
          <FeatureCard
            title="Custom Services"
            description="Custom AI solutions tailored to your business needs."
            imageUrl="/5.png"
            learnMoreUrl="#"
          />
        </div>
        <div className="flex justify-around mt-10">
          <span className="text-lg font-semibold">Developer APIs</span>
          <span className="text-lg font-semibold">Custom Services</span>
        </div>
      </div>
    );
  };
  
  export default ServicesSection;
  