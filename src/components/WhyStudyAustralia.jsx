import React from 'react';

const WhyStudyAustralia = () => {
  const benefits = [
    {
      id: 1,
      icon: '🏆',
      title: 'Globally Ranked Universities',
      description: '7 Australian universities in the world\'s top 100, ensuring quality education recognized worldwide.',
      color: 'bg-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      id: 2,
      icon: '📋',
      title: '2-4 Years Post-Study Work Visa',
      description: 'Stay and work in Australia after graduation with generous post-study work opportunities.',
      color: 'bg-purple-100',
      borderColor: 'border-purple-200'
    },
    {
      id: 3,
      icon: '💼',
      title: 'High-Demand Job Sectors',
      description: 'Healthcare, IT, Engineering, and Business sectors actively seeking international graduates.',
      color: 'bg-green-100',
      borderColor: 'border-green-200'
    },
    {
      id: 4,
      icon: '🌏',
      title: 'Multicultural & Safe Environment',
      description: 'Diverse, welcoming communities with excellent safety standards and quality of life.',
      color: 'bg-red-100',
      borderColor: 'border-red-200'
    },
    {
      id: 5,
      icon: '🎁',
      title: 'Scholarships up to 50%',
      description: 'Generous scholarship programs available for international students across all universities.',
      color: 'bg-yellow-100',
      borderColor: 'border-yellow-200'
    },
    {
      id: 6,
      icon: '🌅',
      title: 'Amazing Lifestyle',
      description: 'Beautiful beaches, vibrant cities, and outdoor adventures while you study and grow.',
      color: 'bg-indigo-100',
      borderColor: 'border-indigo-200'
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-blue-50 w-full overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-200 mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-48 h-48 rounded-full bg-yellow-200 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full bg-green-200 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center mb-4 px-4 py-2 bg-blue-100 rounded-full shadow-sm">
            <span className="text-blue-800 font-medium text-sm sm:text-base tracking-wider">
              WORLD-CLASS EDUCATION DESTINATION
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 px-2 leading-tight">
            Why Choose <span className="text-blue-600">Australia</span>?
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
            Discover why over 700,000 international students choose Australia each year
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className={`group relative ${benefit.color} rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border ${benefit.borderColor} w-full overflow-hidden`}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/30 rounded-bl-full"></div>
              
              <div className="relative z-10 flex flex-col items-center h-full">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed text-sm sm:text-base flex-grow">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">#3</div>
            <div className="text-gray-700 text-sm sm:text-base mt-1">Most Popular Study Destination</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">95%</div>
            <div className="text-gray-700 text-sm sm:text-base mt-1">Student Satisfaction Rate</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">$80K+</div>
            <div className="text-gray-700 text-sm sm:text-base mt-1">Average Graduate Salary</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">700K+</div>
            <div className="text-gray-700 text-sm sm:text-base mt-1">International Students</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 sm:p-10 text-white overflow-hidden shadow-xl">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/10"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Begin Your Australian Adventure?
              </h3>
              <p className="text-lg sm:text-xl mb-6 opacity-90 max-w-2xl mx-auto">
                Our education experts will guide you through every step of the process
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                  Get Free Consultation
                </button>
                <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Explore Universities
                </button>
              </div>
              <p className="text-sm text-white/80 mt-4">
                No fees. No obligation. Just expert advice.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default WhyStudyAustralia;