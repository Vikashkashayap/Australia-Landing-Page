import React, { useState, useEffect } from 'react';
// import RegistrationForm from './RegistrationForm';
import HeroForm from './HeroForm';

const PopupRegistrationForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    
    if (hasVisited) {
      setIsFirstVisit(false);
    } else {
      // Mark as visited for the first time
      localStorage.setItem('hasVisitedBefore', 'true');
    }

    // Set timeout based on visit count
    const timeout = isFirstVisit ? 2000 : 4000;
    
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, timeout);

    return () => clearTimeout(timer);
  }, [isFirstVisit]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-fade-in">
      <div className="relative">
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-10 border border-gray-200"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="animate-slide-in">
          <HeroForm />
        </div>
      </div>
    </div>
  );
};

export default PopupRegistrationForm;
