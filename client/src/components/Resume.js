// Resume.js
import React from 'react';

const Resume = () => (
  <section className="container my-5">
    <h2>Resume</h2>
    <a href="/path/to/resume.pdf" download className="btn btn-secondary">Download Resume</a>
    <h3>Proficiencies</h3>
    <ul>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>HTML/CSS</li>
      {/* Add more skills here */}
    </ul>
  </section>
);

export default Resume;
