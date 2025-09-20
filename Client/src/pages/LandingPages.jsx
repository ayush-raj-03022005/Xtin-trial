import React from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ToolsSection from '../components/ToolsSection';
import StatsBanner from '../components/StatsBanner';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Hero />
      <ToolsSection />
      <StatsBanner />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
