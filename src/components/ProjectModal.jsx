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
            
            <div className="modal-specs">
              <p><strong>STATUS:</strong> COMPILED_SUCCESSFULLY</p>
              <p><strong>DEPLOYMENT:</strong> LOCALHOST:8888</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;