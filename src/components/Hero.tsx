import React from 'react';
import { ArrowRight, FileDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center"
      style={{
        background: 'linear-gradient(45deg, #fdf6e3, #f5deb3, #fffaf0, #fdf6e3)', 
        backgroundSize: '400% 400%',
        animation: 'gradientAnimation 12s ease infinite'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 animate-gradient"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Kush Raman Sinha!</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Full Stack Developer | IT Student | Tech Enthusiast
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1UL1xvF3_heJvCCTjsr3NvB-w7ddort0h/view?usp=sharing"
              download
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-base font-medium rounded-md text-blue-600 hover:bg-blue-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
              <FileDown className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Animated Background */}
      <style>
        {`
          @keyframes gradientAnimation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
