import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ThankYou = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-primary/5 px-4 py-16">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-primary/20 rounded-full"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/10 rounded-full"></div>
      
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 relative z-10">
        {/* Success checkmark animation */}
        <div className="flex justify-center mb-8">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.2 
            }}
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center"
          >
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-12 w-12 text-green-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={3} 
                d="M5 13l4 4L19 7" 
              />
            </motion.svg>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Thank You for Reaching Out!</h1>
          
          <p className="text-lg text-gray-600 mb-6">
            We've received your message and appreciate your interest in our services. 
            Our team will review your inquiry and get back to you within 24 hours.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">What happens next?</h2>
            <ul className="text-left space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-primary font-bold">1</span>
                </span>
                <span className="text-gray-600">Our team will carefully review your requirements</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-primary font-bold">2</span>
                </span>
                <span className="text-gray-600">A specialist will contact you to discuss your project in detail</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-primary font-bold">3</span>
                </span>
                <span className="text-gray-600">We'll prepare a tailored proposal based on your needs</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/"
              className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-1"
            >
              Back to Home
            </Link>
            <Link 
              to="/services"
              className="bg-white border border-primary text-primary hover:bg-primary/10 font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              Explore Our Services
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Additional contact information */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="mt-8 text-center text-gray-600"
      >
        <p>If you have any urgent inquiries, please contact us directly:</p>
        <p className="font-medium text-primary mt-2">contact@ruribits.com | +91 98842 50324</p>
      </motion.div>
    </div>
  );
};

export default ThankYou;