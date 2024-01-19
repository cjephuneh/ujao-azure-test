import React from 'react';

type ExpertAIsProps = {
  title: string;
  description: string;
  imageUrl: string; // Assuming you have an image URL or a local path
};

const IndustryExpertAIsSection: React.FC<ExpertAIsProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-orange-500 text-white flex flex-row items-center p-4">
      <div className="flex-1">
        <img src={imageUrl} alt="Illustration of industry expert AIs" className="max-w-xs md:max-w-sm" />
      </div>
      <div className="flex-1 p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p>{description}</p>
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
        imageUrl="/path-to-your-image.png" // Replace with your image path
      />
      {/* ... other components */}
    </div>
  );
}
