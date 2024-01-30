import React from 'react';
import Image from 'next/image';

type ExpertAIsProps = {
  title: string;
  description: string;
  imageUrl: string; 
};

const IndustryExpertAIsSection: React.FC<ExpertAIsProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-orange-500 text-white flex flex-row items-center py-[180px] lg:px-20">
      <div className="flex-1 flex justify-center px-4">
        <Image
          src={imageUrl}
          alt='Illustration of industry expert AIs'
          height={420}
          width={420}
          className="max-w-xs md:max-w-sm"
        />
      </div>
      <div className="flex-1 flex justify-center px-4">
        <div className="max-w-md mx-auto"> {/* Adjust max-w-md as needed for your design */}
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className=' text-black text-2xl'>{description}</p>
        </div>
      </div>
    </div>
  );
};


export default function Page() {
  return (
    <div>
      <IndustryExpertAIsSection
        title="Industry Expert AIs"
        description="Domain-specific LLMs designed for your industry. From healthcare to financial services, simply define the data you want to teach it and we’ll take care of the rest."
        imageUrl="/7.png"
      />

    </div>
  );
}
