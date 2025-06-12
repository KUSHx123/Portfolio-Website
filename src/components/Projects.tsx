import React, { useState } from 'react';
import { Github, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
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

        <div className="flex gap-4 mt-4">
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

          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 Live Demo
            </motion.a>
          )}
        </div>
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
      title: "Heart Disease Prediction Web App",
      description: "Developed a machine learning-powered web application to predict heart disease based on user medical input.",
      longDescription: "A full-stack application that uses Logistic Regression and Random Forest models to predict the likelihood of heart disease. The app features a responsive React UI, secure FastAPI backend, and Supabase for user data storage. It is deployed on Vercel (frontend) and Railway (backend).",
      technologies: ["React", "TypeScript", "FastAPI", "Python", "scikit-learn", "Supabase"],
      githubUrl: "https://github.com/KUSHx123/Heart-Disease-Prediction-Application",
      liveUrl: "https://heart-disease-prediction-application.vercel.app/",
      features: [
        "Heart disease risk prediction using ML",
        "User authentication and data storage with Supabase",
        "Interactive input form for health parameters",
        "Responsive UI with result visualization",
        "Live deployment using Vercel and Railway"
      ],
      challenges: [
        "Integrating ML models into FastAPI backend",
        "Handling asynchronous data flow between frontend and backend",
        "Ensuring accuracy of predictions",
        "Deployment and CI/CD setup for full-stack app"
      ],
      learnings: [
        "Connecting ML with real-world frontend interfaces",
        "REST API development using FastAPI",
        "Model training, evaluation, and integration",
        "Full-stack deployment strategies"
      ]
    },
    {
      title: "Doctor Appointment Booking System",
      description: "Created a MERN stack application for booking doctor appointments with real-time updates and secure access.",
      longDescription: "A user-friendly doctor appointment platform with secure login, real-time appointment management, and intuitive browsing. Users can view doctor profiles, check availability, and book appointments efficiently. Built with MERN stack and deployed for public access.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      githubUrl: "https://github.com/KUSHx123/Doctor-Appointment-Booking-System",
      liveUrl: "https://prescripto.vercel.app/",
      features: [
        "User registration and authentication",
        "Doctor profile browsing and availability checking",
        "Real-time appointment booking system",
        "Admin panel for doctor and appointment management",
        "Responsive and intuitive UI/UX"
      ],
      challenges: [
        "Implementing role-based access control",
        "Real-time updates using database triggers",
        "Ensuring secure appointment workflows",
        "Creating reusable and dynamic UI components"
      ],
      learnings: [
        "MERN stack integration and best practices",
        "Authentication flows and security",
        "Full-stack app design and optimization",
        "MongoDB schema design and queries"
      ]
    },
    {
      title: "Portfolio Website",
      description: "Designed a modern and responsive portfolio site to showcase projects, skills, and contact information.",
      longDescription: "A visually appealing personal portfolio website built using React, TypeScript, and Tailwind CSS. It includes an interactive project section, resume link, and contact form. Optimized for performance and responsiveness across devices, deployed on Netlify.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/KUSHx123/Portfolio-Website",
      liveUrl: "https://kush-portfolio52.netlify.app/",
      features: [
        "Project showcase section with detailed views",
        "Responsive design across mobile and desktop",
        "Interactive contact form with validation",
        "Clean and modern user interface",
        "Live deployment on Netlify"
      ],
      challenges: [
        "Creating a fully responsive layout with Tailwind",
        "Maintaining design consistency and theming",
        "Form validation and accessibility",
        "Optimizing images and assets for performance"
      ],
      learnings: [
        "Tailwind CSS utility-first styling",
        "TypeScript with React for scalable UI",
        "Frontend deployment pipelines",
        "UI/UX design principles"
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
