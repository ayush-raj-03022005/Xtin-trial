import React from 'react';
import ToolCard from './ToolCard';

const tools = [
  {
    title: 'AI-Powered Algorithms',
    description: 'Automated trading strategies trained on millions of data points.',
    icon: '🤖',
    link: '/algos',
  },
  {
    title: 'Financial Tools',
    description: 'Explore our suite of calculators and financial planning tools.',
    icon: '🧮',
    link: '/tools',
  },
  {
    title: 'Learn Finance',
    description: 'Expand your financial knowledge with comprehensive learning resources.',
    icon: '📚',
    link: '/learn',
  },
  {
    title: 'Analytics',
    description: 'Advanced market analysis and trading insights.',
    icon: '📊',
    link: '/algos',
  },
  {
    title: 'Advisory Services',
    description: 'Connect with SEBI-registered financial advisors for personalized guidance.',
    icon: '💼',
    link: '/advisory',
  },
];

const ToolsSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="text-green-600 text-2xl mr-3">📈</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Powerful Trading Tools
          </h2>
        </div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Everything you need to succeed in algorithmic trading.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              icon={tool.icon}
              title={tool.title}
              description={tool.description}
              link={tool.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
