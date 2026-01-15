import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <div className="title-underline"></div>
      </div>
      <div className="about-content">
        <div className="about-text">
          
          <p className="about-description">
            I'm still learning and continuously expanding my knowledge in networking
            technologies. When I'm not configuring routers and switches, you can find me
            exploring new networking technologies, troubleshooting complex network issues,
            studying for advanced certifications, or sharing knowledge with the networking
            community. I believe that learning never stops, and I'm always eager to take
            on new challenges and grow in this ever-evolving field.
          </p>
        </div>
        <div className="about-image">
          <div className="about-card">
            <h3>What I Do</h3>
            <ul className="about-list">
              <li>Network Design</li>
              <li>Routing & Switching</li>
              <li>Network Security</li>
              <li>Network Troubleshooting</li>
              <li>VLAN Configuration</li>
              <li>WAN Technologies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

