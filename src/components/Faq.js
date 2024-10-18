// FAQ.js
import React, { useState } from 'react';

const FAQ = () => {
  // State to track the currently opened question
  const [openIndex, setOpenIndex] = useState(null);

  // Questions and answers
  const faqs = [
    { question: "How can this program help me lose weight when I've tried so many diets without success?", answer: "Our personalised approach includes a health and lifestyle audit, tailored nutrition plans, and an intuitive eating system. With 1:1 support and weekly check-ins, we ensure lasting weight loss without obsessing over calories." },
    { question: "I'm constantly dealing with injuries and niggles that disrupt my training. How can TWI Online help me train pain-free?", answer: "We address injury causes with personalised training programs and expert recovery guidance. Our comprehensive audit and direct coach communication help you train effectively and pain-free." },
    { question: "I lack the structure and accountability to maintain a consistent fitness routine. How does TWI Online address this?", answer: "We provide structured, personalised coaching with weekly check-ins, an app for your programs, and regular coaching calls. Our system keeps you focused, motivated, and accountable." },
    { question: "What makes TWI Online different from other online coaching programs?", answer: "TWI Online offers a fully bespoke 1-2-1 coaching experience with a focus on autonomy and lifelong habits. We provide comprehensive support and a community, ensuring personalised attention and sustainable results." },
    { question: "How will Train With Intent help me optimise my health and longevity?", answer: "We educate you on training, nutrition, and lifestyle factors. Our personalised coaching helps you move efficiently and pain-free, promoting long-term health and performance excellence." }
  ];

  // Toggle the visibility of the answer
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs">
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
        </section>
      
  );
};

export default FAQ;
