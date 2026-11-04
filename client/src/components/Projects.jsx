
import React from "react";

const projects = [
  {
    number: "01",
    title: "E-Commerce Website",
    description:
      "A modern shopping platform with product listings, cart functionality and user authentication.",
    technologies: "React · Node.js · MongoDB",
    category: "Full Stack"
  },
  {
    number: "02",
    title: "Admin Dashboard",
    description:
      "A responsive dashboard for managing data, monitoring activities and viewing analytics.",
    technologies: "React · Express · CSS",
    category: "Frontend"
  },
  {
    number: "03",
    title: "Task Management App",
    description:
      "A productivity application for organizing tasks, managing workflows and tracking progress.",
    technologies: "MERN Stack",
    category: "Full Stack"
  }
];

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="section-heading">
        <p className="section-label">MY RECENT WORK</p>
        <h2>Featured Projects<span>.</span></h2>
        <p>
          Some of the projects I've worked on recently.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-top">
              <span>{project.number}</span>
              <span className="project-category">
                {project.category}
              </span>
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-bottom">
              <span>{project.technologies}</span>
              <span>↗</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
