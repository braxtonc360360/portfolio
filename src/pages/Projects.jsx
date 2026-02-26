import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import PageHeader from '../components/PageHeader';
import ProjectModal from '../components/ProjectModal';
import websitePic from '../images/websiteImage.png';
import synapse from '../images/synapse.png';
import xeno from '../images/xeno.jpg';
import arm from '../images/arm.jpg';
import mc3dHome from '../images/homepage.png';
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    
    const timeoutId = setTimeout(() => {
        controller.abort(); 
    }, 0);

    fetch('http://localhost:5000/projects', { signal: controller.signal })
      .then((res) => {
        clearTimeout(timeoutId); 
        if (!res.ok) throw new Error("Server Error");
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setStatus('DB_ONLINE: 200 OK');
      })
      .catch((err) => {
        console.warn("Using Fallback Data:", err.message);
        
        setProjects([
          {
            id: 1,
            title: "ARCTOS Robotic ARM",
            language: "Python / C++",
            image: arm,
            description: "I built a 3D printed robotic arm using open source designs. I printed and assembled the parts, set up the electronics, and programmed the arm to move with smooth and accurate control.",
            tags: ["Robotics","3D Printing"]
          },
          {
            id: 2,
            title: "2-D Whack-a-Mole Game",
            language: "Python",
            image: synapse,
            description: "I designed and built a whack-a-mole game using Python and Pygame. The game features a graphical interface where moles pop up randomly.",
            tags: ["Game Design", "Pygame"]
          },
          {
            id: 3,
            title: "Xenomorph Display",
            language: "G-Code / 3D Modeling",
            image: xeno,
            description: "A Xenomorph model from the Alien franchise, 3D printed using PLA filament. This project involved editing the model in CAD software.",
            tags: ["Slicing", "Design"]
          },

          {
            id: 4,
            title: "Portfolio Website",
            language: "React / Vite", 
            image: websitePic, 
            description: "A fully responsive personal portfolio website built with React and Vite. It uses React Router for navigation between multiple pages (Bio, Projects, Printers) and features a custom dark-themed UI with mobile-optimized CSS layouts.",
            tags: ["React", "Vercel", "GIT"],
            link: "https://github.com/braxtonc360360/portfolio" 
          },
          {
           id: 5,
           title: "Makerspace Hub (The BuildPlate)",
           language: "React / SQL",
           image: mc3dHome,
           description: "Experimented with AI to create a hub for our members in the school makerspace (MC3D).",
           tags: ["React","Vercel","Databases","AI"],
           link: "https://www.buildplate.space/"
          }
        ]);
      });

      return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      
      <PageHeader title="PROJECT DIRECTORY" status={status} />
      <p style={{ marginBottom: '2rem' }}>
        Here you can see a collection of my projects ranging from 3D printed Knick Knacks to a Functioning Robotic Arm.
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
        gap: '2rem' 
      }}>
        {projects.map((proj, i) => (
          <Card 
            key={proj.id || i}
            title={proj.title}
            subtitle={proj.language || proj.tech_stack} 
            desc={proj.description}
            image={proj.image || proj.image_url} 
            tags={proj.tags ? proj.tags : (proj.tech_stack ? proj.tech_stack.split(',') : [])}
            onClick={() => setSelectedProject(proj)}
          />
        ))}
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

    </div>
  );
};

export default Projects;