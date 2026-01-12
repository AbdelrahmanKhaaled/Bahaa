import React from 'react';
import bannerArrow1 from '../assets/banner-arrow1.png';
import bannerArrow2 from '../assets/banner-arrow2.png';
import topics_cloud from '../assets/topics_cloud.png';
import topics_cloud2 from '../assets/topics_cloud2.png';
import ObjCards from '../reusableComponents/ObjCards';

const TopicsGuide = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[100px] py-8 md:py-12 lg:py-16 pt-24 md:pt-32 lg:pt-[180px]">
        {/* Header Section */}
        <div className="relative text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 border-2 border-cyan rounded-sm"></div>
            <span className="text-cyan text-base md:text-lg lg:text-xl font-salsa">grammar</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 font-salsa px-4">
            <span className="text-dark-blue">Guide 2: </span>
            <span className="text-cyan">Practice Activity</span>
          </h1>
          <p className="text-base md:text-lg text-gray-dark font-salsa px-4">
            Learn how Binomials work with step-by-step guides, fun games, and a quick quiz
          </p>
          <img className='hidden lg:block absolute top-[70%] left-[15%]' src={bannerArrow1} alt="Banner Arrow 1" />
          <img className='hidden lg:block absolute top-[70%] right-[15%]' src={bannerArrow2} alt="Banner Arrow 2" />
        </div>

        {/* Learning Objectives Section - Two Columns */}
        <div className="flex flex-col md:flex-row gap-[450px] mt-16 md:mt-24 lg:mt-[130px] mb-12 md:mb-16">
          {/* Left Column */}
          <div className="flex-1 space-y-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-dark-blue font-salsa">Learning Objectives:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-text text-base md:text-lg font-salsa">
              <li>Recognize what nouns are.</li>
              <li>Understand what verbs are.</li>
              <li>Use nouns and verbs correctly in sentences.</li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-dark-blue font-salsa">Learning Objectives:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-text text-base md:text-lg font-salsa">
              <li>Recognize what nouns are.</li>
              <li>Understand what verbs are.</li>
              <li>Use nouns and verbs correctly in sentences.</li>
            </ul>
          </div>
        </div>

        {/* Objectives Cards - 4 in a row */}
        <div className="flex justify-center align-middle mb-12 md:mb-16 mt-16 md:mt-24 lg:mt-[150px]">
          {[["0", "0", "Objectives"], ["ml-[-20px]", "mt-[-50px]", "Objectives"], ["ml-[-20px]", "", "Objectives"], ["ml-[-20px]", "mt-[-50px]", "Objectives"]].map((item, idx) => (
            <ObjCards key={idx} item={item} />
          ))}
        </div>

        {/* Content Section - Lorem Ipsum */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-blue mb-4 md:mb-6 font-salsa">
            1-Lorem Ipsum is <span className="text-cyan">simply dummy</span>
          </h2>
          <ul className="list-disc list-inside space-y-2 md:space-y-3 text-gray-text text-sm md:text-base lg:text-lg ml-4 md:ml-8 font-salsa">
            <li>Recognize what nouns are.Use nouns and verbs correctly in sentences.Recognize what nouns are.Use nouns and verbs correctly in sentences.Recognize what nouns are.Use nouns and .</li>
            <li>Understand what verbs are.</li>
            <li>Recognize what nounsRecognize what nouns are.Use nouns and verbs correctly in sentences.Recognize what nouns are.Use nouns and verbs correctly in sentences.Recognize what nouns are.Use nou.</li>
            <li>Understand what verbs are.</li>
            <li>Use nouns and verbs correctly in sentences.Recognize what nouns are.</li>
            <li>Understand what verbs are.</li>
            <li>Use nouns and verbs correctly in sentences.Recognize what nouns are.</li>
          </ul>
        </div>

        {/* Example Section */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-blue text-center mb-8 md:mb-12 font-salsa">
            Example Lorem <span className="text-cyan">Ipsum is simply</span>
          </h2>

          {/* Cards Grid - 3 columns, 2 rows - now responsive */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-8 lg:gap-12 mb-12">
            <div className="flex flex-col gap-6 md:gap-8 w-full lg:w-auto">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="flex flex-col justify-center items-center bg-contain bg-no-repeat bg-white rounded-2xl shadow-lg p-8 md:p-10 lg:p-[50px] relative hover:shadow-xl transition-shadow"
                  style={{ backgroundImage: `url(${topics_cloud2})` }}
                >
                  <h3 className="text-dark-blue text-lg md:text-xl font-semibold mb-3 font-salsa">Learning Objectives</h3>
                  <p className="text-center text-gray-text text-sm font-salsa leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6 md:gap-8 w-full lg:w-auto">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex flex-col justify-center items-center bg-contain bg-no-repeat bg-white rounded-2xl shadow-lg p-8 md:p-10 lg:p-[50px] relative hover:shadow-xl transition-shadow"
                  style={{ backgroundImage: `url(${topics_cloud2})` }}
                >
                  <h3 className="text-dark-blue text-lg md:text-xl font-semibold mb-3 font-salsa">Learning Objectives</h3>
                  <p className="text-gray-text text-sm font-salsa leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6 md:gap-8 w-full lg:w-auto">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="flex flex-col justify-center items-center bg-contain bg-no-repeat bg-white rounded-2xl shadow-lg p-8 md:p-10 lg:p-[50px] relative hover:shadow-xl transition-shadow"
                  style={{ backgroundImage: `url(${topics_cloud2})` }}
                >
                  <h3 className="text-dark-blue text-lg md:text-xl font-semibold mb-3 font-salsa">Learning Objectives</h3>
                  <p className="text-gray-text text-sm font-salsa leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Continue Button */}
          <div className="text-center md:text-right">
            <button className="bg-dark-blue text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg lg:text-xl font-semibold hover:bg-opacity-90 transition-all hover:scale-105 shadow-lg font-salsa w-full md:w-auto">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicsGuide;
