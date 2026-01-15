import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      image: '📋',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Weather Dashboard',
      description:
        'A beautiful weather dashboard with location-based forecasts and interactive maps.',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
      image: '🌤️',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Social Media Analytics',
      description:
        'Analytics platform for social media metrics with data visualization and reporting tools.',
      technologies: ['React', 'Python', 'PostgreSQL', 'D3.js'],
      image: '📊',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Fitness Tracker',
      description:
        'Mobile-first fitness tracking app with workout plans, progress tracking, and social features.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'GraphQL'],
      image: '💪',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Blog Platform',
      description:
        'A modern blogging platform with markdown support, SEO optimization, and content management.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS'],
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

