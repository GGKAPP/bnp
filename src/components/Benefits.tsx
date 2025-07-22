import React from 'react';
import { DollarSign, Heart, UtensilsCrossed, MapPin, Award } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefits: React.FC = () => {
  const benefits: Benefit[] = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Stipend",
      description: "Competitive stipend during your internship period"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health Insurance",
      description: "Comprehensive health insurance coverage"
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: "Meals",
      description: "Complimentary meals and refreshments"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Travel",
      description: "Travel allowances and transportation support"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Pre-placement Offer Consideration",
      description: "Opportunity for full-time employment upon successful completion"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">BENEFITS</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover the comprehensive benefits package we offer to support your growth and well-being during your journey with us.
        </p>

        {/* grid-cols-6 with 2-col-span cards = 3 cards per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {benefits.map((benefit, index) => {
            // Card width = 2 columns
            const colSpan = 'lg:col-span-2';
            let colStart = '';

            // Top row
            if (index === 0) colStart = 'lg:col-start-1'; // card 1
            if (index === 1) colStart = 'lg:col-start-3'; // card 2
            if (index === 2) colStart = 'lg:col-start-5'; // card 3

            // Bottom row
            if (index === 3) colStart = 'lg:col-start-2'; // card 4 (between 1 & 2)
            if (index === 4) colStart = 'lg:col-start-4'; // card 5 (between 2 & 3)

            return (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center ${colSpan} ${colStart}`}
              >
                <div className="text-[#007749] mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
