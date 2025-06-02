import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  delay?: number;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  link,
  delay = 0
}) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-card p-6 border border-gray-100 h-full flex flex-col transition-all duration-300 hover:shadow-card-hover"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="p-3 bg-primary-50 rounded-full w-14 h-14 flex items-center justify-center mb-5 text-primary-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 font-heading">{title}</h3>
      <p className="text-gray-600 flex-grow mb-4">{description}</p>
      <Button 
        variant="text" 
        to={link}
        icon={<ArrowRight size={16} />}
        iconPosition="right"
        className="mt-auto self-start"
      >
        Learn More
      </Button>
    </motion.div>
  );
};

export default ServiceCard;