import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, company, description, icon: Icon, index }: {
  year: string;
  title: string;
  company: string;
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
    <div className="absolute left-0 top-0 bg-blue-600 dark:bg-blue-500 rounded-full p-1">
      <Icon className="h-5 w-5 text-white" />
    </div>
    <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-8 ml-3 -mt-2">
      <span className="text-sm text-gray-500 dark:text-gray-400">{year}</span>
      <h3 className="font-bold text-lg text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 font-medium">{company}</p>
      <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
    </div>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      year: "May 2024 - June 2024",
      title: "Salesforce Developer Intern",
      company: "Salesforce",
      description: "Implemented Salesforce fundamentals, process automation, Apex programming, testing, debugging, and VS Code/CLI setups. Developed and integrated LWCs and APIs, enhancing user interfaces and optimizing business processes."
    },
    {
      year: "May 2024 - July 2024",
      title: "Research Intern",
      company: "Open Health Systems Laboratory (OHSL)",
      description: "Extracted and analyzed breast cancer prediction data using AI tools like Falcon, RAG and GPT. Utilized resources such as PubMed Central, PubMed, Kaggle, and Google Scholar for research."
    },
    {
      year: "May 2024 - July 2024",
      title: "Frontend Web Development Intern",
      company: "Motion Cut",
      description: "Learned and applied HTML, CSS, and JavaScript to build responsive and interactive web applications. Developed various projects, including a Price Landing Page, To-do list, Tiffin service website, and E-commerce site."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              year={exp.year}
              title={exp.title}
              company={exp.company}
              description={exp.description}
              icon={Briefcase}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;