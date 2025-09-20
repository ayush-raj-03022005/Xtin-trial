import React from 'react';
import ReturnCard from './ReturnCard';

const Hero = () => {
  return (
    <section className="relative bg-white py-20 px-6 md:px-12 lg:px-24 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Advanced Trading <span className="text-green-600">Algorithms</span><br />
            for Modern Markets
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Leverage cutting-edge AI and machine learning algorithms to optimize your trading strategies.
            Access professional-grade tools used by institutional traders.
          </p>
          <div className="mt-6 flex gap-4 flex-wrap">
            <a 
              href="https://t.me/xtin_capital_group" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Join Telegram Group
            </a>
            <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium px-6 py-3 rounded-lg transition">
              View Demo
            </button>
          </div>
        </div>

        {/* Right Return Card */}
        <div className="w-full max-w-sm">
          <ReturnCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
