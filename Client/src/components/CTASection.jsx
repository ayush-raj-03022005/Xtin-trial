import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-green-600 py-16 px-6 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Transform Your Trading?
      </h2>
      <p className="mb-6 text-lg max-w-2xl mx-auto">
        Join thousands of successful traders using Xtin Capital's advanced algorithms.
      </p>
      <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
        Start Free Trial
      </button>
    </section>
  );
};

export default CTASection;
