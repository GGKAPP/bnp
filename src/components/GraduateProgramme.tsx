import React from 'react';
import { BookOpen, Users, TrendingUp, CheckCircle } from 'lucide-react';

interface ProgramCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const GraduateProgramme: React.FC = () => {
  const programCards: ProgramCard[] = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Learning and Development",
      description: "Comprehensive training programs designed to enhance your technical and professional skills through structured learning modules."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "On the Job Training",
      description: "Hands-on experience working on real projects with experienced mentors guiding you through practical applications."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Networking",
      description: "Build valuable professional relationships within the organization and industry through structured networking opportunities."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Evaluation and Check-in",
      description: "Regular performance evaluations and feedback sessions to track your progress and identify areas for improvement."
    }
  ];

  return (
    <section id="graduate-program" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">GRADUATE PROGRAMME</h2>
        <p className="text-gray-600 text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Our Graduate Programme is designed to fast-track your career development through a comprehensive blend of learning, 
          practical experience, and professional growth opportunities. Join us to kick-start your journey in the financial services industry.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programCards.map((card, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-[#007749] mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraduateProgramme;