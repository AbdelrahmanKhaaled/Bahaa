import React from 'react';
import HeroSection from '../components/home/HeroSection';
import SearchForm from '../components/home/SearchForm';
import WhyChooseU from '../components/home/WhyChooseUs';
import HowItWorks from '../components/home/HowItWorks';
import AISupporter from '../components/home/AISupporter';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SearchForm />
      <WhyChooseU />
      <HowItWorks />
      <AISupporter />
    </div>
  );
};

export default Home;
