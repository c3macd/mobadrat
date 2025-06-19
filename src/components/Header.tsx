import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">مبادرات</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">الرئيسية</a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">الخدمات</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">من نحن</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">تواصل معنا</a>
          </nav>

          <button
            className="md:hidden text-gray-700 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-700 hover:text-blue-600 py-2">الرئيسية</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 py-2">الخدمات</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 py-2">من نحن</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 py-2">تواصل معنا</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;