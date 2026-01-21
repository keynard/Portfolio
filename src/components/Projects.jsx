import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  // Update these URLs to your deployed apps (or local dev URLs).
  // Examples:
  // - Laravel CRUD: http://localhost:8000
  // - Dashboard:    http://localhost:5173/dashboard
  const LARAVEL_CRUD_URL = 'https://example.com'
  const DASHBOARD_URL = 'https://example.com'

  const projects = [
    {
      title: 'Laravel CRUD (Demo)',
      description:
        'Simple Laravel CRUD application (create, read, update, delete) with MySQL/SQL.',
      technologies: ['Laravel', 'MySQL', 'CRUD'],
      image: '🧩',
      github: 'https://github.com/keynard/laptop-rental.git',
      demo: 'https://laptop-rental-mof3.onrender.com',
    },
    {
      title: 'Sample Dashboard',
      description:
        'A sample dashboard UI showcasing layout, components, and basic interactivity.',
      technologies: ['Laravel', 'blade', 'Bootstrap'],
      image: '📈',
      github: 'https://github.com/keynard/keyninc.git',
      demo:  'https://keyninc.vercel.app',
    },
   
    {
      title: 'EyeFlood',
      description:
        'Capstone Project: Mobile-Based Smart Flood Monitoring and Alert System for Real-Time Water Level Tracking and Notification',
      technologies: ['React Native', 'Firebase'],
      image: '✍️',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Some of my recent work and side projects
        </p>
      </div>

      <div className="project-cta">
        <a
          href={LARAVEL_CRUD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="project-cta-btn"
        >
          <FaExternalLinkAlt /> Open Laravel CRUD
        </a>
        <a
          href={DASHBOARD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="project-cta-btn"
        >
          <FaExternalLinkAlt /> Open Sample Dashboard
        </a>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <div className="project-emoji">{project.image}</div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label="GitHub"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label="Live Demo"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

