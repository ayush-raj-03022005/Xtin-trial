import React from 'react';

const stats = [
  { label: 'Trading Volume', value: '$2.5B+', icon: '💰' },
  { label: 'Active Traders', value: '50K+', icon: '👤' },
  { label: 'Uptime', value: '99.9%', icon: '⚙️' },
  { label: 'Avg Latency', value: '0.1ms', icon: '⚡' },
];

const StatsBanner = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-4xl mb-2">{stat.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBanner;
