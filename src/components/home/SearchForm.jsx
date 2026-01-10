import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/topics/guide');
  };

  return (
    <section className="max-w-[1440px] mx-auto px-[100px] -mt-20 relative z-20">
      <div className="bg-white rounded-[27.027px] shadow-[0px_0px_40px_0px_rgba(35,62,121,0.15)] p-[40.54px]">
        <div className="flex items-end gap-[27.03px]">
          {/* Choose Grade */}
          <div className="flex-1">
            <label className="block text-[21.622px] font-salsa capitalize text-dark-blue mb-[16.22px] leading-[32.432px]">
              Choose Grade
            </label>
            <div className="relative">
              <select className="w-full px-[27.03px] py-[40.54px] bg-gray-bg rounded-[13.514px] appearance-none text-[21.622px] font-salsa text-gray-light h-[81.081px] border-none focus:outline-none">
                <option>Option 1</option>
              </select>
              <div className="absolute right-[20.27px] top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-[13.514px] h-[8.108px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="w-[1.351px] h-[145.946px] bg-gray-divider"></div>

          {/* Choose Topic */}
          <div className="flex-1">
            <label className="block text-[21.622px] font-salsa capitalize text-dark-blue mb-[16.22px] leading-[32.432px]">
              Choose Topic
            </label>
            <div className="relative">
              <select className="w-full px-[27.03px] py-[40.54px] bg-gray-bg rounded-[13.514px] appearance-none text-[21.622px] font-salsa text-gray-light h-[81.081px] border-none focus:outline-none">
                <option>Option 1</option>
              </select>
              <div className="absolute right-[20.27px] top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-[13.514px] h-[8.108px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="w-[1.351px] h-[145.946px] bg-gray-divider"></div>

          {/* Choose Lesson Guides */}
          <div className="flex-1">
            <label className="block text-[21.622px] font-salsa capitalize text-dark-blue mb-[16.22px] leading-[32.432px]">
              choose Lesson Guides
            </label>
            <div className="relative">
              <select className="w-full px-[27.03px] py-[40.54px] bg-gray-bg rounded-[13.514px] appearance-none text-[21.622px] font-salsa text-gray-light h-[81.081px] border-none focus:outline-none">
                <option>Option 1</option>
              </select>
              <div className="absolute right-[20.27px] top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-[13.514px] h-[8.108px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <button 
            onClick={handleSearch}
            className="w-[67.568px] h-[67.568px] bg-dark-blue text-white rounded-[33.784px] flex items-center justify-center hover:opacity-90 transition-opacity flex-shrink-0"
          >
            <svg className="w-[22.973px] h-[16.216px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
