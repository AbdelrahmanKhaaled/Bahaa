import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const navigate = useNavigate();

  // ✅ State for selects
  const [grade, setGrade] = useState('');
  const [topic, setTopic] = useState('');
  const [lesson, setLesson] = useState('');

  const handleSearch = () => {
    console.log({ grade, topic, lesson });

    navigate('/topics/guide', {
      state: { grade, topic, lesson },
    });
  };

  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[100px] -mt-12 md:-mt-16 lg:-mt-20 relative z-20">
      <div className="bg-white rounded-[20px] md:rounded-[27.027px] shadow-[0px_0px_40px_0px_rgba(35,62,121,0.15)] p-4 md:p-6 lg:p-[40.54px]">
        <div className="flex flex-col md:flex-row items-stretch md:items-end gap-4 md:gap-[27.03px]">

          {/* Choose Grade */}
          <div className="flex-1 w-full">
            <label className="block text-base md:text-lg lg:text-[21.622px] font-salsa capitalize text-dark-blue mb-2 md:mb-[16.22px]">
              Choose Grade
            </label>
            <div className="relative">
              <select
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="w-full px-4 md:px-6 lg:px-[27.03px] py-3 md:py-6 bg-gray-bg rounded-[10px] md:rounded-[13.514px] appearance-none text-base md:text-lg lg:text-[21.622px] font-salsa text-gray-light h-12 md:h-16 lg:h-[81.081px] focus:outline-none"
              >
                <option value="" disabled>Select Grade</option>
                <option value="grade-1">Grade 1</option>
                <option value="grade-2">Grade 2</option>
                <option value="grade-3">Grade 3</option>
              </select>

              <SelectArrow />
            </div>
          </div>

          <Divider />

          {/* Choose Topic */}
          <div className="flex-1 w-full">
            <label className="block text-base md:text-lg lg:text-[21.622px] font-salsa capitalize text-dark-blue mb-2 md:mb-[16.22px]">
              Choose Topic
            </label>
            <div className="relative">
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-4 md:px-6 lg:px-[27.03px] py-3 md:py-6 bg-gray-bg rounded-[10px] md:rounded-[13.514px] appearance-none text-base md:text-lg lg:text-[21.622px] font-salsa text-gray-light h-12 md:h-16 lg:h-[81.081px] focus:outline-none"
              >
                <option value="" disabled>Select Topic</option>
                <option value="math">Math</option>
                <option value="science">Science</option>
                <option value="english">English</option>
              </select>

              <SelectArrow />
            </div>
          </div>

          <Divider />

          {/* Choose Lesson Guides */}
          <div className="flex-1 w-full">
            <label className="block text-base md:text-lg lg:text-[21.622px] font-salsa capitalize text-dark-blue mb-2 md:mb-[16.22px]">
              Choose Lesson Guides
            </label>
            <div className="relative">
              <select
                value={lesson}
                onChange={(e) => setLesson(e.target.value)}
                className="w-full px-4 md:px-6 lg:px-[27.03px] py-3 md:py-6 bg-gray-bg rounded-[10px] md:rounded-[13.514px] appearance-none text-base md:text-lg lg:text-[21.622px] font-salsa text-gray-light h-12 md:h-16 lg:h-[81.081px] focus:outline-none"
              >
                <option value="" disabled>Select Lesson</option>
                <option value="lesson-1">Lesson 1</option>
                <option value="lesson-2">Lesson 2</option>
                <option value="lesson-3">Lesson 3</option>
              </select>

              <SelectArrow />
            </div>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            disabled={!grade || !topic || !lesson}
            className="w-full md:w-14 md:h-14 lg:w-[67.568px] lg:h-[67.568px] h-12 bg-dark-blue text-white rounded-[20px] md:rounded-[33.784px] flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            <svg className="w-5 h-4 md:w-6 md:h-4 lg:w-[22.973px] lg:h-[16.216px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
};

/* =====================
   Reusable Components
===================== */

const Divider = () => (
  <div className="hidden md:block w-[1.351px] h-[145.946px] bg-gray-divider" />
);

const SelectArrow = () => (
  <div className="absolute right-3 md:right-[20.27px] top-1/2 -translate-y-1/2 pointer-events-none">
    <svg className="w-3 h-2 md:w-[13.514px] md:h-[8.108px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </div>
);

export default SearchForm;
