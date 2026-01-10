import React from 'react';

const FeatureCard = ({ title, description, icon, position = 'left' }) => {
  const isLeft = position === 'left';
  
  return (
    <div
      className={`relative bg-white border-b-2 border-cyan rounded-[25.41px] shadow-[0px_4.066px_16.262px_0px_rgba(0,0,0,0.15)] p-[35.57px] z-10 flex items-center ${
        isLeft ? '' : (position === 'middle-left' ? 'mr-[30px]' : position === 'middle-right' ? 'ml-[30px]' : '')
      }`}
    >
      {/* Icon on the left side */}
      {!isLeft && (
        <div className="w-[67.743px] h-[67.743px] bg-cyan rounded-[10.164px] flex items-center justify-center ml-4 flex-shrink-0 absolute left-[-30px] skew-x-[-10deg]">
          <span className="text-2xl">{icon}</span>
        </div>
      )}
      
      {/* Content */}
      <div className={`flex-1 ${isLeft ? 'pr-[35.57px]' : 'pl-[35.57px]'}`}>
        <h3 className="text-[24px] font-semibold text-gray-text mb-2 font-salsa">{title}</h3>
        <p className="text-[16px] text-gray-dark leading-[26.426px] font-salsa">{description}</p>
      </div>
      
      {/* Icon on the right side */}
      {isLeft && (
        <div className="w-[67.743px] h-[67.743px] bg-cyan rounded-[10.164px] flex items-center justify-center ml-4 flex-shrink-0 absolute right-[-30px] skew-x-[-10deg]">
          <span className="text-2xl">{icon}</span>
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
