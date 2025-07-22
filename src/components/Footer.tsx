import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <div className="w-40 h-10 bg-[#007749] flex items-center justify-center rounded">
              <span className="text-white font-bold">BNP PARIBAS</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a 
              href="#privacy" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href="#terms" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Terms & Conditions
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 BNP Paribas India Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;