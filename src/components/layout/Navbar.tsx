import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Umrah Visa', path: '/umrah-visa' },
    { name: 'Flights', path: '/flights' },
    { name: 'Hotels', path: '/hotels' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="relative z-30">
      {/* Top bar with contact info */}
      <div className="bg-primary-700 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:+919717460294" className="flex items-center hover:text-accent-300 transition duration-300">
              <Phone size={14} className="mr-1" />
              +91 9717460294
            </a>
            <a href="mailto:info@zafco.com" className="flex items-center hover:text-accent-300 transition duration-300">
              <Mail size={14} className="mr-1" />
              info@zafco.com
            </a>
          </div>
          <div className="flex items-center">
            <span className="flex items-center">
              <MapPin size={14} className="mr-1" />
              New Delhi, India
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav 
        className={`${
          scrolled 
            ? 'bg-white shadow-md py-3' 
            : 'bg-transparent py-5'
        } transition-all duration-300 w-full`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-700 font-heading">
              ZAFCO
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <Link 
                key={link.path}
                to={link.path}
                className={`text-gray-700 hover:text-primary-600 transition duration-300 font-medium relative ${
                  location.pathname === link.path ? 'text-primary-600' : ''
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600" 
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <motion.div 
            className="md:hidden bg-white shadow-lg absolute w-full"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map(link => (
                <Link 
                  key={link.path}
                  to={link.path}
                  className={`text-gray-700 hover:text-primary-600 transition duration-300 py-2 ${
                    location.pathname === link.path ? 'text-primary-600 font-medium' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-200 flex flex-col space-y-2 text-sm">
                <a href="tel:+919717460294" className="flex items-center text-gray-700">
                  <Phone size={14} className="mr-2" />
                  +91 9717460294
                </a>
                <a href="mailto:info@zafco.com" className="flex items-center text-gray-700">
                  <Mail size={14} className="mr-2" />
                  info@zafco.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;