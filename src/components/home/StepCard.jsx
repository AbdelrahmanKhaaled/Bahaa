import React from 'react';
import arrow from '../../assets/arrow.png';

const StepCard = ({ title, description, icon, showArrow = false }) => {
  return (
    <>
      <div className="text-center w-full md:max-w-xs">
        <div className="w-16 h-16 md:w-[72px] md:h-[72px] bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
          <span className="text-xl md:text-2xl">{icon}</span>
        </div>
        <h3 className="text-lg md:text-xl lg:text-[24px] font-semibold text-gray-text mb-2 font-salsa capitalize">{title}</h3>
        <p className="text-sm md:text-base lg:text-[16px] text-gray-dark leading-relaxed md:leading-[27.955px] font-salsa">{description}</p>
      </div>

      {showArrow && (
        <div className="hidden md:block">
          <img
            src={arrow}
            alt="arrow"
            className="object-cover"
          />
        </div>
      )}
    </>
  );
};

export default StepCard;
