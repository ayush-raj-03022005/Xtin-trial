import React from 'react';

const ReturnCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 relative">
      <p className="text-sm text-gray-400">RETURN</p>
      <h2 className="text-4xl font-bold mt-2">$45,234</h2>
      <p className="text-green-600 font-medium mt-1">+152% this month</p>

      {/* Background decorative element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 opacity-30 rounded-full -translate-y-8 translate-x-8"></div>
    </div>
  );
};

export default ReturnCard;
