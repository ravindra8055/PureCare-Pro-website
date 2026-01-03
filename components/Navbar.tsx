
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, PHONE_NUMBER } from '../constants';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Locations', path: '/locations' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 py-2 shadow-sm' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Brand */}
            <Link to="/" className="flex items-center group relative z-[110]">
              <img src="/images/logo.svg" alt="Hygienic Cleaning Logo" className="w-12 h-12 md:w-14 md:h-14 mr-3 group-hover:scale-110 transition-transform duration-500" />
              <div className="flex flex-col space-y-0 md:-space-y-1">
                <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  Hygienic
                </span>
                <span className="text-xs md:text-sm font-medium tracking-wide text-gray-600 dark:text-gray-400">
                  cleaning services
                </span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-10">
              <div className="flex items-center space-x-12 text-[11px] font-black tracking-[0.2em] uppercase">
                {navLinks.filter(l => l.name !== 'Contact').map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-yellow-400 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              <Link to="/contact" className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 font-bold text-sm tracking-widest transition-all hover:bg-blue-600 dark:hover:bg-blue-400 active:scale-95">
                BOOK NOW
              </Link>
            </div>

            {/* Mobile Menu Actions */}
            <div className="md:hidden flex items-center gap-4 relative z-[110]">
              <Link to="/contact" className="text-sm font-bold uppercase border-b-2 border-blue-600 transition-colors">
                BOOK
              </Link>
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-600 dark:text-gray-400"
              >
                {theme === 'dark' ? '☀' : '☾'}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-900 dark:text-white"
              >
                <div className="w-6 h-5 flex flex-col justify-between items-end">
                  <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 translate-y-2 -rotate-45' : 'w-6'}`}></span>
                  <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
                  <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 -translate-y-2.5 rotate-45' : 'w-5'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white dark:bg-black z-[90] transition-transform duration-500 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-32 px-10 space-y-6 relative overflow-y-auto no-scrollbar pb-20">
          <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern opacity-5 pointer-events-none"></div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-4xl font-bold tracking-tighter text-gray-900 dark:text-white transition-all duration-500 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
            >
              {link.name}
            </Link>
          ))}

          <div className={`pt-6 transition-all duration-700 delay-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="inline-block w-full bg-blue-600 text-white text-center py-6 rounded-2xl font-black text-xl shadow-2xl shadow-blue-500/20 active:scale-95 transition-transform"
            >
              REQUEST QUOTE
            </Link>
          </div>

          <div className={`pt-12 transition-all duration-700 delay-700 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-black mb-2">Our Support</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white mb-1">{PHONE_NUMBER}</p>
            <p className="text-sm text-blue-600 font-medium">Available for you anytime</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
