import React, { useState, useEffect } from 'react';

const TopUniversities = () => {
  const universities = [
    {
      id: 1,
      name: 'University of Melbourne',
      logo: '🏛️',
      ranking: 'World Rank: #14',
      location: 'Melbourne, Victoria',
      students: '50,000+ students'
    },
    {
      id: 2,
      name: 'Australian National University',
      logo: '🎓',
      ranking: 'World Rank: #27',
      location: 'Canberra, ACT',
      students: '20,000+ students'
    },
    {
      id: 3,
      name: 'University of Sydney',
      logo: '🏛️',
      ranking: 'World Rank: #28',
      location: 'Sydney, NSW',
      students: '60,000+ students'
    },
    {
      id: 4,
      name: 'Monash University',
      logo: '🎓',
      ranking: 'World Rank: #42',
      location: 'Melbourne, Victoria',
      students: '80,000+ students'
    },
    {
      id: 5,
      name: 'University of Queensland',
      logo: '🏛️',
      ranking: 'World Rank: #43',
      location: 'Brisbane, Queensland',
      students: '55,000+ students'
    },
    {
      id: 6,
      name: 'University of New South Wales',
      logo: '🎓',
      ranking: 'World Rank: #45',
      location: 'Sydney, NSW',
      students: '60,000+ students'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === universities.length - 3 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [universities.length]);

  return (
    <section className="py-16 sm:py-20 bg-gray-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-2">
            Top Universities in Australia
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Partner with world-renowned institutions for your academic success
          </p>
        </div>

        <div className="relative overflow-hidden w-full">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}>
            {universities.map((university) => (
              <div key={university.id} className="w-full md:w-1/3 lg:w-1/3 px-2 sm:px-4 flex-shrink-0">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="text-center">
                    <div className="text-4xl sm:text-6xl mb-4">{university.logo}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      {university.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-2 text-sm sm:text-base">
                      {university.ranking}
                    </p>
                    <p className="text-gray-600 mb-2 text-sm sm:text-base">
                      {university.location}
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {university.students}
                    </p>
                    <button className="mt-4 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300 text-sm sm:text-base">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {[...Array(Math.ceil(universities.length / 3))].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-blue-900' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 bg-white rounded-full px-4 sm:px-6 py-3 shadow-lg">
            <span className="text-gray-600 text-sm sm:text-base">Partner Universities:</span>
            <span className="text-blue-900 font-bold text-sm sm:text-base">40+ Universities</span>
            <span className="text-gray-400 hidden sm:inline">|</span>
            <span className="text-green-600 font-semibold text-sm sm:text-base">100% Success Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopUniversities; 