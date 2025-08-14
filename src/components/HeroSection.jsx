import React from 'react';
import heroImage from '../assets/image1.png';
import HeroForm from './HeroForm';

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('lead-capture').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden mt-16 w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: 'center bottom',
            backgroundSize: 'cover'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
          {/* Left Side - Hero Content */}
          <div className="text-white text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg" 
                alt="Australian Flag" 
                className="w-8 h-6 sm:w-12 sm:h-8 mr-2 sm:mr-4 rounded shadow-lg"
              />
              <span className="text-base sm:text-lg font-semibold">Australia</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in px-2 lg:px-0">
              Study in Australia
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-yellow-300 mt-2">
                Your Future Starts Here
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0">
              Top-ranked universities, global careers, and life-changing experiences
            </p>

            <button 
              onClick={scrollToForm}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Free Counseling
            </button>
          </div>

          {/* Right Side - Form */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg">
              <HeroForm />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 