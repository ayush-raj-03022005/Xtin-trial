import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToolCard = ({ icon, title, description, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div 
      className={`bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300 ${
        link ? 'cursor-pointer hover:scale-105' : ''
      }`}
      onClick={handleClick}
    >
      <div className="text-4xl mb-4 text-green-600">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {link && (
        <div className="mt-4 text-green-600 font-medium text-sm">
          Learn more →
        </div>
      )}
    </div>
  );
};

export default ToolCard;
