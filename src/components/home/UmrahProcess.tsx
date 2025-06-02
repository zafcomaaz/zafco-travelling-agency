import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, FileText, Search, CreditCard, Plane } from 'lucide-react';
import Button from '../ui/Button';

const UmrahProcess = () => {
  const steps = [
    {
      title: 'Apply Online',
      description: 'Fill out our simple online application form with your personal details and passport information.',
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: 'Document Verification',
      description: 'Our team will review your documents and verify your eligibility for an Umrah visa.',
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: 'Payment',
      description: 'Choose from our three processing packages and make a secure online payment.',
      icon: <CreditCard className="w-6 h-6" />,
    },
    {
      title: 'Receive Visa',
      description: 'Get your Umrah visa delivered to your email and prepare for your spiritual journey.',
      icon: <Plane className="w-6 h-6" />,
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 font-heading">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple 4-step process makes obtaining your Umrah visa quick and hassle-free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="text-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200"></div>
              )}
              
              {/* Step number and icon */}
              <div className="mx-auto w-20 h-20 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 border-2 border-primary-100 mb-4 relative z-10">
                {step.icon}
              </div>
              
              {/* Step number */}
              <div className="absolute top-0 right-0 md:right-auto md:left-1/2 md:-translate-x-1/2 -translate-y-1/3 bg-primary-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              
              <h3 className="text-xl font-semibold mb-2 font-heading">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button 
            variant="primary" 
            size="lg" 
            to="/umrah-visa"
            icon={<CheckCircle size={20} />}
          >
            Apply for Umrah Visa Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default UmrahProcess;