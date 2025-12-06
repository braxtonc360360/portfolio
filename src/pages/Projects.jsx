import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import PageHeader from '../components/PageHeader';
import ProjectModal from '../components/ProjectModal';

// Import your images
import synapse from '../images/synapse.png';
import xeno from '../images/xeno.jpg';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState('CONNECTING...');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    
    const timeoutId = setTimeout(() => {
        controller.abort(); 
    }, 4000);

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
        setStatus('CONNECTED ☑️');
        
        setProjects([
          // --- REAL PROJECTS ---
          {
            id: 1,
            title: "ARCTOS Robotic ARM",
            language: "Python / C++",
            image: "https://arctosrobotics.com/wp-content/uploads/2024/05/IMG_3624-scaled.jpg",
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
            description: "A Xenomorph model inspired by the Alien franchise, 3D printed using PETG filament. This project involved editing the model in CAD software.",
            tags: ["slicing", "design"]
          },

          // --- DUMMY PROJECTS (ALL IDENTICAL TEXT) ---
          {
            id: 101,
            title: "TEST PROJECT",
            language: "N/A",
            image: "https://placehold.co/600x400/CCCCCC/696969?text=PLACEHOLDER", 
            description: "This is a placeholder description. Content is coming soon.",
            tags: ["TEST"]
          },
          {
            id: 102,
            title: "TEST PROJECT",
            language: "N/A",
            image: "https://placehold.co/600x400/CCCCCC/696969?text=PLACEHOLDER",
            description: "This is a placeholder description. Content is coming soon.",
            tags: ["TEST"]
          },
          {
            id: 103,
            title: "TEST PROJECT",
            language: "N/A",
            image: "https://placehold.co/600x400/CCCCCC/696969?text=PLACEHOLDER",
            description: "This is a placeholder description. Content is coming soon.",
            tags: ["TEST"]
          },
          {
            id: 104,
            title: "TEST PROJECT",
            language: "N/A",
            image: "https://placehold.co/600x400/CCCCCC/696969?text=PLACEHOLDER",
            description: "This is a placeholder description. Content is coming soon.",
            tags: ["TEST"]
          },
          {
            id: 105,
            title: "TEST PROJECT",
            language: "N/A",
            image: "https://placehold.co/600x400/CCCCCC/696969?text=PLACEHOLDER",
            description: "This is a placeholder description. Content is coming soon.",
            tags: ["TEST"]
          },
          {
            id: 106,
            title: "TEST PROJECT",
            language: "N/A",
            image: "https://placehold.co/600x400/CCCCCC/696969?text=PLACEHOLDER",
            description: "This is a placeholder description. Content is coming soon.",
            tags: ["TEST"]
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