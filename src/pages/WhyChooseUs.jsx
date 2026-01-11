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
      <section className="relative pt-24 md:pt-32 lg:pt-[180px] pb-16 md:pb-24 lg:pb-32 overflow-hidden min-h-auto md:min-h-[700px] lg:min-h-[901px] bg-gradient-to-br from-blue-50 via-blue-100 to-white">

        <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[100px] relative z-10">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 items-center pt-6 md:pt-12">
            <div className="flex-1 w-full order-2 lg:order-1">
              <img src={head} alt="" className='w-full h-full' />
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 border-2 border-cyan rounded-sm"></div>
                <span className="text-cyan text-base md:text-lg lg:text-[20px] font-salsa capitalize">why choose us</span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-[48px] font-bold text-gray-text leading-tight md:leading-[50px] lg:leading-[70px] mb-4 md:mb-6">
                Teaching Reimagined for <span className="text-cyan">the Modern Classroom</span>
              </h1>
              <p className="text-sm md:text-base text-gray-dark leading-relaxed md:leading-[24px] font-salsa capitalize mb-6 md:mb-8">
                We bring together interactive guides, fun and educational games, and smart AI support — all in one platform designed to transform teaching. Our approach helps teachers save valuable preparation time, deliver lessons with confidence, and keep students actively engaged from start to finish. By combining clear instructions, playful practice, and intelligent assistance.
              </p>
              <div className='pt-4 md:pt-6 lg:pt-10'>
                <div className='flex items-center gap-2'>
                  <img src={check}></img>
                  <h2 className="text-lg md:text-xl font-semibold">Our Mission</h2>
                </div>
                <p className="pl-6 md:pl-8 lg:pl-10 pt-2 text-sm md:text-base text-gray-dark leading-relaxed md:leading-[24px] font-salsa">To empower teachers with simple, innovative tools that save time, spark creativity, and ensure every student has the chance to succeed.</p>
              </div>
              <div className='pt-4 md:pt-5'>
                <div className='flex items-center gap-2'>
                  <img src={check}></img>
                  <h2 className="text-lg md:text-xl font-semibold">Our Vision</h2>
                </div>
                <p className="pl-6 md:pl-8 lg:pl-10 pt-2 text-sm md:text-base text-gray-dark leading-relaxed md:leading-[24px] font-salsa">To create a future where learning is interactive, inspiring, and accessible to every classroom around the world.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='overflow-hidden mb-[-80px] md:mb-[-120px] lg:mb-[-180px] z-50 bg-cover bg-no-repeat'
          style={{ backgroundImage: `url(${cloud})` }}>
          <div className="flex justify-center md:gap-6 w-full max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[100px] mb-8 md:mb-12 lg:mb-16 mt-16 md:mt-24 lg:mt-[150px]">
            {[["ml-[-50px]", "mb-[20px]", "Objectives"], ["ml-[-50px]", "mb-[0px]", "Objectives"], ["ml-[-50px]", "mb-[20px]", "Objectives"], ["ml-[-50px]", "mb-[0px]", "Objectives"]].map((item, idx) => (
              <ObjCards key={idx} item={item} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseU />

      {/* About Us Section */}
      <section className="relative py-12 md:py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>

        <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[100px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-auto order-2 lg:order-1">
              <img src={about} alt="" className='w-full h-auto max-w-md mx-auto lg:mx-0' />
            </div>

            <div className="flex-1 order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 border-2 border-cyan rounded-sm"></div>
                <span className="text-cyan text-base md:text-lg lg:text-[20px] font-salsa capitalize">About Us</span>
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-[48px] font-bold text-gray-text mb-4 md:mb-6">
                <span className="text-cyan">About Us</span> – Who We Are and What We Stand For
              </h2>
              <p className="text-sm md:text-base text-gray-dark leading-relaxed md:leading-[24px] font-salsa capitalize mb-6 md:mb-8">
                We are a forward-thinking company committed to reimagining the future of education. By combining innovative technology, creative design, and strong teacher support, we aim to make every classroom experience more interactive, enjoyable, and impactful.
              </p>

              <div className="grid grid-rows-1 md:grid-rows-2 gap-4 md:gap-6 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {[
                    { title: "Who We Are", description: "An innovative team passionate about education and technology.", img: we },
                    { title: "Our Approach", description: "Simple, practical, and aligned with modern classrooms.", img: approach },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-2 rounded-xl p-2">
                      <img src={item.img} alt="" className='w-12 h-12 md:w-14 md:h-14 lg:w-[65px] lg:h-[68px]' />
                      <div className="mb-4 flex flex-col justify-center">
                        <h3 className="text-base md:text-lg lg:text-[20px] font-[500] text-dark-blue mb-2 font-salsa">{item.title}</h3>
                        <p className="text-sm md:text-base text-[#70747f] leading-relaxed md:leading-[24px] font-salsa">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {[
                    { title: "What We Do", description: "We create lesson guides interactive games, and AI tools.", img: what },
                    { title: "Our Promise", description: "To support teachers and inspire students every step of the way.", img: promise },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-2 rounded-xl p-2">
                      <img src={item.img} alt="" className='w-12 h-12 md:w-14 md:h-14 lg:w-[65px] lg:h-[68px]' />
                      <div className="mb-4 flex flex-col justify-center">
                        <h3 className="text-base md:text-lg lg:text-[20px] font-[500] text-dark-blue mb-2 font-salsa">{item.title}</h3>
                        <p className="text-sm md:text-base text-[#70747f] leading-relaxed md:leading-[24px] font-salsa">{item.description}</p>
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
