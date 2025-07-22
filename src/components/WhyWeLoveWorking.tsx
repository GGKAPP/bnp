import React from 'react';

const WhyWeLoveWorking: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">WHY WE LOVE WORKING AT BNP PARIBAS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Video 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-900">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Employee testimonial 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Innovation Culture</h3>
              <p className="text-gray-600 text-sm">Discover how our innovative work environment fosters creativity and growth.</p>
            </div>
          </div>

          {/* Video 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-900">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
                alt="Employee testimonial 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Team Collaboration</h3>
              <p className="text-gray-600 text-sm">Learn about our collaborative approach to solving complex challenges.</p>
            </div>
          </div>

          {/* Video 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-900">
              <img 
                src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg"
                alt="Employee testimonial 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Career Growth</h3>
              <p className="text-gray-600 text-sm">Hear about the career development opportunities available at BNP Paribas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeLoveWorking;