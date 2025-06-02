import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Plane, 
  Search, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Users, 
  Info, 
  ChevronDown, 
  Wallet, 
  Shield
} from 'lucide-react';
import Button from '../components/ui/Button';

const FlightsPage = () => {
  const [tripType, setTripType] = useState('round');
  const [searchResults, setSearchResults] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchResults(true);
  };

  const flights = [
    {
      airline: 'Air India',
      logo: 'https://images.pexels.com/photos/8280269/pexels-photo-8280269.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=2',
      from: 'DEL',
      to: 'JED',
      departureTime: '09:30',
      arrivalTime: '14:45',
      duration: '6h 15m',
      stops: 0,
      price: '₹42,500',
      returnDepartureTime: '16:30',
      returnArrivalTime: '01:45',
      returnDuration: '7h 15m',
      returnStops: 0,
    },
    {
      airline: 'Saudi Airlines',
      logo: 'https://images.pexels.com/photos/8280340/pexels-photo-8280340.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=2',
      from: 'DEL',
      to: 'JED',
      departureTime: '11:45',
      arrivalTime: '17:30',
      duration: '6h 45m',
      stops: 0,
      price: '₹45,800',
      returnDepartureTime: '19:30',
      returnArrivalTime: '04:15',
      returnDuration: '6h 45m',
      returnStops: 0,
    },
    {
      airline: 'Emirates',
      logo: 'https://images.pexels.com/photos/9553413/pexels-photo-9553413.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=2',
      from: 'DEL',
      to: 'JED',
      departureTime: '03:30',
      arrivalTime: '10:45',
      duration: '8h 15m',
      stops: 1,
      stopCity: 'Dubai',
      price: '₹38,200',
      returnDepartureTime: '23:30',
      returnArrivalTime: '09:45',
      returnDuration: '9h 15m',
      returnStops: 1,
      returnStopCity: 'Dubai',
    },
    {
      airline: 'Etihad Airways',
      logo: 'https://images.pexels.com/photos/14666031/pexels-photo-14666031.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=2',
      from: 'DEL',
      to: 'JED',
      departureTime: '06:15',
      arrivalTime: '14:30',
      duration: '9h 15m',
      stops: 1,
      stopCity: 'Abu Dhabi',
      price: '₹36,900',
      returnDepartureTime: '02:15',
      returnArrivalTime: '12:30',
      returnDuration: '9h 15m',
      returnStops: 1,
      returnStopCity: 'Abu Dhabi',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Helmet>
        <title>Flight Booking - ZAFCO</title>
        <meta name="description" content="Book flights to Saudi Arabia for your Umrah journey. Compare prices from major airlines and get the best deals." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-800 text-white py-16 md:py-20 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3 opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3 opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-6 text-center font-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Book Flights for Your Umrah Journey
            </motion.h1>
            <motion.p 
              className="text-lg mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Compare prices from major airlines and find the best deals on flights to Saudi Arabia.
            </motion.p>

            <motion.div 
              className="bg-white rounded-xl shadow-xl p-6 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex mb-6">
                <button 
                  onClick={() => setTripType('round')}
                  className={`flex items-center px-4 py-2 rounded-md mr-4 ${
                    tripType === 'round' 
                      ? 'bg-primary-50 text-primary-600 font-medium' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <input 
                    type="radio" 
                    name="trip_type" 
                    className="mr-2 accent-primary-600" 
                    checked={tripType === 'round'}
                    onChange={() => {}}
                  />
                  Round Trip
                </button>
                <button 
                  onClick={() => setTripType('oneway')}
                  className={`flex items-center px-4 py-2 rounded-md ${
                    tripType === 'oneway' 
                      ? 'bg-primary-50 text-primary-600 font-medium' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <input 
                    type="radio" 
                    name="trip_type" 
                    className="mr-2 accent-primary-600" 
                    checked={tripType === 'oneway'}
                    onChange={() => {}}
                  />
                  One Way
                </button>
              </div>

              <form onSubmit={handleSearch}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                        placeholder="City or Airport"
                        defaultValue="New Delhi (DEL)"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Plane size={18} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" 
                        placeholder="City or Airport"
                        defaultValue="Jeddah (JED)"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Plane size={18} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
                    <div className="relative">
                      <input 
                        type="date" 
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        defaultValue="2025-05-10"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar size={18} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {tripType === 'round' ? 'Return' : 'Flexible Dates'}
                    </label>
                    <div className="relative">
                      <input 
                        type="date" 
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        defaultValue="2025-05-20"
                        disabled={tripType === 'oneway'}
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar size={18} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
                    <div className="relative">
                      <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 appearance-none">
                        <option value="1">1 Passenger</option>
                        <option value="2">2 Passengers</option>
                        <option value="3">3 Passengers</option>
                        <option value="4">4 Passengers</option>
                        <option value="5+">5+ Passengers</option>
                      </select>
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Users size={18} className="text-gray-400" />
                      </div>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ChevronDown size={18} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    type="submit"
                    icon={<Search size={20} />}
                    fullWidth
                  >
                    Search Flights
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchResults && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-2xl font-bold mb-6 font-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Flight Search Results
            </motion.h2>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center text-sm">
                  <span className="font-medium mr-2">Filters:</span>
                  <button className="px-3 py-1 bg-gray-100 rounded-full mr-2 hover:bg-gray-200">
                    Non-stop
                  </button>
                  <button className="px-3 py-1 bg-gray-100 rounded-full mr-2 hover:bg-gray-200">
                    1 Stop
                  </button>
                  <button className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200">
                    Morning Departure
                  </button>
                </div>
                <div className="flex items-center text-sm">
                  <span className="font-medium mr-2">Sort by:</span>
                  <select className="bg-gray-100 px-3 py-1 rounded-md border-none focus:ring-2 focus:ring-primary-500">
                    <option>Price: Low to High</option>
                    <option>Duration: Shortest</option>
                    <option>Departure: Earliest</option>
                    <option>Arrival: Earliest</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {flights.map((flight, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-card border border-gray-100 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div className="flex items-center mb-4 lg:mb-0">
                        <img 
                          src={flight.logo} 
                          alt={flight.airline} 
                          className="w-10 h-10 rounded-full mr-3 object-cover"
                        />
                        <div>
                          <h3 className="font-semibold">{flight.airline}</h3>
                          <p className="text-xs text-gray-500">Flight AI-3045</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center">
                        <div className="font-bold text-2xl text-primary-600 mb-2 sm:mb-0 sm:mr-4">
                          {flight.price}
                        </div>
                        <Button variant="primary">
                          Select Flight
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-3">
                      {/* Outbound journey */}
                      <div className="lg:col-span-5 flex items-center">
                        <div className="text-center mr-4">
                          <div className="text-xl font-bold">{flight.departureTime}</div>
                          <div className="text-sm text-gray-500">{flight.from}</div>
                        </div>
                        <div className="flex-grow px-4 py-2">
                          <div className="relative flex items-center">
                            <div className="h-1 flex-grow bg-gray-200 relative">
                              {flight.stops > 0 && (
                                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary-500 rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>
                              )}
                            </div>
                            <div className="absolute top-0 left-0 right-0 text-xs text-center text-gray-500 -mt-6">
                              {flight.duration}
                            </div>
                            {flight.stops > 0 && (
                              <div className="absolute bottom-0 left-0 right-0 text-xs text-center text-gray-500 -mb-6">
                                {flight.stops} stop ({flight.stopCity})
                              </div>
                            )}
                            {flight.stops === 0 && (
                              <div className="absolute bottom-0 left-0 right-0 text-xs text-center text-gray-500 -mb-6">
                                Non-stop
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-center ml-4">
                          <div className="text-xl font-bold">{flight.arrivalTime}</div>
                          <div className="text-sm text-gray-500">{flight.to}</div>
                        </div>
                      </div>

                      <div className="hidden lg:flex lg:col-span-2 items-center justify-center">
                        <div className="h-12 w-px bg-gray-200"></div>
                      </div>

                      {/* Return journey */}
                      {tripType === 'round' && (
                        <div className="lg:col-span-5 flex items-center">
                          <div className="text-center mr-4">
                            <div className="text-xl font-bold">{flight.returnDepartureTime}</div>
                            <div className="text-sm text-gray-500">{flight.to}</div>
                          </div>
                          <div className="flex-grow px-4 py-2">
                            <div className="relative flex items-center">
                              <div className="h-1 flex-grow bg-gray-200 relative">
                                {flight.returnStops > 0 && (
                                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary-500 rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>
                                )}
                              </div>
                              <div className="absolute top-0 left-0 right-0 text-xs text-center text-gray-500 -mt-6">
                                {flight.returnDuration}
                              </div>
                              {flight.returnStops > 0 && (
                                <div className="absolute bottom-0 left-0 right-0 text-xs text-center text-gray-500 -mb-6">
                                  {flight.returnStops} stop ({flight.returnStopCity})
                                </div>
                              )}
                              {flight.returnStops === 0 && (
                                <div className="absolute bottom-0 left-0 right-0 text-xs text-center text-gray-500 -mb-6">
                                  Non-stop
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="text-center ml-4">
                            <div className="text-xl font-bold">{flight.returnArrivalTime}</div>
                            <div className="text-sm text-gray-500">{flight.from}</div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Wallet size={16} className="mr-2" />
                        <span>Free Meal</span>
                      </div>
                      <div className="flex items-center">
                        <Shield size={16} className="mr-2" />
                        <span>Cancellation Fee: ₹3,500</span>
                      </div>
                      <div className="flex items-center">
                        <Info size={16} className="mr-2" />
                        <span>Baggage: 2 x 23kg</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Book with Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800 font-heading">Why Book Flights with ZAFCO</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the best flight booking service tailored for Umrah travelers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="bg-primary-50 p-6 rounded-lg border border-primary-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-3 bg-white rounded-full w-14 h-14 flex items-center justify-center mb-5 text-primary-600 shadow-sm">
                <Wallet size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Best Price Guarantee</h3>
              <p className="text-gray-700">
                We compare prices from all major airlines to ensure you get the best deal for your Umrah journey.
              </p>
            </motion.div>

            <motion.div 
              className="bg-accent-50 p-6 rounded-lg border border-accent-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="p-3 bg-white rounded-full w-14 h-14 flex items-center justify-center mb-5 text-accent-600 shadow-sm">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Convenient Schedules</h3>
              <p className="text-gray-700">
                Choose from multiple flight options with convenient departure and arrival times for a smooth travel experience.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-3 bg-white rounded-full w-14 h-14 flex items-center justify-center mb-5 text-gray-700 shadow-sm">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Secure Booking</h3>
              <p className="text-gray-700">
                Book your flights with confidence using our secure payment gateway and receive instant confirmation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800 font-heading">Travel Tips for Umrah Pilgrims</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential tips to make your air travel comfortable and hassle-free.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Book in Advance",
                description: "Flights to Jeddah and Madinah can be expensive during peak seasons. Book at least 2-3 months in advance to get the best rates.",
                icon: <Calendar size={24} />,
              },
              {
                title: "Travel Light",
                description: "Pack essentials only. Most airlines allow 23kg checked baggage and 7kg cabin baggage for international flights to Saudi Arabia.",
                icon: <ArrowRight size={24} />,
              },
              {
                title: "Arrive Early",
                description: "Reach the airport at least 3 hours before your international flight to complete security checks and immigration formalities.",
                icon: <Clock size={24} />,
              },
              {
                title: "Carry Documents",
                description: "Keep your passport, visa, and flight tickets handy. Also carry printed hotel bookings and emergency contact details.",
                icon: <FileCheck size={24} />,
              },
            ].map((tip, index) => (
              <motion.div 
                key={index}
                className="flex"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-3 bg-white rounded-full w-14 h-14 flex items-center justify-center mr-4 mt-1 text-primary-600 shadow-sm flex-shrink-0">
                  {tip.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-heading">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-card p-8 md:p-12 border border-gray-100">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800 font-heading">Ready to Book Your Flight?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Start your search now and find the best flight options for your Umrah journey.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Button 
                variant="primary" 
                size="lg" 
                icon={<Search size={20} />}
                to="#"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Search Flights
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                to="/contact"
              >
                Need Assistance?
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default FlightsPage;