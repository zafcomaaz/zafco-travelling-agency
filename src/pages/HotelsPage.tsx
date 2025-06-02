import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Building, 
  Calendar, 
  Search, 
  Users, 
  MapPin, 
  Star, 
  Wifi, 
  Coffee, 
  Bath, 
  Utensils, 
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import Button from '../components/ui/Button';

const HotelsPage = () => {
  const [searchResults, setSearchResults] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchResults(true);
  };

  const hotels = [
    {
      name: 'Al Safwah Royale Orchid Hotel',
      image: 'https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
      distance: '200m from Masjid al-Haram',
      price: '₹18,500',
      perNight: true,
      amenities: ['Free WiFi', 'Breakfast', 'Room Service', 'Restaurant'],
      availableRooms: 3,
    },
    {
      name: 'Dar Al Taqwa Hotel',
      image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4,
      distance: '350m from Masjid al-Nabawi',
      price: '₹12,200',
      perNight: true,
      amenities: ['Free WiFi', 'Airport Shuttle', 'Restaurant'],
      availableRooms: 5,
    },
    {
      name: 'Makarem Ajyad Makkah Hotel',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4,
      distance: '500m from Masjid al-Haram',
      price: '₹9,800',
      perNight: true,
      amenities: ['Free WiFi', 'Breakfast', 'Restaurant'],
      availableRooms: 8,
    },
    {
      name: 'Shaza Madinah Hotel',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
      distance: '300m from Masjid al-Nabawi',
      price: '₹15,300',
      perNight: true,
      amenities: ['Free WiFi', 'Spa', 'Room Service', 'Restaurant'],
      availableRooms: 2,
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
        <title>Hotel Booking - ZAFCO</title>
        <meta name="description" content="Book hotels in Mecca and Madinah for your Umrah journey. Find accommodations close to the holy sites at competitive rates." />
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
              Book Hotels for Your Umrah Journey
            </motion.h1>
            <motion.p 
              className="text-lg mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Find accommodations near the holy sites in Mecca and Madinah at competitive rates.
            </motion.p>

            <motion.div 
              className="bg-white rounded-xl shadow-xl p-6 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <form onSubmit={handleSearch}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                    <div className="relative">
                      <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 appearance-none">
                        <option value="mecca">Mecca</option>
                        <option value="madinah">Madinah</option>
                        <option value="jeddah">Jeddah</option>
                      </select>
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building size={18} className="text-gray-400" />
                      </div>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ChevronDown size={18} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Distance from Haram</label>
                    <div className="relative">
                      <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 appearance-none">
                        <option value="500">Within 500m</option>
                        <option value="1000">Within 1km</option>
                        <option value="2000">Within 2km</option>
                        <option value="any">Any Distance</option>
                      </select>
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin size={18} className="text-gray-400" />
                      </div>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ChevronDown size={18} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="md:col-span-2 grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                      <div className="relative">
                        <input 
                          type="date" 
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          defaultValue="2025-05-20"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar size={18} className="text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Rooms</label>
                    <div className="relative">
                      <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 appearance-none">
                        <option value="1">1 Room</option>
                        <option value="2">2 Rooms</option>
                        <option value="3">3 Rooms</option>
                        <option value="4+">4+ Rooms</option>
                      </select>
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building size={18} className="text-gray-400" />
                      </div>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ChevronDown size={18} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                    <div className="relative">
                      <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 appearance-none">
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5+">5+ Guests</option>
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
                    Search Hotels
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
              Hotel Search Results
            </motion.h2>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center text-sm">
                  <span className="font-medium mr-2">Filters:</span>
                  <button className="px-3 py-1 bg-gray-100 rounded-full mr-2 hover:bg-gray-200">
                    5 Star
                  </button>
                  <button className="px-3 py-1 bg-gray-100 rounded-full mr-2 hover:bg-gray-200">
                    4 Star
                  </button>
                  <button className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200">
                    Free Breakfast
                  </button>
                </div>
                <div className="flex items-center text-sm">
                  <span className="font-medium mr-2">Sort by:</span>
                  <select className="bg-gray-100 px-3 py-1 rounded-md border-none focus:ring-2 focus:ring-primary-500">
                    <option>Distance from Haram</option>
                    <option>Price: Low to High</option>
                    <option>Rating: Highest First</option>
                    <option>Popularity</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {hotels.map((hotel, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg shadow-card border border-gray-100 overflow-hidden flex flex-col md:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="md:w-2/5 h-48 md:h-auto relative">
                    <img 
                      src={hotel.image} 
                      alt={hotel.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-xs font-semibold text-primary-600">
                      {hotel.availableRooms} rooms left
                    </div>
                  </div>
                  <div className="p-5 md:w-3/5 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold mb-1">{hotel.name}</h3>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={`${
                              i < hotel.rating ? 'text-accent-400 fill-accent-400' : 'text-gray-300'
                            } mr-1`}
                          />
                        ))}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <MapPin size={14} className="mr-1" />
                        {hotel.distance}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {hotel.amenities.map((amenity, i) => {
                          let icon;
                          if (amenity === 'Free WiFi') icon = <Wifi size={14} />;
                          if (amenity === 'Breakfast') icon = <Coffee size={14} />;
                          if (amenity === 'Room Service') icon = <Bath size={14} />;
                          if (amenity === 'Restaurant') icon = <Utensils size={14} />;
                          if (amenity === 'Airport Shuttle') icon = <ArrowRight size={14} />;
                          if (amenity === 'Spa') icon = <Coffee size={14} />;
                          
                          return (
                            <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full flex items-center">
                              {icon && <span className="mr-1">{icon}</span>}
                              {amenity}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <div className="mt-auto flex flex-wrap items-end justify-between">
                      <div>
                        <div className="text-2xl font-bold text-primary-600">{hotel.price}</div>
                        <div className="text-xs text-gray-500">{hotel.perNight ? 'per night' : 'total'}</div>
                      </div>
                      <Button variant="primary">
                        Select Room
                      </Button>
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
            <h2 className="text-3xl font-bold mb-4 text-gray-800 font-heading">Why Book Hotels with ZAFCO</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the best hotel booking service tailored for Umrah travelers.
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
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Prime Locations</h3>
              <p className="text-gray-700">
                We offer hotels near the holy sites in Mecca and Madinah, providing easy access for your pilgrimage.
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
                <Star size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Quality Accommodations</h3>
              <p className="text-gray-700">
                All our partner hotels are vetted for quality, cleanliness, and service to ensure a comfortable stay.
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
                <Wifi size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Modern Amenities</h3>
              <p className="text-gray-700">
                Enjoy modern amenities like free WiFi, room service, and comfortable furnishings during your stay.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800 font-heading">Our Featured Hotels</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of hotels that offer exceptional value and convenience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {hotels.slice(0, 3).map((hotel, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-card border border-gray-100 overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 relative">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-primary-600 text-white px-3 py-1 text-sm font-semibold">
                    Featured
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-lg font-semibold mb-1">{hotel.name}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < hotel.rating ? 'text-accent-400 fill-accent-400' : 'text-gray-300'
                        } mr-1`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin size={14} className="mr-1" />
                    {hotel.distance}
                  </div>
                  <div className="mt-auto">
                    <div className="text-xl font-bold text-primary-600 mb-3">{hotel.price} <span className="text-xs text-gray-500 font-normal">{hotel.perNight ? 'per night' : 'total'}</span></div>
                    <Button variant="primary" fullWidth>
                      View Details
                    </Button>
                  </div>
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
              <h2 className="text-3xl font-bold mb-4 text-gray-800 font-heading">Ready to Book Your Stay?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Start your search now and find the perfect accommodation for your Umrah journey.
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
                Search Hotels
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

export default HotelsPage;