import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../assets/hero.png';
import mainBg from '../../assets/main-bg.png';
import clouds from '../../assets/clouds.png';

const HeroSection = () => {
  return (
    <section 
      className="relative bg-cover bg-center flex justify-center items-center pt-[212px] pb-32"
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      <div className="z-10">
        <div className="max-w-[662px] space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 border-2 border-cyan rounded-sm"></div>
              <span className="text-cyan text-[20px] font-salsa capitalize">We bring together the best</span>
            </div>
            <h1 className="text-[48px] font-bold leading-[70px] text-gray-text">
              Teach your students in <span className="text-cyan">a fun</span> and <span className="text-cyan">interactive</span> <span className="text-cyan">way</span>
            </h1>
            <p className="text-[20px] text-gray-dark leading-[32px] font-salsa capitalize">
              Ready-to-use lesson guides, educational games, and<br />
              an AI assistant  all in one place
            </p>
          </div>
          <Link to="/topics" className="inline-block">
            <button className="bg-dark-blue text-white rounded-[28px] px-6 py-3 h-14 text-[16px] font-salsa capitalize hover:opacity-90 transition-opacity">
              Start Teaching Now
            </button>
          </Link>
        </div>
      </div>
      <div className="">
        <img
          src={hero}
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-full">
        <img
          src={clouds}
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
