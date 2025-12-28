
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, PHONE_NUMBER } from '../constants';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <Link to="/" className="flex items-center group">
            <div className="w-10 h-10 bg-blue-600 rounded-sm mr-3 flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">P</div>
            <span className="text-2xl font-extrabold tracking-tighter text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
              PURE<span className="font-light">CARE</span>
            </span>
          </Link>

          {/* Links */}
          <div className="hidden md:flex space-x-12 items-center text-sm font-semibold tracking-wide uppercase">
            <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition">Home</Link>
            <Link to="/#services" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition">Services</Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition">About</Link>
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme} 
              className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? '☀' : '☾'}
            </button>

            <Link to="/contact" className="bg-gray-900 dark:bg-white text-white dark:text-black px-8 py-3 rounded-none font-bold hover:bg-blue-600 dark:hover:bg-blue-400 transition hover:scale-105">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center gap-4">
             <button onClick={toggleTheme} className="text-xl">{theme === 'dark' ? '☀' : '☾'}</button>
             <Link to="/contact" className="text-sm font-bold uppercase border-b-2 border-blue-600">Book</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
