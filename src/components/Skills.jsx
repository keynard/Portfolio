import React from 'react'
import { FaNetworkWired, FaServer, FaShieldAlt, FaWifi, FaRoute, FaCertificate, FaCode, FaDatabase, FaPalette, FaKey } from 'react-icons/fa'
import { SiCisco } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Networking Basics',
      skills: [
        { name: 'IP Addressing (Basics)', icon: <FaNetworkWired />, level: 80 },
        { name: 'Subnetting (Basics)', icon: <FaRoute />, level: 75 },
        { name: 'Routing & Switching (Basics)', icon: <FaRoute />, level: 75 },
        { name: 'LAN / WAN Concepts', icon: <FaWifi />, level: 70 },
      ],
    },
    {
      title: 'Basic Programming',
      skills: [
        { name: 'Programming Fundamentals', icon: <FaCode />, level: 70 },
        { name: 'Problem Solving', icon: <FaCode />, level: 70 },
        { name: 'Basic Debugging', icon: <FaCode />, level: 65 },
      ],
    },
    {
      title: 'Database Basics (MySQL/SQL)',
      skills: [
        { name: 'CRUD Operations', icon: <FaDatabase />, level: 75 },
        { name: 'Simple Queries', icon: <FaDatabase />, level: 70 },
        { name: 'MySQL / SQL Basics', icon: <FaDatabase />, level: 70 },
      ],
    },
    {
      title: 'Web Basics',
      skills: [
        { name: 'HTML', icon: <FaServer />, level: 75 },
        { name: 'CSS', icon: <FaServer />, level: 70 },
        { name: 'Basic JavaScript', icon: <FaCode />, level: 65 },
      ],
    },
    {
      title: 'UI/UX & Graphic Design',
      skills: [
        { name: 'UI/UX Design', icon: <FaPalette />, level: 75 },
        { name: 'Figma (Basics)', icon: <FaPalette />, level: 70 },
        { name: 'Adobe / Photoshop (Basics)', icon: <FaPalette />, level: 70 },
        { name: 'Graphic Design (Basics)', icon: <FaPalette />, level: 70 },
      ],
    },
    {
      title: 'Cybersecurity Awareness (Basic)',
      skills: [
        { name: 'Password Policies', icon: <FaKey />, level: 75 },
        { name: 'Phishing Awareness', icon: <FaShieldAlt />, level: 75 },
      ],
    },
  ]

  const certificates = [
    {
      name: 'CCNA (Cisco Certified Network Associate)',
      issuer: 'Cisco',
      icon: <SiCisco />,
      year: '2024',
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2 className="section-title">Skills & Certifications</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Networking, web, database, design, and security fundamentals
        </p>
      </div>
      
      {/* Certificates Section */}
      <div className="certificates-container">
        <h3 className="certificates-title">Certifications</h3>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <div className="certificate-icon">{cert.icon}</div>
              <div className="certificate-info">
                <h4 className="certificate-name">{cert.name}</h4>
                <p className="certificate-issuer">{cert.issuer}</p>
                <p className="certificate-year">{cert.year}</p>
              </div>
              <div className="certificate-badge">
                <FaCertificate />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-header">
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

