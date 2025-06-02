import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Calendar, 
  FileCheck,
  FileText,
  CreditCard,
  Mail 
} from 'lucide-react';
import Button from '../components/ui/Button';

const UmrahVisaPage = () => {
  const requirements = [
    'Valid passport with at least 6 months validity',
    'Digital passport-sized photograph',
    'Non-refundable return airline ticket',
    'Proof of relationship with Mahram (for women)',
    'Vaccination proof against meningitis',
    'COVID-19 vaccination certificate',
  ];

  const packages = [
    {
      name: 'Standard',
      price: '₹15,000',
      processing: '10-15 business days',
      description: 'Best for those planning well in advance',
      features: [
        'Umrah visa processing',
        'Document verification',
        'Email support',
        'Application status tracking',
      ],
      color: 'bg-primary-50 border-primary-100 text-primary-700',
      buttonColor: 'primary',
    },
    {
      name: 'Fast',
      price: '₹22,500',
      processing: '5-7 business days',
      description: 'For those who need their visa processed quickly',
      features: [
        'Everything in Standard',
        'Expedited processing',
        'Priority verification',
        'Phone support',
      ],
      color: 'bg-accent-50 border-accent-100 text-accent-700',
      buttonColor: 'secondary',
      recommended: true,
    },
    {
      name: 'Super Rush',
      price: '₹30,000',
      processing: '2-3 business days',
      description: 'For urgent travel needs',
      features: [
        'Everything in Fast',
        'Highest priority processing',
        'Express verification',
        '24/7 WhatsApp support',
        'Dedicated agent',
      ],
      color: 'bg-gray-50 border-gray-200 text-gray-700',
      buttonColor: 'outline',
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
        <title>Umrah Visa Services - ZAFCO</title>
        <meta name="description" content="Apply for your Umrah visa with ZAFCO. Fast, reliable, and hassle-free visa processing services for your pilgrimage." />
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
              Saudi Umrah Visa Services
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Apply for your Umrah visa with ZAFCO. Fast, reliable, and hassle-free visa processing services for your pilgrimage.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Button 
                variant="secondary" 
                size="lg" 
                to="#apply"
                icon={<FileCheck size={20} />}
              >
                Apply Now
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Umrah Visa */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold mb-6 text-gray-800 font-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What is an Umrah Visa?
            </motion.h2>
            <motion.div 
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p>
                The Umrah visa is a travel document issued by the government of Saudi Arabia that allows Muslims to enter the country to perform Umrah. A large number of Muslims prefer to perform Umrah in the holy month of Ramadan.
              </p>
              <p>
                During the Umrah trip, you have to visit the Masjid al-Haram and participate in various rituals such as the Tawaf around the Kabah and the Sai between the hills of As-Safa & Al-Marwa. This is not a Saudi Arabia tourist visa, although you can visit many places and can do tourism activities.
              </p>
              <h3 className="text-xl font-semibold mt-8 mb-4">Who needs an Umrah visa?</h3>
              <p>
                All foreign Muslim pilgrims have to apply for an Umrah e-visa or visa, except for citizens of Bahrain, Kuwait, Oman, and Qatar.
              </p>
              <p>
                In addition, as of April 2022, the Government of Saudi Arabia announced that anyone possessing a valid Schengen visa, US visa, or UK visa could perform Umrah without applying for a separate Umrah visa. This means that holders of a US or UK visa are also eligible for the visa-on-arrival program.
              </p>
              <h3 className="text-xl font-semibold mt-8 mb-4">How long is an Umrah visa valid?</h3>
              <p>
                The e-visa for Saudi Arabia is a multiple-entry visa with a maximum stay of 90 days in total. Therefore, you can enter and leave the country as often as you want within 90 days. Saudi Arabia E-visa expires one year after its issuance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800 font-heading">Requirements for Umrah Visa</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ensure you have all the necessary documents ready before applying for your Umrah visa.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-card p-8 border border-gray-100">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {requirements.map((requirement, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckCircle className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>{requirement}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div 
              className="mt-8 p-4 bg-primary-50 border-l-4 border-primary-600 rounded-r-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-start">
                <AlertCircle className="text-primary-600 mt-0.5 mr-3 flex-shrink-0" size={18} />
                <p className="text-primary-700">
                  <strong>Important:</strong> You will also need to provide a valid email address and payment method (debit/credit card) to complete your application.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="apply" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800 font-heading">Choose Your Processing Package</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the package that best suits your timeline and requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div 
                key={index}
                className={`rounded-lg border p-6 ${pkg.color} relative`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {pkg.recommended && (
                  <div className="absolute top-0 right-0 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    RECOMMENDED
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 font-heading">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                  <span className="text-sm opacity-70"> / person</span>
                </div>
                <div className="flex items-center mb-4 text-sm">
                  <Clock size={16} className="mr-2" />
                  <span>{pkg.processing}</span>
                </div>
                <p className="mb-6 text-sm">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckCircle size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={pkg.buttonColor as any}
                  fullWidth
                >
                  Select {pkg.name}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800 font-heading">Application Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Applying for an Umrah visa with ZAFCO is simple and straightforward.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-card border border-gray-100"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-3 bg-primary-50 rounded-full w-14 h-14 flex items-center justify-center mb-5 text-primary-600">
                  <FileText size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-heading">Step 1: Fill Out the Application Form</h3>
                <p className="text-gray-600 mb-4">
                  Provide general details about yourself and your trip to perform Umrah. Select your preferred Umrah package based on your budget and travel needs.
                </p>
                <Button variant="text" to="#apply">
                  Start Application
                </Button>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-lg shadow-card border border-gray-100"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="p-3 bg-primary-50 rounded-full w-14 h-14 flex items-center justify-center mb-5 text-primary-600">
                  <CreditCard size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-heading">Step 2: Make the Payment</h3>
                <p className="text-gray-600 mb-4">
                  Complete the payment process securely to proceed with your application. We accept all major credit/debit cards and net banking.
                </p>
                <Button variant="text" to="#apply">
                  View Payment Options
                </Button>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-lg shadow-card border border-gray-100"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="p-3 bg-primary-50 rounded-full w-14 h-14 flex items-center justify-center mb-5 text-primary-600">
                  <FileCheck size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-heading">Step 3: Submit Required Documents</h3>
                <p className="text-gray-600 mb-4">
                  Upload all necessary documents along with your application to finalize your Umrah visa. Our team will verify your documents.
                </p>
                <Button variant="text" to="#requirements">
                  Document Checklist
                </Button>
              </motion.div>

              <motion.div 
                className="bg-white p-6 rounded-lg shadow-card border border-gray-100"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="p-3 bg-primary-50 rounded-full w-14 h-14 flex items-center justify-center mb-5 text-primary-600">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-heading">Step 4: Receive Your Visa</h3>
                <p className="text-gray-600 mb-4">
                  Once approved, your Umrah visa will be sent to your email. You can download and print it for your travel to Saudi Arabia.
                </p>
                <Button variant="text" to="/contact">
                  Track Application
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800 font-heading">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about Umrah visa processing.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does it take to process an Umrah visa?",
                answer: "Processing time depends on the package you choose. Standard processing takes 10-15 business days, Fast processing takes 5-7 business days, and Super Rush processing takes 2-3 business days."
              },
              {
                question: "Can women apply for Umrah visa without a Mahram?",
                answer: "Women under 45 years of age need to be accompanied by a Mahram (a male relative they cannot marry) to apply for an Umrah visa. Women over 45 years may travel with an organized group without a Mahram."
              },
              {
                question: "Can I extend my Umrah visa while in Saudi Arabia?",
                answer: "Yes, you can extend your Umrah visa for up to 30 days by visiting the Ministry of Hajj and Umrah offices in Saudi Arabia. Extensions are granted on a case-by-case basis."
              },
              {
                question: "What if my Umrah visa application is rejected?",
                answer: "If your Umrah visa application is rejected, we will inform you of the reason and guide you on the next steps. In most cases, we can reapply after addressing the issue that led to the rejection."
              },
              {
                question: "Do I need travel insurance for Umrah?",
                answer: "While not mandatory, travel insurance is highly recommended for Umrah pilgrims. It provides coverage for medical emergencies, trip cancellations, and lost luggage."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="border border-gray-200 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer p-4 md:p-6">
                    <span className="text-lg font-semibold">{faq.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" width="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="p-4 pt-0 md:p-6 md:pt-0 text-gray-600">
                    {faq.answer}
                  </div>
                </details>
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
              <h2 className="text-3xl font-bold mb-4 text-gray-800 font-heading">Begin Your Umrah Journey Today</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Take the first step toward fulfilling your spiritual journey with ZAFCO's reliable Umrah visa services.
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
                to="#apply"
                icon={<FileCheck size={20} />}
              >
                Apply for Umrah Visa
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                to="/contact"
              >
                Contact Our Team
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default UmrahVisaPage;