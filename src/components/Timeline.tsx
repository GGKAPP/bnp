import React from 'react';
import { CheckCircle } from 'lucide-react';

interface TimelineStep {
  title: string;
  color: string;
  date: string;
  description: string;
}

const timelineSteps: TimelineStep[] = [
  {
    title: "Registration",
    color: "bg-[#007749]",
    date: "July 25, 2025",
    description: "Participants sign up and submit initial info."
  },
  {
    title: "Shortlisting",
    color: "bg-blue-600",
    date: "July 30, 2025",
    description: "Shortlisting based on submissions & profiles."
  },
  {
    title: "Online Assessment",
    color: "bg-purple-600",
    date: "August 5, 2025",
    description: "A technical quiz or problem-solving test."
  },
  {
    title: "Pre-Hackathon Connect",
    color: "bg-green-600",
    date: "August 10, 2025",
    description: "Orientation & mentorship before the big event."
  },
  {
    title: "In-person Hackathon",
    color: "bg-orange-600",
    date: "August 15–16, 2025",
    description: "Build, present, and impress on-ground."
  },
  {
    title: "Internship Onboarding",
    color: "bg-teal-600",
    date: "September 1, 2025",
    description: "Winners begin their internship journey."
  }
];

const Timeline: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-white">
      <div className="px-4 md:px-8 max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          HACKATHON TIMELINE
        </h2>

        {/* Mobile + Tablet Vertical Timeline */}
        <div className="relative flex flex-col md:hidden">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-300 z-0 -ml-1"></div>

          {timelineSteps.map((step, index) => (
            <div key={index} className="relative flex items-start mb-12">
              <div className="z-10 w-8 flex justify-center">
                <div className="w-4 h-4 bg-gray-800 rounded-full mt-2"></div>
              </div>
              <div
                className={`ml-4 w-full rounded-xl shadow-lg p-4 text-white ${step.color}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="text-white w-5 h-5" />
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                </div>
                <div className="text-xs mb-1">{step.date}</div>
                <div className="text-sm">{step.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden md:flex relative items-end justify-center">
          <div className="absolute top-full left-0 w-full h-1 bg-gray-300 z-0 -mt-3"></div>
          <div className="flex justify-between w-full z-10">
            {timelineSteps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center w-48 mx-2"
              >
                <div
                  className={`w-full h-56 rounded-xl shadow-lg p-4 text-white ${step.color} flex flex-col items-center justify-between`}
                >
                  <CheckCircle className="text-white w-6 h-6" />
                  <div className="text-lg font-semibold text-center">{step.title}</div>
                  <div className="text-xs text-center">{step.date}</div>
                  <div className="text-sm text-center">{step.description}</div>
                </div>
                <div className="w-5 h-5 bg-gray-800 rounded-full mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
