import React from 'react';

const PopularCourses = () => {
  const courses = [
    {
      id: 1,
      name: 'MBA',
      icon: '🎓',
      benefit: 'High salary potential, leadership roles, global opportunities',
      duration: '1-2 years',
      salary: '$80,000+'
    },
    {
      id: 2,
      name: 'Nursing',
      icon: '🏥',
      benefit: 'High demand, permanent residency pathway, rewarding career',
      duration: '3-4 years',
      salary: '$70,000+'
    },
    {
      id: 3,
      name: 'Cybersecurity',
      icon: '🔒',
      benefit: 'Growing field, high salaries, work from anywhere',
      duration: '2-3 years',
      salary: '$90,000+'
    },
    {
      id: 4,
      name: 'Hospitality & Tourism',
      icon: '🏨',
      benefit: 'Global industry, travel opportunities, diverse roles',
      duration: '2-3 years',
      salary: '$60,000+'
    },
    {
      id: 5,
      name: 'MS in Data Science',
      icon: '📊',
      benefit: 'AI/ML focus, high demand, excellent career prospects',
      duration: '1-2 years',
      salary: '$95,000+'
    },
    {
      id: 6,
      name: 'Public Health',
      icon: '🌍',
      benefit: 'Global impact, research opportunities, government roles',
      duration: '2-3 years',
      salary: '$75,000+'
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-blue-900 to-blue-700 w-full overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-yellow-400 mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-48 h-48 rounded-full bg-blue-300 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-32 h-32 rounded-full bg-white mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-yellow-300 font-medium text-sm sm:text-base tracking-wide">
              World-Class Education
            </span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 px-2 leading-tight">
            Top Courses in <span className="text-yellow-300">Australia</span>
          </h2>
          
          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto px-4">
            Launch your global career with internationally recognized qualifications
          </p>
          
          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-300">
              <div className="text-3xl font-bold text-yellow-300">6,000+</div>
              <div className="text-blue-100 text-sm">Courses Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-300">
              <div className="text-3xl font-bold text-yellow-300">95%</div>
              <div className="text-blue-100 text-sm">Graduate Employment</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-300">
              <div className="text-3xl font-bold text-yellow-300">50+</div>
              <div className="text-blue-100 text-sm">Top Universities</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-300">
              <div className="text-3xl font-bold text-yellow-300">$80K+</div>
              <div className="text-blue-100 text-sm">Average Salary</div>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group relative h-72 sm:h-80 cursor-pointer perspective-1000 w-full"
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute inset-0 bg-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col items-center justify-center backface-hidden border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
                  <div className="text-4xl sm:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {course.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 text-center">
                    {course.name}
                  </h3>
                  <p className="text-gray-600 text-center text-sm sm:text-base">
                    Duration: {course.duration}
                  </p>
                  <p className="text-blue-600 font-semibold mt-2 text-sm sm:text-base">
                    Starting Salary: {course.salary}
                  </p>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 bg-blue-900 text-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col items-center justify-center backface-hidden rotate-y-180 border-2 border-yellow-300 hover:border-yellow-400 transition-all duration-300">
                  <h4 className="text-lg sm:text-xl font-bold mb-4 text-yellow-300 text-center">
                    Why Choose {course.name}?
                  </h4>
                  <p className="text-center text-gray-200 leading-relaxed text-sm sm:text-base">
                    {course.benefit}
                  </p>
                  <div className="mt-6">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full transition-all duration-300 text-sm sm:text-base transform hover:scale-105 shadow-md hover:shadow-lg">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10 sm:mt-12">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All 6,000+ Courses
          </button>
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
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default PopularCourses;