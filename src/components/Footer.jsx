import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4 sm:mb-6">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg" 
                alt="Australian Flag" 
                className="w-6 h-4 sm:w-8 sm:h-6 mr-2 sm:mr-3"
              />
              <h3 className="text-xl sm:text-2xl font-bold">Study in Australia</h3>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Your trusted partner for international education in Australia. We help students from around the world achieve their academic and career dreams through expert guidance and personalized support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="text-xl sm:text-2xl">📘</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="text-xl sm:text-2xl">📷</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="text-xl sm:text-2xl">🐦</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="text-xl sm:text-2xl">💼</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  Popular Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  Top Universities
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  Student Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  Scholarship Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  Visa Information
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  Cost Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Us</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <span className="text-yellow-400 mr-2 sm:mr-3 mt-1">📍</span>
                <div>
                  <p className="text-gray-300 text-sm sm:text-base">Sydney, Australia</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Main Office</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-400 mr-2 sm:mr-3 mt-1">📧</span>
                <div>
                  <p className="text-gray-300 text-sm sm:text-base">info@studyaustralia.com</p>
                  <p className="text-gray-400 text-xs sm:text-sm">General Inquiries</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-400 mr-2 sm:mr-3 mt-1">📞</span>
                <div>
                  <p className="text-gray-300 text-sm sm:text-base">+61 2 1234 5678</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Mon-Fri 9AM-6PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-400 mr-2 sm:mr-3 mt-1">💬</span>
                <div>
                  <p className="text-gray-300 text-sm sm:text-base">WhatsApp Support</p>
                  <p className="text-gray-400 text-xs sm:text-sm">24/7 Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
              © {currentYear} Study in Australia. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-gray-500 text-xs leading-relaxed max-w-4xl mx-auto px-2">
              Disclaimer: This website provides general information about studying in Australia. We are not affiliated with the Australian government or any specific university. For official information, please visit the Department of Home Affairs website. Our services include educational counseling and application assistance. We do not guarantee visa approval or university admission.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 