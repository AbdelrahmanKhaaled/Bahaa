import React from 'react';
import { Link } from 'react-router-dom';
import plus from '../../assets/plus.png';
import voice from '../../assets/voice.png';
import send from '../../assets/send.png';

const AISupporter = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-[100px] py-32 pt-[180px]">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-2 h-2 border-2 border-cyan rounded-sm"></div>
          <span className="text-cyan text-[20px] font-salsa capitalize">Ai supporter</span>
        </div>
        <h2 className="text-[40px] font-bold text-gray-text mb-4">
          Your AI <span className="text-cyan">Teaching Assistant</span>
        </h2>
        <p className="text-[20px] text-gray-dark font-salsa">
          Ask AI for instant guidance, activities, or quick answers
        </p>
      </div>

      <div className="w-[70%] mx-auto">
        <div className="bg-[rgba(35,62,121,0.05)] rounded-[150px] p-[20px] flex items-center gap-4">
          <div className="flex-1 flex items-center gap-4 px-8">
            <div className="w-[30px] h-[30px] flex items-center justify-center">
              <img src={plus} alt="plus" className="w-full h-full object-cover" />
            </div>
            <input
              type="text"
              placeholder="ask any think"
              className="flex-1 outline-none bg-transparent text-[20px] font-salsa text-[#888] placeholder-[#888]"
            />
          </div>
          <div className="flex gap-3 pr-4">
            <button className="w-[30px] h-[30px] flex items-center justify-center">
              <img src={voice} alt="voice" className="w-full h-full object-cover" />
            </button>
            <Link to="/ai-supporter/conversation" className="inline-block">
              <button className="w-[30px] h-[30px] flex items-center justify-center">
                <img src={send} alt="send" className="w-full h-full object-cover" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISupporter;
