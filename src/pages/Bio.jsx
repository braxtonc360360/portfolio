import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import '../css/Bio.css'; 
import me from "../images/me2.jpg";
import myResume from "../images/resume.pdf"; 

const Bio = () => {
  const [showCopyMsg, setShowCopyMsg] = useState(false);

  const handleCopyEmail = () => {
    const email = "Braxton.Churchwell@my.maryvillecollege.edu";
    
    navigator.clipboard.writeText(email).then(() => {
      setShowCopyMsg(true);
      
      setTimeout(() => {
        setShowCopyMsg(false);
      }, 2000);
    });
  };

  return (
    <div className="bio-container">
      <PageHeader title="ABOUT ME"  />

      <div className="bio-grid">
        <div className="bio-text-panel">
          <h2 className="bio-name">Braxton Churchwell</h2>
          <h3 className="bio-role">Mathematics & Computer Science</h3>
          
          <div className="divider"></div>

          <p className="bio-paragraph">
            I am Braxton Churchwell, a computer science and mathematics student with a strong interest in robotics, software development and digital fabrication. I serve as treasurer for MC3D, where I help coordinate the club’s work and manage the club’s finances. I also work as an associate maintaining printers, troubleshooting hardware issues and designing parts that support student research and campus projects. I enjoy building systems that are clean, functional and grounded in real use, and I am always looking for projects that push my skills across both software and hardware.
          </p>

          <p className="bio-paragraph2">
            MY LINKS:
            <br />
            
            Email: 
            <span 
              onClick={handleCopyEmail} 
              className="bio-link" 
              style={{ cursor: 'pointer', marginLeft: '5px' }}
            >
            Braxton.Churchwell@my.maryvillecollege.edu
            </span>

            {showCopyMsg && (
              <span style={{ 
                marginLeft: '15px', 
                color: '#00ff00', 
                fontWeight: 'bold', 
                fontFamily: 'monospace',
                animation: 'fadeIn 0.3s'
              }}>
                [ COPIED ]
              </span>
            )}

            <br />
            
            LinkedIn: <a 
              href="https://www.linkedin.com/in/braxton-churchwell-238043384" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bio-link"
            >
              linkedin.com/in/braxton-churchwell
            </a>
            <br />
            
            MakerWorld: <a 
              href="https://makerworld.com/en/@Surge360" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bio-link"
            >
              makerworld.com/en/@Surge360
            </a>
          </p>

          <div className="tech-readout">
            <span className="readout-title">SKILL_MATRIX ::</span>
            <ul className="skill-list">
              <li>G-Code / AutoDesk</li>
              <li>Python / C++</li>
              <li>FDM / SLA Printing</li>
              <li>React / JS</li>
              <li>Differential EQ.</li>
              <li>Linux</li>
              <li>Linear Algebra</li>
              <li>Computer Architecture</li>
            </ul>
          </div>
        </div>

        <div className="bio-image-panel">
          <div className="image-frame">
            <img 
              src={me}
              alt="Profile" 
              className="bio-img" 
            />
            <div className="corner-top-right"></div>
            <div className="corner-bottom-left"></div>
          </div>

          <a
            href={myResume} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="resume-btn"
          >
            [ VIEW RESUME ]
          </a>

        </div>
      </div>
    </div>
  );
};

export default Bio;