import React from 'react';

const PageHeader = ({ title, status }) => {
  return (
    <header style={{ 
      marginBottom: '3rem', 
      borderBottom: '1px solid var(--border-color)', 
      paddingBottom: '1rem' 
    }}>
      <h1 style={{ color: 'var(--text-secondary)', margin: 0 }}>
        {title}
      </h1>
      {status && (
        <small style={{ fontFamily: 'monospace', color: 'var(--dim)' }}>
          SYSTEM_STATUS :: {status}
        </small>
      )}
    </header>
  );
};

export default PageHeader;