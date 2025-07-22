import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">ABOUT US</h2>
        
        {/* Single bordered container for both video and description */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Video Section */}
            <div className="p-6">
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/N8k0HVIjsuM"
                  title="Discover BNP Paribas through its corporate film"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Description Section */}
            <div className="p-6 flex flex-col justify-center">
              <p className="text-gray-700 mb-4 leading-relaxed">
                With a footprint in 63 countries and territories and 183,000 employees, BNP 
                Paribas is positioned as the leading bank in the European Union.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                BNP Paribas India started its operations in 1860 to support local and global 
                corporate and financial institutions in their growth and expansion strategies. 
                Today the Group has over 14000 employees in India across its various lines of 
                businesses.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Established in 2005, BNP Paribas India Solutions (ISPL) is a wholly-owned 
                subsidiary of BNP Paribas SA. Located in Bengaluru, Chennai and Mumbai, 
                ISPL is a 24×7 global delivery center that services various business lines of BNP 
                Paribas. Read more about careers on our{' '}
                <a href="#" className="text-[#007749] hover:underline">website</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;