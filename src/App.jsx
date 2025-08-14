import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PopularCourses from './components/PopularCourses';
import WhyStudyAustralia from './components/WhyStudyAustralia';
import TopUniversities from './components/TopUniversities';
import LeadCapture from './components/LeadCapture';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyChat from './components/StickyChat';
import FlowChart from './components/FlowChart';
import RegistrationPopUp from './components/RegistrationPopUp';
// import ExitIntentPopup from './components/ExitIntentPopup';

function App() {
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !showExitPopup) {
        setShowExitPopup(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showExitPopup]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <Navbar />
      <HeroSection />
      <PopularCourses />
      <WhyStudyAustralia />
      <FlowChart />
      <TopUniversities />
      <LeadCapture />
      <Testimonials />
      <FAQ />
      <Footer />
      <StickyChat />
      <RegistrationPopUp />
    </div>
  );
}

export default App;
