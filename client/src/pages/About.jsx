
import React from "react";
import profileImage from "../assets/proile image.jpeg";

function About() {
  return (
    <div className="about-page">

      {/* ABOUT HERO */}
      <section className="about-hero">

        <div className="about-intro">
          <p className="section-label">GET TO KNOW ME</p>

          <h1>
            About <span>Me.</span>
          </h1>

          <p className="about-subtitle">
            A passionate developer focused on building
            modern and meaningful digital experiences.
          </p>
        </div>

        <div className="about-profile">
          <div className="profile-placeholder">
             <img src={profileImage} alt="My Profile" />
          </div>
          <div className="profile-tag">
            Full Stack Developer
          </div>
        </div>

      </section>

      {/* ABOUT CONTENT */}
      <section className="about-content">

        <div className="about-text">
          <p className="section-label">WHO I AM</p>

          <h2>
            Turning ideas into
            <span> digital reality.</span>
          </h2>

          <p>
            Hello! I'm Your Name, a web developer passionate
            about creating beautiful, functional and
            user-friendly applications.
          </p>

          <p>
            I enjoy working with modern web technologies,
            solving problems and continuously learning
            new things. My goal is to create digital
            experiences that are both visually appealing
            and technically strong.
          </p>

          <p>
            I believe great development is not just about
            writing code. It's about understanding problems
            and building solutions that make a difference.
          </p>

        </div>

        <div className="about-details">

          <div className="detail-card">
            <span>01</span>
            <h3>Clean Code</h3>
            <p>
              Writing organized, maintainable and
              reusable code.
            </p>
          </div>

          <div className="detail-card">
            <span>02</span>
            <h3>Problem Solving</h3>
            <p>
              Finding practical solutions to
              development challenges.
            </p>
          </div>

          <div className="detail-card">
            <span>03</span>
            <h3>Continuous Learning</h3>
            <p>
              Exploring new technologies and
              improving my skills.
            </p>
          </div>

        </div>

      </section>

      {/* CAREER SECTION */}
      <section className="career-section">

        <div className="section-heading">
          <p className="section-label">MY JOURNEY</p>
          <h2>Learning & <span>Growing.</span></h2>
          <p>
            Every project is another opportunity to improve.
          </p>
        </div>

        <div className="timeline">

          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <div>
              <p>01 — FOUNDATION</p>
              <h3>Started Learning Web Development</h3>
              <p>
                Building my foundation in HTML, CSS,
                JavaScript and modern web development.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <div>
              <p>02 — DEVELOPMENT</p>
              <h3>Exploring React & MERN Stack</h3>
              <p>
                Learning React, Node.js, Express
                and MongoDB to build full-stack applications.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <div>
              <p>03 — THE FUTURE</p>
              <h3>Building Real-World Projects</h3>
              <p>
                Improving my development workflow and
                creating useful applications.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="about-cta">
        <p className="section-label">LET'S CONNECT</p>
        <h2>Have an interesting idea?</h2>
        <p>
          Let's collaborate and build something amazing together.
        </p>

        <a href="/#contact" className="primary-btn">
          Contact Me ↗
        </a>
      </section>

    </div>
  );
}

export default About;
