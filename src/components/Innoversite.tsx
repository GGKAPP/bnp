import React from 'react';

interface FlipCard {
  id: number;
  title: string;
  image: string;
  description: string;
}

const Innoversite: React.FC = () => {
  const flipCards: FlipCard[] = [
    {
      id: 1,
      title: "INNOVATION",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      description: "Drive innovation through cutting-edge technology solutions and creative problem-solving approaches."
    },
    {
      id: 2,
      title: "LEARNING",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      description: "Continuous learning opportunities with industry experts and access to latest technologies."
    },
    {
      id: 3,
      title: "NETWORKING",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      description: "Build valuable connections with professionals and peers across the technology industry."
    },
    {
      id: 4,
      title: "RECOGNITION",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      description: "Get recognized for your innovative ideas and contributions to the technology ecosystem."
    },
    {
      id: 5,
      title: "COLLABORATION",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      description: "Collaborate with diverse teams and work on challenging real-world business problems."
    },
    {
      id: 6,
      title: "IMPACT",
      image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg",
      description: "Create meaningful impact through technology solutions that transform business operations."
    }
  ];

  return (
    <section id="innoversite" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">INNOVERSITÉ</h2>
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Join our innovation platform and be part of transformative technology initiatives that shape the future of banking and finance.
        </p>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">WHY PARTICIPATE</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flipCards.map((card) => (
            <div key={card.id} className="flip-card h-64 perspective-1000">
              <div className="flip-card-inner relative w-full h-full transition-transform duration-700 preserve-3d cursor-pointer group">
                {/* Front Side */}
                <div className="flip-card-front absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#007749]/40 flex items-end">
                    <h4 className="text-white font-bold text-lg p-4 w-full">{card.title}</h4>
                  </div>
                </div>

                {/* Back Side */}
                <div className="flip-card-back absolute w-full h-full backface-hidden rounded-lg bg-[#007749] p-6 flex items-center justify-center rotate-y-180">
                  <div className="text-center text-white">
                    <h4 className="font-bold text-xl mb-4">{card.title}</h4>
                    <p className="text-sm leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innoversite;
