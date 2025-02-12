import React from 'react';
import { Code, Palette, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Hello! My name is Kush, and I am a passionate technology enthusiast currently pursuing innovative projects in AI, machine learning, and full-stack web development. I have a keen interest in creating impactful solutions, such as my ongoing Heart Disease Prediction project, where I am integrating advanced machine learning techniques into a user-friendly web application.
Whether it's coding, designing, or brainstorming innovative solutions, I believe in pushing boundaries to achieve excellence and make a positive impact!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Code className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
                <h3 className="font-semibold mb-1 dark:text-white">Frontend</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">React, Angular</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Terminal className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
                <h3 className="font-semibold mb-1 dark:text-white">Backend</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Node.js, Python, Java</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Palette className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
                <h3 className="font-semibold mb-1 dark:text-white">Design</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">UI/UX, Figma</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden">
              <img
                src="https://d1io3yog0oux5.cloudfront.net/_eb26891da82d35321dd34c50f80d0ef7/adcc/db/361/2421/featured_image_article.jpg"
                alt="Professional workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;