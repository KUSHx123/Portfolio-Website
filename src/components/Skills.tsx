import React from 'react';
import { Code2, Database, Book, Terminal, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const SkillCategory = ({ title, skills, icon: Icon, index }: {
  title: string;
  skills: string[];
  icon: React.ElementType;
  index: number;
}) => (
  <motion.div 
    className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <motion.span
          key={index}
          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
          whileHover={{ scale: 1.05 }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["Python", "Java", "C", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Technologies & Frameworks",
      icon: Database,
      skills: ["SQL", "MongoDB", "ReactJS", "NumPy", "Pandas", "Git"]
    },
    {
      title: "Developer Tools",
      icon: Terminal,
      skills: ["VS Code", "GitHub", "Google Colab", "Jupyter Notebook", "Android Studio"]
    },
    {
      title: "Core Subjects",
      icon: Book,
      skills: ["Operating System", "DBMS", "OOPs", "DSA", "Cloud Security"]
    },
    {
      title: "Soft Skills",
      icon: Award,
      skills: ["Team Player", "Problem-Solving", "Teamwork", "Critical Thinking", "Adaptability"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;