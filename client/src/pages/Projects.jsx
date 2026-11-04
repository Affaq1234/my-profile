
import React from "react";

const projectList = [
  {
    id: 1,
    title: "E-Commerce Website",
    category: "Full Stack",
    description:
      "A modern online shopping platform featuring product listings, shopping cart, user authentication and order management.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "",
    demo: "",
    icon: "🛍️",
    color: "project-blue"
  },
  {
    id: 2,
    title: "Admin Dashboard",
    category: "Frontend",
    description:
      "A responsive admin dashboard featuring data visualization, analytics, user management and an intuitive interface.",
    technologies: ["React", "JavaScript", "CSS"],
    github: "",
    demo: "",
    icon: "📊",
    color: "project-purple"
  },
  {
    id: 3,
    title: "Task Management App",
    category: "Full Stack",
    description:
      "A productivity application that helps users organize tasks, manage projects and track their daily progress.",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "",
    demo: "",
    icon: "📋",
    color: "project-green"
  }
];

function Projects() {
  return (
    <div className="projects-page">

      {/* PAGE HEADER */}
      <section className="projects-hero">
        <p className="section-label">MY PORTFOLIO</p>

        <h1>
          My <span>Projects.</span>
        </h1>

        <p>
          Explore some of my work, experiments and
          development projects. Each project represents
          an opportunity to learn and create something new.
        </p>
      </section>

      {/* PROJECT COLLECTION */}
      <section className="projects-showcase">

        <div className="projects-heading">
          <div>
            <p className="section-label">WHAT I'VE BUILT</p>
            <h2>Featured Work<span>.</span></h2>
          </div>

          <span className="project-count">
            {projectList.length} Projects
          </span>
        </div>

        <div className="projects-page-grid">

          {projectList.map((project) => (
            <article className="project-page-card" key={project.id}>

              {/* PROJECT IMAGE PLACEHOLDER */}
              <div className={`project-preview ${project.color}`}>
                <span className="project-icon">
                  {project.icon}
                </span>

                <span className="preview-number">
                  0{project.id}
                </span>
              </div>

              {/* PROJECT DETAILS */}
              <div className="project-page-content">

                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>PROJECT 0{project.id}</span>
                </div>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="technology-list">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {/* PROJECT LINKS */}
                <div className="project-actions">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {!project.github && !project.demo && (
                    <span className="project-coming-soon">
                      Add project links
                    </span>
                  )}

                </div>

              </div>
            </article>
          ))}

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="projects-cta">
        <p className="section-label">HAVE AN IDEA?</p>

        <h2>
          Let's build something <span>great.</span>
        </h2>

        <p>
          I'm always interested in exploring new ideas
          and working on exciting projects.
        </p>

        <a href="/#contact" className="primary-btn">
          Let's Talk ↗
        </a>
      </section>

    </div>
  );
}

export default Projects;
