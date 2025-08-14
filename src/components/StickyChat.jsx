import React, { useState } from 'react';

const StickyChat = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+61412345678';
    const message = 'Hi! I\'m interested in studying in Australia. Can you help me with more information?';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Sticky WhatsApp Button */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <div className="relative">
          {/* Expanded Chat Options */}
          {isExpanded && (
            <div className="absolute bottom-16 right-0 mb-4 bg-white rounded-2xl shadow-xl p-4 min-w-56 sm:min-w-64 max-w-80">
              <div className="text-center mb-4">
                <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Chat with a Counselor</h4>
                <p className="text-xs sm:text-sm text-gray-600">Get instant help with your questions</p>
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors duration-300 flex items-center justify-center text-xs sm:text-sm"
                >
                  <span className="mr-2">💬</span>
                  WhatsApp Chat
                </button>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors duration-300 flex items-center justify-center text-xs sm:text-sm">
                  <span className="mr-2">📞</span>
                  Call Now
                </button>
                
                <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors duration-300 flex items-center justify-center text-xs sm:text-sm">
                  <span className="mr-2">📧</span>
                  Email Us
                </button>
              </div>
              
              <div className="mt-3 sm:mt-4 text-center">
                <p className="text-xs text-gray-500">
                  Available 24/7 for international students
                </p>
              </div>
            </div>
          )}

          {/* Main Chat Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-lg sm:text-2xl"
          >
            💬
          </button>
        </div>
      </div>

      {/* Backdrop for mobile */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  );
};

export default StickyChat; 