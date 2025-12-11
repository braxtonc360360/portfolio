import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './pages/Projects';
import Bio from './pages/Bio';
import Printers from './pages/Printers';
const NAV_CONFIG = {
  brand: (
    <Link to="/" className="brand-link">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="var(--accent)" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
      
      {/* 2. Your Name */}
      <span className="prompt">braxton churchwell</span>
    </Link>
  ),
  links: [
    { label: 'HOME', path: '/' },
    { label: 'PROJECTS', path: '/projects' },
    { label: 'PRINTERS', path: '/printers' },
    { label: 'ABOUT', path: '/bio' }
  ]
};

const HOME_CONTENT = {
  title: ["WELCOME_TO_MY_PAGE.", "ROBOTICS.", "AUTOMATION.", "3D_PRINTING.", "WRITING_CODE."], 
  
  subtitle: "Exploring the intersection of software and hardware. Check out my latest works in the Projects section!",
  footer: "Made with 💙 by Braxton"
};

function App() {
  document.title = "Braxton's Portfolio";
  return (
    <BrowserRouter>
      <Navbar 
        brand={NAV_CONFIG.brand} 
        links={NAV_CONFIG.links} 
      />
      
      <Routes>
        <Route path="/" element={
          <Hero 
            title={HOME_CONTENT.title}
            subtitle={HOME_CONTENT.subtitle}
            footer={HOME_CONTENT.footer}
            ctaText="VIEW PROJECTS"
            ctaPath="/projects"
          />
        } />
        
        <Route path="/projects" element={<Projects />} />
        <Route path="/printers" element={<Printers />} />
        <Route path="/bio" element={<Bio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;