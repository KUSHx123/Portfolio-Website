import React from 'react';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

type Certification = {
  title: string;
  issuer: string;
  date: string;
  description: string;
};

const CertificationCard = ({ certification, index }: { certification: Certification; index: number }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <div className="p-6">
      <div className="flex items-start space-x-4">
        <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-3">
          <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{certification.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{certification.issuer}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{certification.date}</p>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{certification.description}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: "Cloud Computing",
      issuer: "NPTEL, IIT Kharagpur",
      date: "2023",
      description: "Comprehensive course covering cloud architecture, deployment models, and service frameworks."
    },
    {
      title: "Introduction to Internet of Things",
      issuer: "NPTEL, IIT Kharagpur",
      date: "2023",
      description: "In-depth study of IoT architecture, protocols, and applications in modern computing."
    },
    {
      title: "Innovation By Design",
      issuer: "NPTEL, IIT Bombay",
      date: "2023",
      description: "Course focused on design thinking, innovation methodologies, and creative problem-solving."
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Certifications</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Professional certifications and achievements</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              certification={cert}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;