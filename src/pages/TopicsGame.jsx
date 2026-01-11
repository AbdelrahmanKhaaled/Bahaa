import React from 'react';
import game from '../assets/game.png';

const TopicsGame = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[100px] py-8 md:py-12 lg:py-16 pt-24 md:pt-32 lg:pt-[180px]">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 border-2 border-cyan rounded-sm"></div>
            <span className="text-cyan text-base md:text-lg lg:text-xl font-salsa">grammar</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 font-salsa px-4">
            <span className="text-dark-blue">Guide 3: </span>
            <span className="text-cyan">Interactive Games</span>
          </h1>
          <p className="text-base md:text-lg text-gray-dark font-salsa px-4">
            Play fun games to practice what you've learned
          </p>
        </div>

        {/* Game Area */}
        <div className="relative bg-gray-placeholder rounded-lg w-full h-auto md:h-[400px] lg:h-[578px] mb-8 md:mb-12">
          <img
            src={game}
            alt="Interactive Game"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Continue Button */}
        <div className="text-center md:text-right">
          <button className="bg-dark-blue text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg lg:text-xl font-semibold hover:bg-opacity-90 transition-all hover:scale-105 shadow-lg font-salsa w-full md:w-auto">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopicsGame;
