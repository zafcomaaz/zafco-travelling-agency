import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const CallToAction = () => {
  return (
    <section className="py-16 bg-primary-700 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-600 rounded-full opacity-30 -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600 rounded-full opacity-30 translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 font-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Begin Your Spiritual Journey?
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Take the first step toward your Umrah journey today. Our team is ready to assist you with visa processing, flight bookings, and hotel reservations.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              variant="secondary" 
              size="lg" 
              to="/umrah-visa"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              Apply for Umrah Visa
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              to="/contact"
              className="border-white text-white hover:bg-white/20"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;