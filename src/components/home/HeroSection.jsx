import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../assets/hero_image.png';
import mainBg from '../../assets/main-bg.png';
import clouds from '../../assets/hero_clouds.png';

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center flex justify-center items-center pt-24 md:pt-32 lg:pt-[212px] pb-16 md:pb-24 lg:pb-32"
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[100px] w-full flex flex-col lg:flex-row justify-start items-start  gap-8 lg:gap-12 z-10">
        <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left w-[90%]">
          <div className="z-50 space-y-3 md:space-y-4">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <div className="w-2 h-2 border-2 border-cyan rounded-sm"></div>
              <span className="text-base md:text-lg lg:text-[20px] text-cyan font-salsa capitalize">We bring together the best</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-[48px] font-bold leading-tight md:leading-[50px] lg:leading-[70px] text-gray-text">
              Teach your students in <span className="text-cyan">a fun</span> and <span className="text-cyan">interactive</span> <span className="text-cyan">way</span>
            </h1>
            <p className="text-base md:text-lg lg:text-[20px] text-gray-dark leading-relaxed md:leading-[28px] lg:leading-[32px] font-salsa capitalize max-w-xl mx-auto lg:mx-0">
              Ready-to-use lesson guides, educational games, and
              an AI assistant all in one place
            </p>
          </div>
          <Link to="/topics" className="inline-block">
            <button className="bg-dark-blue text-white rounded-[28px] px-5 md:px-6 py-3 h-12 md:h-14 text-sm md:text-base font-salsa capitalize hover:opacity-90 transition-opacity">
              Start Teaching Now
            </button>
          </Link>
        </div>
        <div className="flex-1 w-full max-w-md lg:max-w-none">
          <img
            src={hero}
            alt="Hero Image"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      <div className="absolute bottom-[-25%] right-[-10%] w-[115%] pointer-events-none z-20 md:visible">
        <img
          src={clouds}
          alt="Decorative clouds"
          className="w-full object-cover opacity-100"
        />
      </div>
    </section>
  );
};

export default HeroSection;
