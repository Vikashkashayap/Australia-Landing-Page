import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How much does it cost to study in Australia?',
      answer: 'Tuition fees vary by course and university. Generally, undergraduate programs cost AUD 20,000-45,000 per year, while postgraduate programs range from AUD 22,000-50,000 per year. Living expenses are approximately AUD 20,000-25,000 per year.'
    },
    {
      id: 2,
      question: 'Can I work while studying?',
      answer: 'Yes! International students can work up to 40 hours per fortnight during the academic year and unlimited hours during holidays. This helps cover living expenses and gain valuable work experience.'
    },
    {
      id: 3,
      question: 'What are the visa requirements?',
      answer: 'You need a Student Visa (Subclass 500) which requires proof of enrollment, sufficient funds, health insurance, and English proficiency. The visa allows you to stay for the duration of your course plus additional time.'
    },
    {
      id: 4,
      question: 'How long can I stay after graduation?',
      answer: 'You can apply for a Post-Study Work Visa (Subclass 485) which allows you to stay and work in Australia for 2-4 years depending on your qualification level and location of study.'
    },
    {
      id: 5,
      question: 'Do I need to take IELTS or TOEFL?',
      answer: 'Yes, most universities require proof of English proficiency. IELTS is widely accepted with a minimum score of 6.0-7.0 depending on the course. Some universities also accept TOEFL, PTE, or Cambridge English tests.'
    },
    {
      id: 6,
      question: 'Are scholarships available for international students?',
      answer: 'Yes! Many universities offer scholarships ranging from 10% to 50% of tuition fees. There are also government scholarships like Australia Awards and university-specific merit scholarships available.'
    },
    {
      id: 7,
      question: 'What is the application process?',
      answer: 'The process involves: 1) Choosing your course and university, 2) Meeting entry requirements, 3) Submitting application with required documents, 4) Receiving offer letter, 5) Accepting and paying deposit, 6) Applying for student visa.'
    },
    {
      id: 8,
      question: 'Is Australia safe for international students?',
      answer: 'Australia is one of the safest countries in the world with low crime rates, excellent healthcare, and strong support systems for international students. All universities have dedicated international student support services.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-white w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-2">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Get answers to the most common questions about studying in Australia
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-300 flex justify-between items-center"
              >
                <span className="font-semibold text-gray-900 text-sm sm:text-lg pr-2">
                  {faq.question}
                </span>
                <span className={`text-blue-600 text-xl sm:text-2xl transition-transform duration-300 flex-shrink-0 ${
                  openIndex === index ? 'rotate-45' : ''
                }`}>
                  {openIndex === index ? '×' : '+'}
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-4 sm:px-6 py-3 sm:py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <div className="bg-blue-50 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Our expert counselors are here to help you with any specific questions about studying in Australia
            </p>
            <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 text-sm sm:text-base">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 