"use client";
import React, { useState } from 'react';
import "@/app/styles/scss/components/_accordion.scss"

const AccordionItem = ({ faq, index, toggleFAQ }) => {
  return (
    <div className="accordion-item mb-2">
      <div className={`accordion-title ${faq.open ? 'open' : ''}`} onClick={() => toggleFAQ(index)}>
        <span className='d-block'>{faq.question}</span>
      </div>
      <div className={`accordion-content ${faq.open ? 'open' : ''}`}>
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

const Accordion = ({ faqs }) => {
  const [faqList, setFaqList] = useState(faqs);

  const toggleFAQ = index => {
    setFaqList(faqList.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false; // Close other FAQ items
      }
      return faq;
    }));
  };

  return (
    <div className="accordion">
      {faqList.map((faq, index) => (
        <AccordionItem key={index} faq={faq} index={index} toggleFAQ={toggleFAQ} />
      ))}
    </div>
  );
};

export default Accordion;
