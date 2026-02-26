import React from 'react';
import '../css/ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        
        {/* Technical Header */}
        <div className="modal-header">
          <span className="modal-id">ID: {project.id || 'NULL'}</span>
          <button className="close-btn" onClick={onClose}>[ X_CLOSE ]</button>
        </div>

        <div className="modal-body">
          <div className="modal-image-container">
            <img 
              src={project.image || "https://placehold.co/600x400/111/45a29e?text=NO_IMG_DATA"} 
              alt={project.title} 
              className="modal-img" 
            />
          </div>

          <div className="modal-details">
            <h2 className="modal-title">{project.title}</h2>
            <span className="modal-lang">LANG :: {project.language}</span>
            
            <p className="modal-desc">{project.description}</p>
            
            {/* 👇 NEW: Only shows if you added a 'link' to the project in Projects.js */}
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '1.5rem',
                  padding: '10px 15px',
                  border: '1px solid #66fcf1',
                  color: '#66fcf1',
                  textDecoration: 'none',
                  fontFamily: 'monospace',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  transition: '0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#66fcf1';
                  e.target.style.color = '#0b0c10';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#66fcf1';
                }}
              >
                [ VIEW PROJECT ]
              </a>
            )}
            
            <div className="modal-specs">
              <p><strong>STATUS:</strong> COMPILED_SUCCESSFULLY</p>
              {/* Dynamically updates if it's a web project */}
              <p><strong>DEPLOYMENT:</strong> {project.link ? 'VERCEL_APP' : 'LOCALHOST:8888'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;