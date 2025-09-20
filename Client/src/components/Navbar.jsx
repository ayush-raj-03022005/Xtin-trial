import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 md:px-12 lg:px-24 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          Xtin <span className="text-green-600">Capital</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-green-600 transition">Platform</Link></li>
          <li><Link to="/tools" className="hover:text-green-600 transition">Tools</Link></li>
          <li><Link to="/learn" className="hover:text-green-600 transition">Learn</Link></li>
          <li><Link to="/algos" className="hover:text-green-600 transition">Analytics</Link></li>
          <li><Link to="/advisory" className="hover:text-green-600 transition">Advisory</Link></li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex gap-4">
          <Link to="/login" className="text-gray-700 hover:text-green-600 transition font-medium px-4 py-2 rounded-lg hover:bg-gray-100">
            Login
          </Link>
          <Link to="/signup" className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
            Signup
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <Link to="/login" className="text-gray-700 hover:text-green-600 transition font-medium px-3 py-2 rounded-lg hover:bg-gray-100">
            Login
          </Link>
          <Link to="/signup" className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
            Signup
          </Link>
          <button 
            className="text-gray-700 text-2xl hover:text-green-600 transition"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="px-6 py-4 space-y-4 text-gray-700">
            <li><Link to="/" className="block hover:text-green-600 transition">Platform</Link></li>
            <li><Link to="/tools" className="block hover:text-green-600 transition">Tools</Link></li>
            <li><Link to="/learn" className="block hover:text-green-600 transition">Learn</Link></li>
            <li><Link to="/algos" className="block hover:text-green-600 transition">Analytics</Link></li>
            <li><Link to="/advisory" className="block hover:text-green-600 transition">Advisory</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
