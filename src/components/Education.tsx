import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, institution, description, icon: Icon, index }: {
  year: string;
  title: string;
  institution: string;
  description: string;
  icon: React.ElementType;
  index: number;
}) => (
  <motion.div 
    className="relative pl-8 pb-8"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
  >
    <div className="absolute left-0 top-0 bg-purple-600 dark:bg-purple-500 rounded-full p-1">
      <Icon className="h-5 w-5 text-white" />
    </div>
    <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-8 ml-3 -mt-2">
      <span className="text-sm text-gray-500 dark:text-gray-400">{year}</span>
      <h3 className="font-bold text-lg text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 font-medium">{institution}</p>
      <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
    </div>
  </motion.div>
);

const Education = () => {
  const education = [
    {
      year: "2021 - 2025",
      title: "Bachelor of Technology in Information Technology",
      institution: "Amity University",
      description: "CGPA: 7.19"
    },
    {
      year: "2020 - 2021",
      title: "Intermediate (XII)",
      institution: "Jeewan Public School",
      description: "Examination Score: 73.4%"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <TimelineItem
              key={index}
              year={edu.year}
              title={edu.title}
              institution={edu.institution}
              description={edu.description}
              icon={GraduationCap}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;