import React from 'react';
import topics_cloud from '../assets/topics_cloud.png';

const ObjCards = ({item, tailwind}) => {
  return (  
    <div 
      // key={item} 
      className={`w-[220.49px] h-[136.81px] relative flex justify-center items-center bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-cyan/20  bg-cover bg-center ${tailwind[0]} ${tailwind[1]}`}
      style={{ backgroundImage: `url(${topics_cloud})` }}
    >
      <h3 className={`text-cyan text-2xl font-semibold font-salsa `}>{item}</h3>
    </div>
  );
};

export default ObjCards;