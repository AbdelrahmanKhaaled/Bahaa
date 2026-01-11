import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Topics = () => {
  const [expandedItems, setExpandedItems] = useState([1, 3]);

  const toggleItem = (index) => {
    setExpandedItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[100px] py-8 md:py-12 lg:py-16 pt-24 md:pt-32 lg:pt-[180px]">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 border-2 border-cyan rounded-sm"></div>
            <span className="text-cyan text-base md:text-lg lg:text-[20px] font-salsa capitalize">choose your topic</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-[48px] font-bold text-gray-text mb-3 md:mb-4 px-4">
            Start Your Lesson in <span className="text-cyan">3 Simple Steps</span>
          </h1>
          <p className="text-base md:text-lg lg:text-[20px] text-gray-dark font-salsa px-4">
            Choose the grade, pick a topic, and get ready-to-use lesson guides instantly
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-[20px] md:rounded-[27.928px] shadow-[0px_0px_41.333px_0px_rgba(35,62,121,0.15)] p-4 md:p-6 lg:p-[41.89px] mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row items-stretch md:items-end gap-4 md:gap-[27.93px]">
            {/* Choose Grade */}
            <div className="flex-1 w-full">
              <label className="block text-base md:text-lg lg:text-[24px] font-salsa capitalize text-dark-blue mb-2 md:mb-[16.76px]">
                Choose Grade
              </label>
              <div className="relative">
                <select className="w-full px-4 md:px-6 lg:px-[27.93px] py-3 md:py-6 lg:py-[41.89px] bg-gray-bg rounded-[10px] md:rounded-[13.964px] appearance-none text-base md:text-lg lg:text-[22px] font-salsa text-gray-text h-12 md:h-16 lg:h-[83.784px] border-none focus:outline-none">
                  <option>Grade 5</option>
                </select>
                <div className="absolute right-3 md:right-[20.95px] top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-3 h-2 md:w-[13.964px] md:h-[8.378px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-[1.396px] h-[150.811px] bg-gray-divider"></div>

            {/* Choose Topic */}
            <div className="flex-1 w-full">
              <label className="block text-base md:text-lg lg:text-[24px] font-salsa capitalize text-dark-blue mb-2 md:mb-[16.76px]">
                Choose Topic
              </label>
              <div className="relative">
                <select className="w-full px-4 md:px-6 lg:px-[27.93px] py-3 md:py-6 lg:py-[41.89px] bg-gray-bg rounded-[10px] md:rounded-[13.964px] appearance-none text-base md:text-lg lg:text-[22px] font-salsa text-gray-text h-12 md:h-16 lg:h-[83.784px] border-none focus:outline-none">
                  <option>Grammar</option>
                </select>
                <div className="absolute right-3 md:right-[20.95px] top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-3 h-2 md:w-[13.964px] md:h-[8.378px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-[1.396px] h-[150.811px] bg-gray-divider"></div>

            {/* Choose Lesson Guides */}
            <div className="flex-1 w-full">
              <label className="block text-base md:text-lg lg:text-[24px] font-salsa capitalize text-dark-blue mb-2 md:mb-[16.76px]">
                choose Lesson Guides
              </label>
              <div className="relative">
                <select className="w-full px-4 md:px-6 lg:px-[27.93px] py-3 md:py-6 lg:py-[41.89px] bg-gray-bg rounded-[10px] md:rounded-[13.964px] appearance-none text-base md:text-lg lg:text-[22px] font-salsa text-gray-text h-12 md:h-16 lg:h-[83.784px] border-none focus:outline-none">
                  <option>Practice Activity</option>
                </select>
                <div className="absolute right-3 md:right-[20.6px] top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-3 h-2 md:w-[13.964px] md:h-[8.378px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <button className="w-full md:w-14 md:h-14 lg:w-[69.82px] lg:h-[69.82px] h-12 bg-dark-blue text-white rounded-[20px] md:rounded-[34.91px] flex items-center justify-center hover:opacity-90 transition-opacity">
              <svg className="w-5 h-4 md:w-6 md:h-4 lg:w-[23.739px] lg:h-[16.757px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div>
          <div className="text-center mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 border-2 border-cyan rounded-sm"></div>
              <span className="text-cyan text-base md:text-lg lg:text-[20px] font-salsa capitalize">choose your topic</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-gray-text mb-3 md:mb-4 px-4">
              Your Lesson <span className="text-cyan">Content</span>
            </h2>
            <p className="text-base md:text-lg lg:text-[20px] text-gray-dark font-salsa px-4">
              Explore the guides, play interactive games, and test knowledge with a quick quiz
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            {/* Accordion Items */}
            <div className="flex-1 space-y-4">
              {[
                { title: "Guide 1: Introduction & Examples", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", button: "show more" },
                { title: "Guide 2: Practice Activity", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", button: "show more" },
                { title: "Interactive Games Section", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", button: "start game" },
                { title: "Guide 3: Practice Activity", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", button: "show more" },
              ].map((item, index) => {
                const isExpanded = expandedItems.includes(index);
                return (
                  <div key={index} className="relative">
                    <button
                      onClick={() => toggleItem(index)}
                      className={`w-full border-2 rounded-[20px] md:rounded-[28px] p-4 md:p-5 flex items-center justify-between transition-colors ${isExpanded
                        ? 'bg-[#243e7a] border-[#243e7a]'
                        : 'bg-white border-[#dfdfdf]'
                        }`}
                    >
                      <span className={`text-base md:text-lg lg:text-[20px] font-salsa ${isExpanded ? 'text-white' : 'text-[#243e7a]'}`}>
                        {item.title}
                      </span>
                      <svg
                        className={`w-6 h-6 md:w-8 md:h-8 transition-transform ${isExpanded ? 'rotate-180' : ''} ${isExpanded ? 'text-white' : 'text-gray-500'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isExpanded && (
                      <div className="mt-2 bg-[#f4f5f8] rounded-[20px] md:rounded-[28px] p-4 md:p-5 w-full">
                        <p className="text-base md:text-lg lg:text-[20px] text-[#7e7e7e] font-salsa mb-4 leading-relaxed md:leading-[24px]">
                          {item.content}
                        </p>
                        <Link to={item.button.includes('game') ? '/topics/game' : '/topics/guide'}>
                          <button className="bg-dark-blue text-white rounded-[28px] px-5 md:px-6 py-3 h-12 md:h-[52px] text-base md:text-lg lg:text-[20px] font-salsa capitalize hover:opacity-90 transition-opacity w-full md:w-auto">
                            {item.button}
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Illustration Sidebar */}
            <div className="hidden lg:block w-[447px] h-[243px] bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl flex items-center justify-center flex-shrink-0">
              <p className="text-gray-600">Illustration Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topics;
