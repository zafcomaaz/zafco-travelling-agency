import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Users, Clock, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Helmet>
        <title>About Us - ZAFCO</title>
        <meta name="description" content="Learn about ZAFCO, your trusted partner for Umrah visa services, flight bookings, and hotel reservations." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-800 text-white py-16 md:py-24 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3 opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3 opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 font-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              About ZAFCO
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Your trusted partner for Umrah visa services, flight bookings, and hotel reservations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-800 font-heading">Our Story</h2>
                <div className="prose prose-lg">
                  <p>
                    Founded in 2010, ZAFCO has been providing hassle-free Umrah visa services, flight bookings, and hotel reservations for thousands of pilgrims from India and around the world.
                  </p>
                  <p>
                    What started as a small family business has now grown into a trusted name in the travel industry, with a focus on making the Umrah journey smooth and memorable for our clients.
                  </p>
                  <p>
                    Our mission is to simplify the Umrah visa process and provide comprehensive travel solutions so that you can focus on your spiritual journey without worrying about logistics.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src="https://images.pexels.com/photos/18080243/pexels-photo-18080243/free-photo-of-muslim-people-walking-around-kaaba-in-mecca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Kaaba in Mecca" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800 font-heading">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide our work and ensure we provide the best service to our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-card border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-3 bg-primary-50 rounded-full w-14 h-14 flex items-center justify-center mb-5 text-primary-600">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every service we provide, ensuring the highest quality and attention to detail.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-card border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-3 bg-primary-50 rounded-full w-14 h-14 flex items-center justify-center mb-5 text-primary-600">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Customer-Centric</h3>
              <p className="text-gray-600">
                Our clients are at the heart of everything we do. We are committed to providing personalized service and support.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-card border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-3 bg-primary-50 rounded-full w-14 h-14 flex items-center justify-center mb-5 text-primary-600">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Efficiency</h3>
              <p className="text-gray-600">
                We value your time and work efficiently to process your applications and bookings without unnecessary delays.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-card border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-3 bg-primary-50 rounded-full w-14 h-14 flex items-center justify-center mb-5 text-primary-600">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Reliability</h3>
              <p className="text-gray-600">
                You can count on us to deliver on our promises and provide reliable services for your spiritual journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800 font-heading">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals who make ZAFCO a trusted name in Umrah visa services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Ahmed Khan",
                position: "Founder & CEO",
                bio: "With over 20 years of experience in the travel industry, Ahmed founded ZAFCO with a vision to simplify the Umrah journey for pilgrims.",
                image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Fatima Zaidi",
                position: "Visa Processing Manager",
                bio: "Fatima leads our visa processing team and ensures that all applications are handled efficiently and with utmost care.",
                image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Mohammed Ali",
                position: "Travel Consultant",
                bio: "Mohammed specializes in flight and hotel bookings, helping clients find the best deals for their Umrah journey.",
                image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Aisha Rahman",
                position: "Customer Support Lead",
                bio: "Aisha ensures that all client queries are addressed promptly and effectively, providing excellent customer service.",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-card border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-1 font-heading">{member.name}</h3>
                  <p className="text-primary-600 mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
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
              <h2 className="text-3xl font-bold mb-4 text-gray-800 font-heading">Ready to Begin Your Umrah Journey?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Let ZAFCO be your trusted partner in making your spiritual journey smooth and hassle-free.
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
                to="/umrah-visa"
              >
                Apply for Umrah Visa
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                to="/contact"
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;