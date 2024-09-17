// AboutMe.js
import React from 'react';

const AboutMe = () => (
  <section className="container my-5">
    <div className="row">
      <div className="col-md-4">
        <img src= "/images/pidge.png" alt="Kayla" className="img-fluid rounded-circle"/>
      </div>
      <div className="col-md-8">
        <h2>About Me</h2>
        <p>Hi, I'm Kayla, a passionate student of web development, soon to be joining the wider work force. I am currently 21 years old, and was born in San Antonio, Texas. I love to read, and I also love to learn. Feel free to explore some of the projects I've completed here to get to know my work a little better!</p>
      </div>
    </div>
  </section>
);

export default AboutMe;