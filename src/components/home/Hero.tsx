import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, Building, FileCheck, ArrowRight, Search } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('umrah');

  return (
    <div className="relative bg-gradient-to-r from-primary-700 to-primary-800 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3 opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Your Journey to the Holy Land Begins Here
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              ZAFCO provides hassle-free Umrah visa services, flight bookings, and hotel reservations to make your spiritual journey smooth and memorable.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Button 
                variant="secondary" 
                size="lg" 
                to="/umrah-visa"
                icon={<FileCheck size={20} />}
              >
                Apply for Umrah Visa
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                to="/contact"
                className="bg-white/10 border-white text-white hover:bg-white/20"
              >
                Contact Us
              </Button>
            </motion.div>
          </div>

          {/* Hero search box */}
          <motion.div 
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl shadow-xl p-4 text-gray-800">
              {/* Tabs */}
              <div className="flex border-b border-gray-200 mb-6">
                <button 
                  onClick={() => setActiveTab('umrah')}
                  className={`flex items-center px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
                    activeTab === 'umrah' 
                      ? 'border-primary-600 text-primary-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <FileCheck size={16} className="mr-2" />
                  Umrah Visa
                </button>
                <button 
                  onClick={() => setActiveTab('flights')}
                  className={`flex items-center px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
                    activeTab === 'flights' 
                      ? 'border-primary-600 text-primary-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Plane size={16} className="mr-2" />
                  Flights
                </button>
                <button 
                  onClick={() => setActiveTab('hotels')}
                  className={`flex items-center px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
                    activeTab === 'hotels' 
                      ? 'border-primary-600 text-primary-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Building size={16} className="mr-2" />
                  Hotels
                </button>
              </div>

              {/* Umrah Visa Form */}
              {activeTab === 'umrah' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nationality
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                        <option value="">Select your nationality</option>
                        <option value="india">India</option>
                        <option value="pakistan">Pakistan</option>
                        <option value="bangladesh">Bangladesh</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Processing Type
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                        <option value="">Select processing type</option>
                        <option value="standard">Standard</option>
                        <option value="fast">Fast</option>
                        <option value="super">Super Rush</option>
                      </select>
                    </div>
                  </div>
                  <Button 
                    variant="primary" 
                    size="lg" 
                    fullWidth
                    to="/umrah-visa"
                    icon={<ArrowRight size={18} />}
                    iconPosition="right"
                  >
                    Check Eligibility
                  </Button>
                </div>
              )}

              {/* Flights Form */}
              {activeTab === 'flights' && (
                <div className="space-y-4">
                  <div className="flex space-x-4 mb-4">
                    <label className="inline-flex items-center">
                      <input type="radio" name="trip_type" className="form-radio text-primary-600" defaultChecked />
                      <span className="ml-2">Round Trip</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="trip_type" className="form-radio text-primary-600" />
                      <span className="ml-2">One Way</span>
                    </label>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                        placeholder="City or Airport"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                        placeholder="Jeddah or Madinah"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
                      <input 
                        type="date" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Return</label>
                      <input 
                        type="date" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                        <option value="1">1 Passenger</option>
                        <option value="2">2 Passengers</option>
                        <option value="3">3 Passengers</option>
                        <option value="4">4+ Passengers</option>
                      </select>
                    </div>
                  </div>
                  
                  <Button 
                    variant="primary" 
                    size="lg" 
                    fullWidth
                    to="/flights"
                    icon={<Search size={18} />}
                    iconPosition="right"
                  >
                    Search Flights
                  </Button>
                </div>
              )}

              {/* Hotels Form */}
              {activeTab === 'hotels' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option value="">Select destination</option>
                      <option value="mecca">Mecca</option>
                      <option value="madinah">Madinah</option>
                      <option value="jeddah">Jeddah</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                      <input 
                        type="date" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                      <input 
                        type="date" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Rooms</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                        <option value="1">1 Room</option>
                        <option value="2">2 Rooms</option>
                        <option value="3">3 Rooms</option>
                        <option value="4">4+ Rooms</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4+ Guests</option>
                      </select>
                    </div>
                  </div>
                  
                  <Button 
                    variant="primary" 
                    size="lg" 
                    fullWidth
                    to="/hotels"
                    icon={<Search size={18} />}
                    iconPosition="right"
                  >
                    Find Hotels
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;