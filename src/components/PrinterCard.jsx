import React from 'react';
import '../css/PrinterCard.css';

const PrinterCard = ({ model, status, specs, image, logs }) => {
  // Determine color based on status
  const isOnline = status === 'OPERATIONAL';
  const statusColor = isOnline ? 'var(--text-secondary)' : '#ff4444';

  return (
    <div className="printer-card">
      <div className="printer-header">
        <h3 className="printer-model">{model}</h3>
        <div className="status-indicator">
          <span className="status-text">{status}</span>
          <div 
            className="status-dot" 
            style={{ backgroundColor: statusColor, boxShadow: `0 0 8px ${statusColor}` }}
          ></div>
        </div>
      </div>

      <div className="printer-body">
        <div className="printer-img-container">
          <img 
            src={image || "https://placehold.co/400x300/111/45a29e?text=NO_SIGNAL"} 
            alt={model} 
            className="printer-img" 
          />
        </div>
        
        <div className="printer-specs">
          <h4>// HARDWARE_SPECS</h4>
          <ul>
            {specs.map((spec, i) => (
              <li key={i}>{spec}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer: Maintenance Logs / What you do */}
      <div className="printer-footer">
        <h4>// MAINTENANCE_LOG & MODS</h4>
        <ul className="log-list">
          {logs.map((log, i) => (
            <li key={i}>
              <span className="log-arrow">&gt;</span> {log}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PrinterCard;