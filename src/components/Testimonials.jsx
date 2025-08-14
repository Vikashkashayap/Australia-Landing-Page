import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      country: 'China',
      course: 'MBA',
      university: 'University of Melbourne',
      quote: 'Australia gave me the global exposure and career I dreamed of. The multicultural environment and world-class education opened doors I never thought possible.',
      avatar: '👩‍🎓',
      rating: 5
    },
    {
      id: 2,
      name: 'Raj Patel',
      country: 'India',
      course: 'Computer Science',
      university: 'University of Sydney',
      quote: 'The quality of education and the opportunities for international students are incredible. I landed my dream job at a top tech company within 6 months of graduation.',
      avatar: '👨‍💻',
      rating: 5
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      country: 'Brazil',
      course: 'Nursing',
      university: 'Monash University',
      quote: 'Studying nursing in Australia was the best decision I ever made. The practical training and supportive environment helped me become a confident healthcare professional.',
      avatar: '👩‍⚕️',
      rating: 5
    },
    {
      id: 4,
      name: 'Ahmed Hassan',
      country: 'Egypt',
      course: 'Engineering',
      university: 'University of Queensland',
      quote: 'The engineering program exceeded my expectations. The facilities, professors, and industry connections provided me with skills that are highly valued globally.',
      avatar: '👨‍🔧',
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-16 sm:py-20 bg-gray-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-2">
            Student Success Stories
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Hear from international students who achieved their dreams in Australia
          </p>
        </div>

        <div className="relative w-full">
          <div className="overflow-hidden w-full">
            <div 
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg max-w-4xl mx-auto">
                    <div className="text-center mb-6 sm:mb-8">
                      <div className="text-4xl sm:text-6xl mb-4">{testimonial.avatar}</div>
                      <div className="flex justify-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-lg sm:text-xl">⭐</span>
                        ))}
                      </div>
                    </div>

                    <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-700 italic text-center mb-6 sm:mb-8 leading-relaxed px-2">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="text-center">
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 mb-1 text-sm sm:text-base">
                        {testimonial.course} • {testimonial.university}
                      </p>
                      <p className="text-blue-600 font-semibold text-sm sm:text-base">
                        From {testimonial.country}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {testimonials.map((_, index) => (
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

        <div className="mt-12 sm:mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">10,000+</div>
              <p className="text-gray-600 text-sm sm:text-base">Students Placed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">98%</div>
              <p className="text-gray-600 text-sm sm:text-base">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-2">40+</div>
              <p className="text-gray-600 text-sm sm:text-base">Partner Universities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 