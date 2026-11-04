
import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="availability">
          <span className="status-dot"></span>
          Available for opportunities
        </div>

        <p className="hero-greeting">HELLO, I'M</p>

        <h1>
          Your Name<span>.</span>
        </h1>

        <h2>
          Full Stack Developer
        </h2>

        <p className="hero-description">
          I build modern, responsive and user-friendly
          web applications. I love turning ideas into
          beautiful digital experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View My Work ↗
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-card">
          <div className="code-icon">{"</>"}</div>
          <h3>Building Digital</h3>
          <h3 className="blue-text">Experiences.</h3>
          <p>Design. Develop. Deliver.</p>
        </div>

        <div className="floating-tag tag-one">
          React.js
        </div>

        <div className="floating-tag tag-two">
          Node.js
        </div>
      </div>
    </section>
  );
}

export default Hero;
