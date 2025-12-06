import React from 'react';
import '../css/Card.css';

const Card = ({ title, subtitle, desc, tags, onClick, image }) => {
  return (
    <div 
      className="card" 
      onClick={onClick}
      
    >

      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <h4 className="card-subtitle">{subtitle}</h4>
        <p className="card-desc">{desc}</p>
        <p className = "expandText">[ EXPAND ]</p>
        
        <div className="card-tags">
          {tags.map((tag, i) => (
            <span key={i} className="tag">#{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;