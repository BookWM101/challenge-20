import React from 'react';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  // Array of project objects, each containing a title, image, and project URL
  const projects = [
    {
      title: 'Website Using HTML and CSS',
      imageUrl: '/images/githubSymbol.svg',
      projectUrl: 'https://github.com/BookWM101/module-1-challenge.git',
    },
    {
      title: 'Simple Portfolio',
      imageUrl: '/images/githubSymbol.svg',
      projectUrl: 'https://github.com/BookWM101/module-2-challenge.git',
    },
    {
      title: 'Employee Payroll Tracker using Node.js',
      imageUrl: '/images/githubSymbol.svg',
      projectUrl: 'https://github.com/BookWM101/challenge-3',
    },
    {
      title: '2 page Blog Site',
      imageUrl: '/images/githubSymbol.svg',
      projectUrl: 'https://github.com/BookWM101/challenge-4',
    },
    {
      title: 'Simple Task Board Application',
      imageUrl: '/images/githubSymbol.svg',
      projectUrl: 'https://github.com/BookWM101/challenge-5',
    },
    {
      title: 'Weather API',
      imageUrl: '/images/githubSymbol.svg',
      projectUrl: 'https://github.com/BookWM101/challenge-6',
    },
    {
      title: 'README Generator using Node.js',
      imageUrl: '/images/githubSymbol.svg',
      projectUrl: 'https://github.com/BookWM101/challenge-6',
    },
    {
      title: 'Challenge 9',
      imageUrl: '/images/githubSymbol.svg',
      projectUrl: 'https://github.com/BookWM101/challenge-9',
    },
    {
      title: 'SVG File Generator using Node.js',
      imageUrl: '/images/githubSymbol.svg',
      projectUrl: 'https://github.com/BookWM101/challenge-10',
    },
    {
      title: 'Simple Express Note Taker App',
      imageUrl: '/images/githubSymbol.svg',
      projectUrl: 'https://github.com/BookWM101/challenge-11',
    },
    {
      title: 'Employee Manager Command Line App',
      imageUrl: '/images/githubSymbol.svg',
      projectUrl: 'https://github.com/BookWM101/challenge-12',
    },
    {
      title: 'Simple E-commerce Site',
      imageUrl: '/images/githubSymbol.svg',
      projectUrl: 'https://github.com/BookWM101/challenge-13',
    },
    {
      title: 'CMS Style Blog Site',
      imageUrl: '/images/githubSymbol.svg',
      projectUrl: 'https://github.com/BookWM101/challenge-14',
    },
    {
      title: 'Regex Tutorial Gist',
      imageUrl: '/images/githubSymbol.svg',
      projectUrl: 'https://github.com/BookWM101/challenge-17',
    },
    {
      title: 'Social Network API',
      imageUrl: '/images/githubSymbol.svg',
      projectUrl: 'https://github.com/BookWM101/challenge-18',
    },
    {
      title: 'Online and Offline Text Editor',
      imageUrl: '/images/githubSymbol.svg',
      projectUrl: 'https://github.com/BookWM101/challenge-19',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center">Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <ProjectCard 
              title={project.title} 
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;