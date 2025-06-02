import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '../ui/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "ZAFCO made my Umrah journey smooth and hassle-free. The visa was processed quickly, and their customer support was excellent throughout.",
      author: "Aisha Khan",
      location: "New Delhi, India",
      rating: 5,
    },
    {
      quote: "I was worried about the visa process, but ZAFCO guided me through every step. Their flight booking service also helped me save money.",
      author: "Mohammed Patel",
      location: "Mumbai, India",
      rating: 5,
    },
    {
      quote: "The hotel they booked for us was just a 5-minute walk from Masjid al-Haram. Perfect location and great service!",
      author: "Fatima Rahman",
      location: "Kolkata, India",
      rating: 4,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 font-heading">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience with ZAFCO.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
              rating={testimonial.rating}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;