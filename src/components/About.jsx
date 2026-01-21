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
           I am an IT student with foundational skills in Network Design, Web Development,
            UI/UX Design, Cybersecurity, and Network Administration. 
            I enjoy learning how systems work together from designing simple network setups to 
            building user-friendly websites and applying basic security practices. 
            I am continuously improving my skills through hands-on projects and coursework.
          </p>
        </div>
        <div className="about-image">
          <div className="about-card">
            <h3>What I Do</h3>
            <ul className="about-list">
              <li>Network Design</li>
              <li>Web Developer</li>
              <li>UI/UX</li>
              <li>Cybersecurity</li>
              <li>Network Admin</li>
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

