import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, Award, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Fast Processing',
      description: 'Get your Umrah visa processed quickly with our three service tiers, including super rush processing.',
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: 'Guaranteed Approval',
      description: 'Our expertise ensures high approval rates for eligible applicants, giving you peace of mind.',
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: 'Expert Guidance',
      description: 'Our experienced team provides complete guidance through every step of the Umrah visa process.',
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: 'Customer Support',
      description: '24/7 customer support via phone, email, and WhatsApp to address all your queries and concerns.',
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-16 bg-primary-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-100 rounded-full opacity-70"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-100 rounded-full opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 font-heading">Why Choose ZAFCO</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            With years of experience in Umrah visa services, we have helped thousands of pilgrims fulfill their spiritual journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-card border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-3 bg-primary-100 rounded-full w-14 h-14 flex items-center justify-center mb-5 text-primary-600">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;