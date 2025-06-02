import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

// Import components
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import UmrahProcess from '../components/home/UmrahProcess';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Helmet>
        <title>ZAFCO - Umrah Visa & Travel Services</title>
        <meta name="description" content="ZAFCO provides hassle-free Umrah visa services, flight bookings, and hotel reservations for your spiritual journey." />
      </Helmet>

      <Hero />
      <Services />
      <UmrahProcess />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </motion.div>
  );
};

export default HomePage;