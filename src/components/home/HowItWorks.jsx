import React from 'react';
import howBg from '../../assets/how_bg.png';
import StepCard from './StepCard';

const howSteps = [
  {
    title: "Time-Saving",
    description: "Save preparation time with ready-made materials",
    icon: "📝",
  },
  {
    title: "AI Teaching Assistant",
    description: "Ask questions and get instant answers with AI",
    icon: "📝",
  },
  {
    title: "Interactive Games",
    description: "Engage students with interactive games",
    icon: "📝",
  },
];

const HowItWorks = () => {
  return (
    <section
      className="relative py-12 md:py-16 lg:py-24 mt-8 md:mt-10 lg:mt-[48px] bg-cover bg-center"
      style={{ backgroundImage: `url(${howBg})` }}
    >
      {/* Background gradient */}
      <div className="absolute bg-gradient-to-br from-blue-50 to-white"></div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[100px] relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 border-2 border-cyan rounded-sm"></div>
            <span className="text-cyan text-base md:text-lg lg:text-[20px] font-salsa capitalize">How It Works</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold mb-3 md:mb-4">
            <span className="text-gray-text">Teaching</span> <span className="text-cyan">Made Simple</span>
          </h2>
          <p className="text-base md:text-lg lg:text-[20px] text-gray-dark font-salsa px-4">
            Follow 3 easy steps to start your lesson and engage your class
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full items-center mb-8 md:mb-12 gap-6 md:gap-4">
          <StepCard {...howSteps[0]} showArrow={true} />
          <StepCard {...howSteps[1]} showArrow={true} />
          <StepCard {...howSteps[2]} showArrow={false} />
        </div>

        <div className="text-center">
          <button className="bg-dark-blue text-white rounded-[28px] px-5 md:px-6 py-3 h-12 md:h-[52px] text-base md:text-lg lg:text-[20px] font-salsa capitalize hover:opacity-90 transition-opacity">
            Start Teaching Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
