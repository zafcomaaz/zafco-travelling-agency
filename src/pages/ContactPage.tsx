import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin 
} from 'lucide-react';
import Button from '../components/ui/Button';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Helmet>
        <title>Contact Us - ZAFCO</title>
        <meta name="description" content="Contact ZAFCO for inquiries about Umrah visa services, flight bookings, hotel reservations, or any other questions." />
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
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Get in touch with our team for inquiries about Umrah visa services, flight bookings, hotel reservations, or any other questions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-800 font-heading">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option value="">Select a subject</option>
                      <option value="umrah-visa">Umrah Visa Inquiry</option>
                      <option value="flight-booking">Flight Booking</option>
                      <option value="hotel-reservation">Hotel Reservation</option>
                      <option value="document-attestation">Document Attestation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea 
                      rows={5} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                  <Button 
                    variant="primary" 
                    type="submit"
                    icon={<Send size={18} />}
                  >
                    Send Message
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-800 font-heading">Contact Information</h2>
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <div className="bg-primary-100 p-3 rounded-full text-primary-600 mr-4">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Office Address</h3>
                        <p className="text-gray-600">123 Business Street, Connaught Place, New Delhi, India - 110001</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-100 p-3 rounded-full text-primary-600 mr-4">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone Number</h3>
                        <p className="text-gray-600">
                          <a href="tel:+919717460294" className="hover:text-primary-600 transition-colors">
                            +91 9717460294
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-100 p-3 rounded-full text-primary-600 mr-4">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email Address</h3>
                        <p className="text-gray-600">
                          <a href="mailto:info@zafco.com" className="hover:text-primary-600 transition-colors">
                            info@zafco.com
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-100 p-3 rounded-full text-primary-600 mr-4">
                        <Clock size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-4 font-heading">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2 
              className="text-2xl font-bold mb-6 text-gray-800 font-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Location
            </motion.h2>
            <motion.div 
              className="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5232652972065!2d77.21764851508547!3d28.632588682417615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1653457896254!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="ZAFCO Office Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
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
              Find answers to common questions about our services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How can I track my Umrah visa application status?",
                answer: "You can track your Umrah visa application status by logging into your account on our website or by contacting our customer support team with your application reference number."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit/debit cards, net banking, UPI, and wallet payments. All transactions are secured with industry-standard encryption."
              },
              {
                question: "How do I cancel or modify my flight or hotel booking?",
                answer: "To cancel or modify your booking, please contact our customer support team at least 48 hours before your scheduled departure or check-in date. Cancellation fees may apply as per the airline or hotel's policy."
              },
              {
                question: "Do you offer group discounts for Umrah travel?",
                answer: "Yes, we offer special discounts for group bookings of 10 or more travelers. Please contact our sales team for more information on group packages and discounts."
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
              <h2 className="text-3xl font-bold mb-4 text-gray-800 font-heading">Need Immediate Assistance?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our customer support team is available to help you with any questions or concerns.
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
                icon={<Phone size={20} />}
                href="tel:+919717460294"
              >
                Call Us Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                icon={<MessageSquare size={20} />}
                href="#"
              >
                Live Chat
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;