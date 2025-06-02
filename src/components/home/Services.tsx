import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, Plane, Building, FileText } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Umrah Visa Services',
      description: 'Fast and reliable Umrah visa processing with three service tiers to match your schedule and budget.',
      icon: <FileCheck size={24} />,
      link: '/umrah-visa',
    },
    {
      title: 'Flight Booking',
      description: 'Compare prices from major airlines and get the best deals on flights to Jeddah and Madinah.',
      icon: <Plane size={24} />,
      link: '/flights',
    },
    {
      title: 'Hotel Reservation',
      description: 'Book accommodations near the holy sites in Mecca and Madinah at competitive rates.',
      icon: <Building size={24} />,
      link: '/hotels',
    },
    {
      title: 'Document Attestation',
      description: 'Professional attestation services for marriage certificates, death certificates, and more.',
      icon: <FileText size={24} />,
      link: '/services',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 font-heading">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive travel solutions to make your Umrah journey smooth and hassle-free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;