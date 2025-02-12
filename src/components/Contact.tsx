import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactItem = ({ icon: Icon, title, value, link }: {
  icon: React.ElementType;
  title: string;
  value: string;
  link?: string;
}) => (
  <motion.div 
    className="text-center"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
    {link ? (
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
        {value}
      </a>
    ) : (
      <p className="text-gray-600 dark:text-gray-300">{value}</p>
    )}
  </motion.div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Let's connect and discuss opportunities</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <ContactItem
            icon={Mail}
            title="Email"
            value="kushsinha960@gmail.com"
            link="mailto:kushsinha960@gmail.com"
          />
          
          <ContactItem
            icon={Phone}
            title="Phone"
            value="+91 9667846370"
            link="tel:+919667846370"
          />
          
          <ContactItem
            icon={MapPin}
            title="Location"
            value="Noida, Uttar Pradesh"
          />
        </div>

        <div className="flex justify-center gap-8 mt-12">
          <motion.a
            href="https://github.com/KUSHx123"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Github className="h-8 w-8" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/kush-raman-sinha-z52/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Linkedin className="h-8 w-8" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;