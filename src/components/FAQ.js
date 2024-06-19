'use client'
import React, { useState } from "react";

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "Was ist Tagd?",
      answer: "Tagd ist eine großartige Anwendung, die Ihnen dabei hilft, ..."
    },
    {
      question: "Wann bekomme ich Cashback?",
      answer: "Sie erhalten Cashback, sobald Sie ..."
    },
    {
      question: "Wie viel Cashback bekomme ich?",
      answer: "Der Betrag des Cashbacks hängt von ..."
    },
    {
      question: "Warum ist Tagd so wichtig?",
      answer: "Tagd ist wichtig, weil es Ihnen ermöglicht, ..."
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto px-3 lg:px-8">
        <h1 className="text-center text-3xl md:text-5xl font-medium text-[#0B132A] mb-8">Häufig gestellte <span className="text-[#F0CF90]">Fragen</span></h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white rounded-lg"
            >
              <button
                className="w-full flex justify-between px-4 py-3 text-left rounded-t-lg focus:outline-none"
                onClick={() => toggleExpand(index)}
              >
                <span className="font-bold text-xl md:text-3xl">{faq.question}</span>
                <span className="text-3xl font-bold">{expandedIndex === index ? "-" : "+"}</span>
              </button>
              <div
                className={`${
                  expandedIndex === index ? "max-h-screen" : "h-0"
                } overflow-hidden transition-max-h duration-300 ease-in-out`}
              >
                <div className="px-4 py-3 rounded-b-lg">
                  <p className="text-gray-700 text-base md:text-xl">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
