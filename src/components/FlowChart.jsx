import React from 'react';

const FlowChart = () => {
  const steps = [
    {
      id: 1,
      title: "Application Submission",
      description: "Complete and submit the online application form.",
      color: "bg-blue-500",
      borderColor: "border-blue-500"
    },
    {
      id: 2,
      title: "Document Upload",
      description: "Upload necessary documents like IELTS and acceptance proof.",
      color: "bg-green-500",
      borderColor: "border-green-500"
    },
    {
      id: 3,
      title: "Personal Statement Submission",
      description: "Write and submit a personal statement.",
      color: "bg-lime-500",
      borderColor: "border-lime-500"
    },
    {
      id: 4,
      title: "Selection Process",
      description: "Applications are reviewed by a panel.",
      color: "bg-yellow-500",
      borderColor: "border-yellow-500"
    },
    {
      id: 5,
      title: "Award Notification",
      description: "Successful candidates receive an email notification.",
      color: "bg-orange-500",
      borderColor: "border-orange-500"
    },
    {
      id: 6,
      title: "Acceptance and Fund Disbursement",
      description: "Accept the award and funds are disbursed.",
      color: "bg-red-500",
      borderColor: "border-red-500"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Global Study Awards Application Process
          </h2>
          <p className="text-xl text-gray-600">
            Follow these steps to complete your study abroad application
          </p>
        </div>

        <div className="relative">
          {/* Main flow line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Step circle */}
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-white font-bold text-lg mb-4 relative z-10 border-4 border-white shadow-lg`}>
                    {step.id}
                  </div>
                  
                  {/* Arrow connector for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2 z-0">
                      <div className={`w-full h-full ${step.color.replace('bg-', 'bg-')} opacity-60`}></div>
                    </div>
                  )}
                  
                  {/* Step content */}
                  <div className="text-center max-w-xs">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile arrows */}
          <div className="lg:hidden mt-8">
            <div className="flex justify-center items-center space-x-4">
              {steps.slice(0, -1).map((step, index) => (
                <div key={`arrow-${index}`} className="flex items-center">
                  <div className={`w-8 h-0.5 ${step.color} rounded-full`}></div>
                  <div className={`w-3 h-3 ${step.color} transform rotate-45 ml-1`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional info section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Our expert team is here to guide you through every step of the application process. 
              Get personalized support and increase your chances of success.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
              Start Your Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowChart;
