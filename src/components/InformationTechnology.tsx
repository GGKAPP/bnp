import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: string;
}

const InformationTechnology: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Auto-close accordion on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setOpenIndex(null);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const accordionData: AccordionItem[] = [
    {
      title: "Application Development and Maintenance",
      content: "Our team of skilled developers provides comprehensive application development and maintenance services, ensuring robust, scalable solutions that meet business requirements while maintaining high performance standards."
    },
    {
      title: "IT Support",
      content: "We deliver 24/7 IT support services with dedicated teams providing technical assistance, troubleshooting, and system maintenance to ensure seamless business operations across all technology platforms."
    },
    {
      title: "IT Infrastructure Support",
      content: "Our infrastructure support team manages and maintains critical IT infrastructure components including servers, networks, databases, and cloud services to ensure optimal performance and reliability."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="information-technology" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">INFORMATION TECHNOLOGY</h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Our Information Technology division provides comprehensive IT services and solutions, driving innovation and operational excellence across the organization.
        </p>

        <div className="max-w-4xl mx-auto space-y-4">
          {accordionData.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-semibold text-gray-900">{item.title}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#007749]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-4 pt-2">
                  <p className="text-gray-600 leading-relaxed">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InformationTechnology;