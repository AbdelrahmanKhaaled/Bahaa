import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/baha-logo-new.png';
import signinIllustration from '../assets/Illustration.png';
import clouds from '../assets/clouds.png';
import eyeIcon from '../assets/icon.png';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="relative flex flex-col lg:flex-row items-center justify-evenly min-h-screen w-full"
      style={{
        backgroundImage: "linear-gradient(90deg, rgba(35, 62, 121, 0.1) 0%, rgba(35, 62, 121, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)"
      }}
    >
      {/* Left Side - Illustration and Branding */}
      <div className="lg:flex flex-col items-center justify-top w-full lg:w-1/2 h-[100vh]">
        <div className="w-[70%] flex flex-col gap-8 p-10">
          <div className="flex flex-col  gap-4">
            <h2 className="text-[39px] font-salsa text-cyan tracking-[0.195px] leading-[1.2]">
              bahaa project
            </h2>
            <p className="text-[16px] text-[#92929d] font-salsa tracking-[0.08px] leading-[1.2]">
              We are dedicated to transforming education by blending technology
            </p>
          </div>
          <div className="">
            <img
              src={signinIllustration}
              alt="Sign In Illustration"
              className="object-cover"
            />
          </div>
          <div className="absolute left-0 bottom-0 ">
            <img
              src={clouds}
              alt="Sign In Illustration"
              className="object-cover"
            />
          </div>
        </div>

      </div>

      {/* Right Side - Sign In Form */}
      <div className="bg-white min-h-screen lg:h-[100vh] justify-center px-4 md:px-12 lg:px-[100px] w-full lg:w-1/2 flex flex-col gap-6 md:gap-8 items-center py-12 lg:py-0 z-10" >
        {/* Logo */}
        <div className="h-24 w-24 md:h-32 md:w-32 lg:h-[170px] lg:w-[170px] relative">
          <img
            src={logo}
            alt="Bahaa Project Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Form Container */}
        <div className="p-4 md:p-6 lg:p-[40px] flex flex-col gap-8 md:gap-12 w-full max-w-md items-start">
          <div className="flex flex-col gap-6 md:gap-8 w-full items-start">
            {/* Heading */}
            <h1 className="text-2xl md:text-[28px] lg:text-[31px] font-salsa text-dark-blue tracking-[0.155px] leading-[1.2] w-full">
              Sign in to <span className="text-cyan">bahaa project</span>
            </h1>

            {/* Form Fields */}
            <div className="flex flex-col gap-5 md:gap-7 w-full items-end justify-center">
              <div className="flex flex-col gap-6 md:gap-8 w-full items-start">
                {/* Email Input */}
                <div className="flex flex-col gap-2 w-full items-start justify-center">
                  <label className="text-sm md:text-[16px] font-salsa text-[#11142d] tracking-[0.08px] leading-[1.2]">
                    Email
                  </label>
                  <div className="bg-[rgba(38,76,190,0.05)] rounded-[20px] md:rounded-[28px] p-3 md:p-4 w-full flex items-center">
                    <input
                      type="email"
                      placeholder="input your email in here"
                      className="flex-1 outline-none bg-transparent text-sm md:text-[16px] font-salsa text-[#999] placeholder-[#999] tracking-[0.08px] leading-[1.2]"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="flex flex-col gap-2 w-full items-start justify-center">
                  <label className="text-sm md:text-[16px] font-salsa text-[#11142d] tracking-[0.08px] leading-[1.2]">
                    password
                  </label>
                  <div className="bg-[rgba(38,76,190,0.05)] rounded-[20px] md:rounded-[28px] p-3 md:p-4 w-full flex items-center gap-[10px]">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="input your password in here"
                      className="flex-1 outline-none bg-transparent text-sm md:text-[16px] font-salsa text-[#999] placeholder-[#999] tracking-[0.08px] leading-[1.2]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center flex-shrink-0"
                    >
                      <img
                        src={eyeIcon}
                        alt="Toggle password visibility"
                        className="w-full h-full object-contain"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Forgot Password Link */}
              <a
                href="#"
                className="text-sm md:text-[16px] font-salsa text-cyan tracking-[0.08px] leading-[1.2] text-right w-full"
              >
                Forgot passwod?
              </a>
            </div>
          </div>

          {/* Sign In Button */}
          <Link to="/" className="inline-block w-full">
            <button
              type="submit"
              className="bg-dark-blue text-white rounded-[28px] px-6 py-3 md:py-3.5 h-12 md:h-14 w-full flex items-center justify-center text-sm md:text-[16px] font-salsa tracking-[0.08px] leading-[1.2] hover:opacity-90 transition-opacity"
            >
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
