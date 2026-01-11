import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import nodata from '../assets/topics_nodata.png';


const TopicsNoData = () => {
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
