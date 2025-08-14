import React, { useState } from 'react';

const LeadCapture = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredCourse: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const courses = [
    'MBA',
    'Nursing',
    'Cybersecurity',
    'Hospitality & Tourism',
    'MS in Data Science',
    'Public Health',
    'Engineering',
    'Computer Science',
    'Business Administration',
    'Other'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredCourse: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="lead-capture" className="py-16 sm:py-20 bg-gradient-to-r from-green-500 to-green-600 w-full overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center w-full">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="text-4xl sm:text-6xl mb-4">✅</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Thank You!
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              Your application has been submitted successfully. Our expert counselor will contact you within 24 hours.
            </p>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-green-800 font-semibold text-sm sm:text-base">
                📧 Check your email for confirmation and next steps
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-capture" className="py-16 sm:py-20 bg-gradient-to-r from-blue-900 to-blue-700 w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-2">
            Get Expert Guidance
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto px-4">
            Book a free counseling call with our Australian education experts
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Preferred Course
                </label>
                <select
                  name="preferredCourse"
                  value={formData.preferredCourse}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                >
                  <option value="">Select a course</option>
                  {courses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
           

            <button
              type="submit"
              disabled={isSubmitting || !formData.name || !formData.email}
              className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 text-black font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors duration-300 text-sm sm:text-base"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Now'}
            </button>
          </form>
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <p className="text-blue-100 text-xs sm:text-sm">
            🔒 Your information is secure and will only be used to provide you with the best guidance
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture; 