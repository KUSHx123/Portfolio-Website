import React, { useState } from 'react';
import { Github, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  longDescription: string;
  features: string[];
  challenges: string[];
  learnings: string[];
};

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6"
      onClick={e => e.stopPropagation()}
    >
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
        <button onClick={onClose} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
          <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Overview</h3>
          <p className="text-gray-600 dark:text-gray-300">{project.longDescription}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Key Features</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technical Challenges</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
            {project.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Key Learnings</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
            {project.learnings.map((learning, index) => (
              <li key={index}>{learning}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <motion.a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github className="h-5 w-5 mr-2" />
          View on GitHub
        </motion.a>
      </div>
    </motion.div>
  </motion.div>
);

const ProjectCard = ({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) => (
  <motion.div 
    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    onClick={onClick}
  >
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <motion.div
        className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        whileHover={{ x: 5 }}
      >
        <Github className="h-5 w-5 mr-2" />
        View Details
      </motion.div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "To-Do List",
      description: "Designed and implemented a responsive to-do list application with dynamic functionality for adding, editing, and deleting tasks efficiently.",
      longDescription: "A comprehensive task management application built with modern web technologies. The application features a clean, intuitive interface that allows users to efficiently organize their tasks with real-time updates and persistent storage.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/KUSHx123/TO-DO-LIST",
      features: [
        "Real-time task updates",
        "Drag and drop task reordering",
        "Task categories and priority levels",
        "Local storage persistence",
        "Responsive design for all devices"
      ],
      challenges: [
        "Implementing smooth drag and drop functionality",
        "Managing complex state updates",
        "Ensuring data persistence across sessions",
        "Optimizing performance for large task lists"
      ],
      learnings: [
        "Advanced DOM manipulation techniques",
        "State management best practices",
        "Local storage optimization",
        "Performance optimization strategies"
      ]
    },
    {
      title: "E-commerce UI",
      description: "Utilized modern web technologies to design and implement a responsive e-commerce user interface with optimized navigation and performance.",
      longDescription: "A modern e-commerce interface that focuses on user experience and performance. The project implements best practices in web development and features a responsive design that works seamlessly across all devices.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/KUSHx123/E-Commerce-Product-Page",
      features: [
        "Responsive product grid layout",
        "Advanced filtering and sorting",
        "Shopping cart functionality",
        "Product quick view",
        "Wishlist management"
      ],
      challenges: [
        "Creating a responsive grid system",
        "Implementing efficient search and filter",
        "Optimizing image loading",
        "Managing complex state across components"
      ],
      learnings: [
        "Advanced CSS Grid and Flexbox",
        "Performance optimization techniques",
        "State management patterns",
        "Responsive design best practices"
      ]
    },
    {
      title: "Password Strength Checker",
      description: "Developed a comprehensive password strength checker with real-time feedback using Python backend and modern frontend technologies.",
      longDescription: "A security-focused application that helps users create strong passwords by providing real-time feedback on password strength. The application uses advanced algorithms to analyze password complexity and provides specific recommendations for improvement.",
      technologies: ["HTML", "CSS", "JavaScript", "Python"],
      githubUrl: "https://github.com/KUSHx123/PASSWORD-STRENGTH-CHECKER",
      features: [
        "Real-time strength analysis",
        "Visual strength indicators",
        "Specific improvement suggestions",
        "Common password detection",
        "Password generation suggestions"
      ],
      challenges: [
        "Implementing secure password analysis",
        "Creating accurate strength algorithms",
        "Handling real-time validation",
        "Balancing security and user experience"
      ],
      learnings: [
        "Security best practices",
        "Python-JavaScript integration",
        "Regular expressions",
        "User interface feedback patterns"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;