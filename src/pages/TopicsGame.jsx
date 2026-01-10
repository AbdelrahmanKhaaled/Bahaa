import React from 'react';

const TopicsGame = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-[100px] py-16 pt-[180px]">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 border-2 border-cyan rounded-sm"></div>
            <span className="text-cyan text-xl">games</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-dark-blue">Interactive</span>
            <span className="text-cyan"> Games Section</span>
          </h1>
          <p className="text-lg text-gray-dark">
            Learn how fractions work with step-by-step guides, fun games, and a quick quiz
          </p>
        </div>

        {/* Game Area */}
        <div className="mb-12">
          <div className="bg-gray-placeholder rounded-lg h-[705px] flex items-center justify-center">
            <div className="text-center">
              <div className="w-[450px] h-[442px] bg-white/70 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <p className="text-gray-500 text-xl">Game Illustration Placeholder</p>
              </div>
              <p className="text-gray-600">Interactive game will be displayed here</p>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button className="bg-dark-blue text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-opacity-90 transition-colors">
            continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopicsGame;

