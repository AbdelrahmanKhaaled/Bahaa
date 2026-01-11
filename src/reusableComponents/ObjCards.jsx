import React from 'react';
import topics_cloud from '../assets/topics_cloud.png';

const ObjCards = ({ item = ["", "", "Objectives"] }) => {
  const [className1 = "", className2 = "", text = "Objectives"] = item;

  return (
    <div
      // key={item} 
      className={`w-full md:w-[180px] lg:w-[220.49px] h-24 md:h-28 lg:h-[136.81px] relative flex justify-center items-center bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-cyan/20 bg-cover bg-center ${className1} ${className2}`}
      style={{ backgroundImage: `url(${topics_cloud})` }}
    >
      <h3 className={`text-cyan text-lg md:text-xl lg:text-2xl font-semibold font-salsa`}>{text}</h3>
    </div>
  );
};

export default ObjCards;