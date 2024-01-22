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
    <div className="flex flex-col rounded-xl gap-2 border border-gray-500 items-center  overflow-hidden ">
      <h3 className="text-xl font-semibold mb-2 pt-4 text-center text-gray-800">{title}</h3>
      <img src={imageUrl} alt={title} className="w-50 h-50 p-4 items-center"/>
      <div className=" items-center p-4">
        <p className="text-gray-600 mb-4">{description}</p>
        <a href={learnMoreUrl} className="text-blue-600 hover:text-blue-800 transition duration-300">
          Learn more
        </a>
      </div>
    </div>
  );
};


const ServicesSection: React.FC = () => {
    return (
      <div className="bg-gray-100 p-10 text-black px-[120px]">
        <h2 className="text-5xl font-bold text-center text-cTtext mb-10">
          Our Industry Expert AIs are built on  state- <br/> of-the-art open-source LLMs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FeatureCard
            title="Designed for Enterprise"
            description="Gradient's platform enables enterprises to build custom AIs best suited to their needs."
            imageUrl="/1.png" 
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
        
      </div>
    );
  };
  
  export default ServicesSection;
  