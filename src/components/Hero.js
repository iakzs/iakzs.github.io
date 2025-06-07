import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <header id="hero">
      <h1>Welcome to iakzs.dev</h1>
      <p>Hi, I'm iakzs. Developer and sleeping enthusiast.</p>
      <button 
        className="btn" 
        onClick={() => scrollToSection('projects')}
      >
        View my projects
      </button>
    </header>
  );
};

export default Hero;
