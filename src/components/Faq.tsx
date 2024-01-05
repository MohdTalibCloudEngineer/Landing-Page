"use client";
import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div
        className="flex items-center justify-between bg-gray-200 p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <p className="text-base sm:text-lg font-semibold">{question}</p>
        <span
          className={`transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform`}
        >
          &#x2193;
        </span>
      </div>
      {isOpen && (
        <div className="bg-gray-200 p-4">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq: React.FC = () => {
  const faqData: FAQItemProps[] = [
    {
      question: "How will this session be conducted?",
      answer: "This will be conducted on zoom via video call.",
    },
    {
      question: "What if I have no business or sales experience?",
      answer: "My five-step, well-defined action steps will guide you through the process to start one.",
    },
    {
      question: "I do not have a business product or service.",
      answer: "Mention this to me at the beginning of our call and I may have a few ideas that could interest you."
    }
  ];

  return (
    <div className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto pt-10">
      <h1 className="text-2xl sm:text-3xl text-center font-black font-bold mb-8">Frequently Asked Questions</h1>
      <p className="text-sm sm:text-base text-center mb-8">
        If you have any questions in mind before booking a meeting, please check our FAQ section. Very likely, your query would have been answered here.
      </p>

      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default Faq;
