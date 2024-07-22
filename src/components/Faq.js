// FAQ.js
import React, { useState } from 'react';

const FAQ = () => {
  // State to track the currently opened question
  const [openIndex, setOpenIndex] = useState(null);

  // Questions and answers
  const faqs = [
    { question: "What is the question?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "What is the question here?", answer: "Maecenas egestas feugiat maximus. Aenean et nulla ornare, blandit ante sed, porttitor nisi. Nulla a tempor tellus." },
    { question: "What is the question also here?", answer: "Suspendisse a tortor pharetra, egestas enim sit amet, semper libero. Mauris volutpat faucibus est sed luctus. Vivamus condimentum velit in efficitur ullamcorper." },
    { question: "What is the question here also please?", answer: "Maecenas egestas dui eu massa imperdiet, non mollis dolor maximus. Mauris id consectetur magna. Integer dictum lobortis turpis quis semper." }
  ];

  // Toggle the visibility of the answer
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq_container">
        <div className="faq_content">
        <h2 className="faq_title"><span className='transparent-outline'>FAQs</span></h2>
        {faqs.map((faq, index) => (
        <div key={index} className="faq_item">
          <div className="faq_question" onClick={() => handleToggle(index)}>
            {faq.question}
          </div>
          <div 
            className={`faq_answer ${openIndex === index ? 'open' : ''}`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div> 
        </div>
      
  );
};

export default FAQ;
