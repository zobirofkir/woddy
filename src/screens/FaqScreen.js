import React, { useState } from 'react';

const FaqScreen = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqs = [
    {
      question: 'What is your return policy?',
      answer: 'You can return any item within 30 days of purchase.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship internationally with applicable fees.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking number via email.'
    },
    {
      question: 'Can I customize my furniture order?',
      answer: 'Yes, we offer customizable options for select furniture items.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit cards, PayPal, and bank transfers.'
    },
  ];

  const toggleQuestion = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null); 
    } else {
      setActiveQuestion(index);
    }
  };

  return (
    <div className='flex flex-col justify-center px-5 md:px-20 w-full h-screen'>
      <h1 className='text-xl md:text-3xl font-bold text-gray-900 mb-6 whitespace-nowrap'>Frequently Asked Questions</h1>
      <div className='space-y-4'>
        {faqs.map((faq, index) => (
          <div key={index} className='border-b pb-4'>
            <div
              onClick={() => toggleQuestion(index)}
              className='cursor-pointer flex justify-between items-center'
            >
              <h2 className='text-lg font-semibold'>{faq.question}</h2>
              <span>{activeQuestion === index ? '-' : '+'}</span>
            </div>
            <div 
              className={`transition-all duration-500 ease-in-out overflow-hidden ${activeQuestion === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
              style={{ transitionProperty: 'max-height, opacity' }}
            >
              <p className='mt-2 text-gray-600'>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqScreen;
