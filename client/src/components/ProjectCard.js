import React from 'react';
import './ProjectCard.css'; // Assuming you have some custom styles

const ProjectCard = ({ title, imageUrl, projectUrl }) => {
  return (
    <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="project-card-link">
      <div className="card project-card">
        <div 
          className="card-body" 
          style={{ 
            backgroundImage: `url(${imageUrl})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            height: '300px', // Adjust the height as needed
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h5 className="card-title" style={{ color: '#fff', fontWeight: 'bold', background: 'rgba(0, 0, 0, 0.5)', padding: '10px' }}>
            {title}
          </h5>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
