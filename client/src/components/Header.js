// Header.js
import React from 'react';

const Header = ({ activeSection, setActiveSection }) => {
  const sections = ['AboutMe', 'Portfolio', 'Contact', 'Resume'];

  return (
    <header className="bg-light-blue py-3">
      <nav className="navbar navbar-expand-lg navbar-light container">
        <a className="navbar-brand" href="/">Kayla's Portfolio</a>
        <ul className="navbar-nav ms-auto">
          {sections.map((section) => (
            <li key={section} className="nav-item">
              <button
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                onClick={() => setActiveSection(section)}>
                {section}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
