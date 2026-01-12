import React, { useState } from 'react';
import SearchForm from '../components/home/SearchForm';
import { Link } from 'react-router-dom';
import nodata from '../assets/topics_nodata.png';


const TopicsNoData = () => {
    const [expandedItems, setExpandedItems] = useState([1, 3]);

    const [grade, setGrade] = useState("");
  const [topic, setTopic] = useState("");
  const [lesson, setLesson] = useState("");

  const handleSearch = () => {
    console.log({ grade, topic, lesson });

    navigate('/topics/guide', {
      state: { grade, topic, lesson },
    });
  };

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

                <div className="bg-white rounded-[20px] md:rounded-[27.928px] shadow-[0px_0px_41.333px_0px_rgba(35,62,121,0.15)] p-4 md:p-6 lg:p-[41.89px] mb-12 md:mb-16">
      <div className="flex flex-col md:flex-row items-stretch md:items-end gap-4 md:gap-[27.93px]">

        {/* Choose Grade */}
        <div className="flex-1 w-full">
          <label className="block text-base md:text-lg lg:text-[24px] font-salsa capitalize text-dark-blue mb-2 md:mb-[16.76px]">
            Choose Grade
          </label>
          <div className="relative">
            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full px-4 md:px-6 lg:px-[27.03px] py-3 md:py-6 bg-gray-bg rounded-[10px] md:rounded-[13.514px] appearance-none text-base md:text-lg lg:text-[21.622px] font-salsa text-gray-light h-12 md:h-16 lg:h-[81.081px] focus:outline-none"
              >
              <option value="" disabled>Select Grade</option>
              <option value="Grade 4">Grade 4</option>
              <option value="Grade 5">Grade 5</option>
              <option value="Grade 6">Grade 6</option>
            </select>

            <div className="absolute right-3 md:right-[20.95px] top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-3 h-2 md:w-[13.964px] md:h-[8.378px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[1.396px] h-[150.811px] bg-gray-divider"></div>

        {/* Choose Topic */}
        <div className="flex-1 w-full">
          <label className="block text-base md:text-lg lg:text-[24px] font-salsa capitalize text-dark-blue mb-2 md:mb-[16.76px]">
            Choose Topic
          </label>
          <div className="relative">
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-4 md:px-6 lg:px-[27.03px] py-3 md:py-6 bg-gray-bg rounded-[10px] md:rounded-[13.514px] appearance-none text-base md:text-lg lg:text-[21.622px] font-salsa text-gray-light h-12 md:h-16 lg:h-[81.081px] focus:outline-none"
              >
              <option value="" disabled>Select Topic</option>
              <option value="Grammar">Grammar</option>
              <option value="Vocabulary">Vocabulary</option>
              <option value="Reading">Reading</option>
            </select>

            <div className="absolute right-3 md:right-[20.95px] top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-3 h-2 md:w-[13.964px] md:h-[8.378px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[1.396px] h-[150.811px] bg-gray-divider"></div>

        {/* Choose Lesson Guides */}
        <div className="flex-1 w-full">
          <label className="block text-base md:text-lg lg:text-[24px] font-salsa capitalize text-dark-blue mb-2 md:mb-[16.76px]">
            Choose Lesson Guides
          </label>
          <div className="relative">
            <select
              value={lesson}
              onChange={(e) => setLesson(e.target.value)}
              className="w-full px-4 md:px-6 lg:px-[27.03px] py-3 md:py-6 bg-gray-bg rounded-[10px] md:rounded-[13.514px] appearance-none text-base md:text-lg lg:text-[21.622px] font-salsa text-gray-light h-12 md:h-16 lg:h-[81.081px] focus:outline-none"
            >
              <option value="" disabled>Select Lesson</option>
              <option value="Practice Activity">Practice Activity</option>
              <option value="Lesson Guide">Lesson Guide</option>
              <option value="Assessment">Assessment</option>
            </select>

            <div className="absolute right-3 md:right-[20.6px] top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-3 h-2 md:w-[13.964px] md:h-[8.378px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <button
            onClick={handleSearch}
            disabled={!grade || !topic || !lesson}
            // disabled
            className="w-full md:w-14 md:h-14 lg:w-[67.568px] lg:h-[67.568px] h-12 bg-dark-blue text-white rounded-[20px] md:rounded-[33.784px] flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            <svg className="w-5 h-4 md:w-6 md:h-4 lg:w-[22.973px] lg:h-[16.216px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

      </div>
    </div>

                {/* No Data Illustration */}
                <div className="relative w-full h-auto max-w-2xl mx-auto mt-6">
                    <img
                        src={nodata}
                        alt="No Data Illustration"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default TopicsNoData;
