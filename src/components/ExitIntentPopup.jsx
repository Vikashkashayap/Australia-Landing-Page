// import React from 'react';

// const ExitIntentPopup = ({ onClose }) => {
//   const handleDownload = () => {
//     // Simulate PDF download
//     const link = document.createElement('a');
//     link.href = '#';
//     link.download = 'Australian-University-Guide.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-4 sm:p-8 relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-2 sm:top-4 right-2 sm:right-4 text-gray-400 hover:text-gray-600 text-xl sm:text-2xl"
//         >
//           ×
//         </button>

//         {/* Content */}
//         <div className="text-center">
//           <div className="text-4xl sm:text-6xl mb-4">📚</div>
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
//             Wait! Don't Miss Out
//           </h2>
//           <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
//             Get your FREE Australian University Guide PDF with:
//           </p>
          
//           <div className="text-left mb-4 sm:mb-6 space-y-2">
//             <div className="flex items-center">
//               <span className="text-green-500 mr-2 sm:mr-3">✅</span>
//               <span className="text-gray-700 text-sm sm:text-base">Complete university rankings</span>
//             </div>
//             <div className="flex items-center">
//               <span className="text-green-500 mr-2 sm:mr-3">✅</span>
//               <span className="text-gray-700 text-sm sm:text-base">Course fee breakdowns</span>
//             </div>
//             <div className="flex items-center">
//               <span className="text-green-500 mr-2 sm:mr-3">✅</span>
//               <span className="text-gray-700 text-sm sm:text-base">Visa application checklist</span>
//             </div>
//             <div className="flex items-center">
//               <span className="text-green-500 mr-2 sm:mr-3">✅</span>
//               <span className="text-gray-700 text-sm sm:text-base">Scholarship opportunities</span>
//             </div>
//             <div className="flex items-center">
//               <span className="text-green-500 mr-2 sm:mr-3">✅</span>
//               <span className="text-gray-700 text-sm sm:text-base">Student life guide</span>
//             </div>
//           </div>

//           <div className="bg-yellow-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
//             <p className="text-yellow-800 font-semibold text-sm sm:text-base">
//               🎁 Limited Time: Get 50% off consultation fee when you download!
//             </p>
//           </div>

//           <div className="space-y-2 sm:space-y-3">
//             <button
//               onClick={handleDownload}
//               className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-colors duration-300 text-sm sm:text-base"
//             >
//               Download Free Guide
//             </button>
//             <button
//               onClick={onClose}
//               className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-300 text-sm sm:text-base"
//             >
//               No thanks, I'll pass
//             </button>
//           </div>

//           <p className="text-xs text-gray-500 mt-3 sm:mt-4">
//             By downloading, you agree to receive updates about studying in Australia
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExitIntentPopup; 