// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('AboutMe');

  const renderSection = () => {
    switch (activeSection) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow-1">{renderSection()}</main>
      <Footer />
    </div>
  );
}

export default App;
