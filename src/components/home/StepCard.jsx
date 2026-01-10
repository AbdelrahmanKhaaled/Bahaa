import React from 'react';
import arrow from '../../assets/arrow.png';

const StepCard = ({ title, description, icon, showArrow = false }) => {
  return (
    <>
      <div className="text-center">
        <div className="w-[72px] h-[72px] bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-[24px] font-semibold text-gray-text mb-2 font-salsa capitalize">{title}</h3>
        <p className="text-[16px] text-gray-dark leading-[27.955px] font-salsa">{description}</p>
      </div>
      
      {showArrow && (
        <div className="">
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
