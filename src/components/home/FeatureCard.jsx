import React from 'react';

const FeatureCard = ({ title, description, icon, position }) => {
  const isLeft = position === 'left';
  const isLeftMiddle = position === 'middle-left';

  return (
    <div
      className={`relative bg-white border-b-2 border-cyan rounded-[20px] md:rounded-[25.41px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.15)] p-5 md:p-6 lg:p-[35.57px] z-10 flex items-center ${isLeft ? '' : (position === 'middle-left' ? 'md:mr-[20px] lg:mr-[30px]' : position === 'middle-right' ? 'md:ml-[20px] lg:ml-[30px]' : '')
        }`}
    >
      {/* Icon on the left side - only for desktop absolute positioning */}
      {!isLeft && !isLeftMiddle && (
        <div className="hidden lg:flex w-[67.743px] h-[67.743px] bg-cyan rounded-[10.164px] items-center justify-center ml-4 flex-shrink-0 absolute left-[-30px] skew-x-[-10deg]">
          <span className="text-2xl">{icon}</span>
        </div>
      )}

      {/* Content */}
      <div className={`flex-1 ${isLeft || isLeftMiddle ? '' : 'lg:pl-[35.57px]'}`}>
        <h3 className="text-lg md:text-xl lg:text-[24px] font-semibold text-gray-text mb-2 font-salsa">{title}</h3>
        <p className="text-sm md:text-base lg:text-[16px] text-gray-dark leading-relaxed md:leading-[24px] lg:leading-[26.426px] font-salsa">{description}</p>
      </div>

      {/* Icon on the right - visible on mobile/tablet, absolute on desktop */}
      <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-[67.743px] lg:h-[67.743px] bg-cyan rounded-[8px] md:rounded-[10.164px] flex items-center justify-center flex-shrink-0 ${isLeft || isLeftMiddle
          ? 'lg:absolute lg:right-[-30px]'
          : 'lg:hidden'
        } skew-x-[-10deg]`}>
        <span className="text-xl md:text-2xl">{icon}</span>
      </div>

      {/* Icon on the right for desktop left-positioned cards */}
      {(isLeft || isLeftMiddle) && (
        <div className="hidden lg:flex w-[67.743px] h-[67.743px] bg-cyan rounded-[10.164px] items-center justify-center ml-4 flex-shrink-0 absolute right-[-30px] skew-x-[-10deg]">
          <span className="text-2xl">{icon}</span>
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
