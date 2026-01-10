import React from 'react';
import head from '../assets/why_head.png';
import cloud from '../assets/why_cloud.png';
import check from '../assets/why_check.png';
import about from '../assets/about_us.png';
import we from '../assets/about_we.png';
import what from '../assets/about_what.png';
import approach from '../assets/about_approach.png';
import promise from '../assets/about_promise.png';
import ObjCards from '../reusableComponents/objCards';
import WhyChooseU from '../components/home/WhyChooseUs';

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-white relative">

      {/* Hero Section */}
      <section className="relative pt-[180px] pb-32 overflow-hidden min-h-[901px] bg-gradient-to-br from-blue-50 via-blue-100 to-white">
        {/* Background with gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-br "></div> */}
        
        <div className="max-w-[1440px] mx-auto px-[100px] relative z-10">
          <div className="flex justify-between gap-16 items-center pt-12">
            <div className=" flex-1">
              <img src={head} alt="" className='w-full h-full ' />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 border-2 border-cyan rounded-sm"></div>
                <span className="text-cyan text-[20px] font-salsa capitalize">why choose us</span>
              </div>
              <h1 className="text-[48px] font-bold text-gray-text leading-[70px] mb-6">
                Teaching Reimagined for <span className="text-cyan">the Modern Classroom</span>
              </h1>
              <p className="text-[16px] text-gray-dark leading-[24px] font-salsa capitalize">
                We bring together interactive guides, fun and educational games, and smart AI support — all in one platform designed to transform teaching. Our approach helps teachers save valuable preparation time, deliver lessons with confidence, and keep students actively engaged from start to finish. By combining clear instructions, playful practice, and intelligent assistance.
              </p>
              <div className='pt-10'>
                <div className='flex items-center gap-2'>
                  <img src={check}></img>
                  <h2>Our Mission</h2>
                </div>
                <p className="pl-10 pt-2 text-gray-dark leading-[24px] font-salsa ">To empower teachers with simple, innovative tools that save time, spark creativity, and ensure every student has the chance to succeed.</p>
              </div>
              <div className='pt-5'>
                <div className='flex items-center gap-2'>
                  <img src={check}></img>
                  <h2>Our Vision</h2>
                </div>
                <p className="pl-10 pt-2 text-gray-dark leading-[24px] font-salsa ">To create a future where learning is interactive, inspiring, and accessible to every classroom around the world.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='overflow-hidden mb-[-180px] z-50 bg-cover bg-no-repeat'
        style={{ backgroundImage: `url(${cloud})` }}>
        <div className="flex w-full justify-center m-auto mb-16 mt-[150px]">
          {[["m-0", "ml-[-20px]"], ["mt-[-70px]", "ml-[-20px]"], ["mt-0", "ml-[-20px]"], ["mt-[-70px]", "ml-[-20px]"]].map((item) => (
            <ObjCards item='Objectives' tailwind={item}/>
          ))}
        </div>
      </div>
      </section>

      <WhyChooseU />

      {/* About Us Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
        
        <div className="max-w-[1440px] mx-auto px-[100px] relative z-10">
          <div className="flex items-center">
            <div className="">
              <img src={about} alt="" className='' />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 border-2 border-cyan rounded-sm"></div>
                <span className="text-cyan text-[20px] font-salsa capitalize">About Us</span>
              </div>
              <h2 className="text-[48px] font-bold text-gray-text mb-6">
                <span className="text-cyan">About Us</span> – Who We Are and What We Stand For
              </h2>
              <p className="text-[16px] text-gray-dark leading-[24px] font-salsa capitalize mb-8">
                We are a forward-thinking company committed to reimagining the future of education. By combining innovative technology, creative design, and strong teacher support, we aim to make every classroom experience more interactive, enjoyable, and impactful.
              </p>

              <div className="grid grid-rows-2 gap-6 w-full">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { title: "Who We Are", description: "An innovative team passionate about education and technology.", img: we },
                    { title: "Our Approach", description: "Simple, practical, and aligned with modern classrooms.", img: approach },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-2  rounded-xl p-2">
                      <img src={item.img} alt="" className='w-[65px] h-[68px]'/>
                      <div className="mb-4 flex flex-col justify-center"> 
                        <h3 className="text-[20px] font-[500] text-dark-blue mb-2 font-salsa ">{item.title}</h3>
                        <p className="text-[16px] text-[#70747f] leading-[24px] font-salsa">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { title: "What We Do", description: "We create lesson guides interactive games, and AI tools.", img: what },
                    { title: "Our Promise", description: "To support teachers and inspire students every step of the way.", img: promise },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-2  rounded-xl p-2">
                      <img src={item.img} alt="" className='w-[65px] h-[68px]'/>
                      <div className="mb-4 flex flex-col justify-center"> 
                        <h3 className="text-[20px] font-[500] text-dark-blue mb-2 font-salsa ">{item.title}</h3>
                        <p className="text-[16px] text-[#70747f] leading-[24px] font-salsa">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WhyChooseUs;
