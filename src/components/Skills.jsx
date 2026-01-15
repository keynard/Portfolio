import React from 'react'
import { FaNetworkWired, FaServer, FaShieldAlt, FaWifi, FaRoute, FaCertificate } from 'react-icons/fa'
import { SiCisco } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Routing & Switching',
      skills: [
        { name: 'IP Addressing', icon: <FaNetworkWired />, level: 95 },
        { name: 'Subnetting', icon: <FaRoute />, level: 90 },
        { name: 'VLANs & Trunking', icon: <FaNetworkWired />, level: 88 },
        { name: 'STP & EtherChannel', icon: <FaNetworkWired />, level: 85 },
        { name: 'Static & Dynamic Routing', icon: <FaRoute />, level: 90 },
      ],
    },
    {
      title: 'Routing Protocols',
      skills: [
        { name: 'OSPF', icon: <FaRoute />, level: 88 },
        { name: 'EIGRP', icon: <FaRoute />, level: 85 },
        { name: 'RIP', icon: <FaRoute />, level: 80 },
        { name: 'BGP Basics', icon: <FaRoute />, level: 75 },
      ],
    },
    {
      title: 'Network Services & Security',
      skills: [
        { name: 'ACLs', icon: <FaShieldAlt />, level: 90 },
        { name: 'NAT/PAT', icon: <FaServer />, level: 88 },
        { name: 'DHCP', icon: <FaServer />, level: 85 },
        { name: 'DNS', icon: <FaServer />, level: 85 },
        { name: 'WAN Technologies', icon: <FaWifi />, level: 80 },
        { name: 'Network Security', icon: <FaShieldAlt />, level: 85 },
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
          CCNA Networking expertise and professional certifications
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

