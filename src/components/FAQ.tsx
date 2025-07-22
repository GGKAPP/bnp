import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const faqData: FAQItem[] = [
    {
      question: "What are the eligibility criteria for the internship program?",
      answer: "Students in their final year of engineering or master's programs with strong academic performance and relevant technical skills are eligible to apply."
    },
    {
      question: "How long is the internship duration?",
      answer: "The internship program typically runs for 6 months, with possibilities for extension based on performance and business needs."
    },
    {
      question: "What is the selection process?",
      answer: "Our selection process includes online application screening, technical assessments, video interviews, and final panel discussions with hiring managers."
    },
    {
      question: "Are there opportunities for full-time employment after the internship?",
      answer: "Yes, successful interns are considered for pre-placement offers based on their performance, contribution, and available positions in their area of expertise."
    },
    {
      question: "What kind of projects will I work on during the internship?",
      answer: "Interns work on live projects across various domains including application development, data analytics, infrastructure management, and digital transformation initiatives."
    },
    {
      question: "Is there a mentorship program for interns?",
      answer: "Yes, each intern is assigned a dedicated mentor who provides guidance, support, and regular feedback throughout the internship period."
    },
    {
      question: "What are the working hours for interns?",
      answer: "Interns work standard business hours from 9:00 AM to 6:00 PM, Monday through Friday, with flexibility for project requirements."
    },
    {
      question: "Are there any training programs provided?",
      answer: "We provide comprehensive orientation and ongoing training programs covering technical skills, soft skills, and industry best practices."
    }
  ];

  const displayedFAQs = showAll ? faqData : faqData.slice(0, 4);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">FREQUENTLY ASKED QUESTIONS</h2>
        
        <div className="space-y-4">
          {displayedFAQs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#007749] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-4 pt-2">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && faqData.length > 4 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="bg-[#007749] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#005a37] transition-colors duration-200"
            >
              Show More FAQs
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;