import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  ArrowRight 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">ZAFCO</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for Umrah visa services, flight bookings, and hotel reservations. Making your journey to the holy land smooth and hassle-free.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-accent-300 transition duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-300 transition duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-300 transition duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-300 transition duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Umrah Visa', path: '/umrah-visa' },
                { name: 'Flight Booking', path: '/flights' },
                { name: 'Hotel Booking', path: '/hotels' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-white transition duration-300 flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Our Services</h3>
            <ul className="space-y-2">
              {[
                { name: 'Umrah Visa Processing', path: '/umrah-visa' },
                { name: 'Document Attestation', path: '/services' },
                { name: 'Flight Booking', path: '/flights' },
                { name: 'Hotel Reservation', path: '/hotels' },
                { name: 'Travel Packages', path: '/packages' },
                { name: 'Travel Insurance', path: '/insurance' },
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path}
                    className="text-gray-300 hover:text-white transition duration-300 flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-accent-400 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">123 Business Street, New Delhi, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-accent-400 flex-shrink-0" size={18} />
                <a href="tel:+919717460294" className="text-gray-300 hover:text-white transition duration-300">
                  +91 9717460294
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-accent-400 flex-shrink-0" size={18} />
                <a href="mailto:info@zafco.com" className="text-gray-300 hover:text-white transition duration-300">
                  info@zafco.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} ZAFCO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;