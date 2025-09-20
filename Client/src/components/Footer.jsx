import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        
        {/* Logo / Brand */}
        <div className="flex flex-col">
          <div className="text-2xl font-bold text-gray-900 mb-2">
            Xtin <span className="text-green-600">Capital</span>
          </div>
          <p className="text-sm text-gray-600 max-w-xs">
            Advanced algorithmic trading platform for modern markets.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Platform</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-green-600 transition">Trading Tools</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-green-600 transition">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-green-600 transition">Help Center</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
