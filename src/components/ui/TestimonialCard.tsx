import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

type TestimonialCardProps = {
  quote: string;
  author: string;
  location: string;
  rating: number;
  delay?: number;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  location,
  rating,
  delay = 0
}) => {
  return (
    <motion.div 
      className="bg-white rounded-lg p-6 shadow-card border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="mb-4 flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${
              i < rating ? 'text-accent-400 fill-accent-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <div className="bg-primary-100 text-primary-700 rounded-full h-10 w-10 flex items-center justify-center font-semibold mr-3">
          {author.split(' ').map(word => word[0]).join('')}
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{author}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;