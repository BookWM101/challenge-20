import React from 'react';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  // Array of project objects, each containing a title, image, and project URL
  const projects = [
    {
      title: 'Challenge 1',
      imageUrl: '/images/project1.jpg',
      projectUrl: '#',
    },
    {
      title: 'Challenge 2',
      imageUrl: '/images/project2.jpg',
      projectUrl: 'https://github.com/BookWM101/module-2-challenge.git',
    },
    {
      title: 'Project 3',
      imageUrl: '/images/project3.jpg',
      projectUrl: 'https://github.com/user/project3',
    },
    {
      title: 'Project 4',
      imageUrl: '/images/project4.jpg',
      projectUrl: 'https://github.com/user/project4',
    },
    {
      title: 'Project 5',
      imageUrl: '/images/project5.jpg',
      projectUrl: 'https://github.com/user/project5',
    },
    {
      title: 'Project 6',
      imageUrl: '/images/project6.jpg',
      projectUrl: 'https://github.com/user/project6',
    }
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

