import React from 'react';
import Group from '../../assets/Group 58.png';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: "Time-Saving",
    description: "Save preparation time with ready-made materials",
    icon: "⏱️",
  },
  {
    title: "AI Teaching Assistant",
    description: "Ask questions and get instant answers with AI",
    icon: "🤖",
  },
  {
    title: "Interactive Games",
    description: "Engage students with interactive games",
    icon: "🎮",
  },
  {
    title: "Time-Saving",
    description: "Save preparation time with ready-made materials",
    icon: "⏱️",
  },
  {
    title: "AI Teaching Assistant",
    description: "Ask questions and get instant answers with AI",
    icon: "🤖",
  },
  {
    title: "Interactive Games",
    description: "Engage students with interactive games",
    icon: "🎮",
  },
];

const WhyChooseU = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[100px] py-12 md:py-16 lg:py-24 md:mt-20 lg:mt-[112px]">
      <div className="text-center mb-12 md:mb-14 lg:mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-2 h-2 border-2 border-cyan rounded-sm"></div>
          <span className="text-cyan text-base md:text-lg lg:text-[20px] font-salsa capitalize">We bring together the best</span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-gray-text mb-3 md:mb-4 px-4 lg:px-0">
          Why <span className="text-cyan">Choose</span> Our Platform
        </h2>
        <p className="text-base md:text-lg lg:text-[20px] text-gray-dark font-salsa px-4 lg:px-0">
          We created this platform to make teaching easier and more fun for 5th & 7th grade students
        </p>
      </div>

      <div className="relative flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 md:gap-8 lg:gap-0">
        <div className="w-full lg:w-auto flex flex-col gap-6 md:gap-8">
          <FeatureCard {...features[0]} position="left" />
          <FeatureCard {...features[1]} position="middle-left" />
          <FeatureCard {...features[2]} position="left" />
        </div>

        {/* Center Image Placeholder - Hidden on mobile/tablet */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 w-[550px] h-[550px]">
          <img
            src={Group}
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Feature Cards */}
        <div className="w-full lg:w-auto flex flex-col gap-6 md:gap-8">
          <FeatureCard {...features[3]} position="right" />
          <FeatureCard {...features[4]} position="middle-right" />
          <FeatureCard {...features[5]} position="right" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseU;