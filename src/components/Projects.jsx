import React, { useState } from 'react';

const Projects = () => {
  const PROJECTS = [
    {
      title: "Educational Site",
      description: "Built a responsive platform for education...",
      tech: ["HTML", "CSS", "Javascript"],
      image: "https://www.leadsquared.com/wp-content/uploads/2021/11/Education-Website-Design.png",
      link: "https://your-live-site-url.com"
    },
    {
      title: "Online Store",
      description: "Developed a full e-commerce store interface...",
      tech: ["React", "Tailwind"],
      image: "https://t3.ftcdn.net/jpg/02/41/43/18/360_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg",
      link: "https://your-github-or-live-url.com"
    }
  ];

  // Main background and spacing for the whole section
  const sectionStyle = {
    padding: 'clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 1.5rem)',
    backgroundColor: '#0f172a',
    minHeight: '100vh',
  };

  const containerStyle = {
    maxWidth: '80rem',
    margin: '0 auto',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: 'clamp(2rem, 6vw, 5rem)',
  };

  const titleStyle = {
    fontSize: 'clamp(1.5rem, 5vw, 2.25rem)',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#ffffff',
  };

  const underlineStyle = {
    width: 'clamp(3rem, 8vw, 5rem)',
    height: '0.25rem',
    backgroundColor: '#3b82f6',
    margin: '0 auto',
    borderRadius: '9999px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 'clamp(1.5rem, 4vw, 2.5rem)',
  };

  return (
    <section id="projects" style={sectionStyle}>
      <div style={containerStyle}>
        
        {/* ===== SECTION HEADER ===== */}
        <div style={headerStyle}>
          <h2 style={titleStyle}>Featured Projects</h2>
          <div style={underlineStyle}></div>
        </div>

        {/* ===== PROJECTS GRID ===== */}
        <div style={gridStyle}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

// This builds each individual project box
const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // This helper function decides which image to show
  const getImageUrl = (imageSource) => {
    if (!imageSource) return 'https://via.placeholder.com/800x450?text=No+Image';
    
    if (imageSource.startsWith('http')) {
      return imageSource;
    }
    
    try {
      return new URL(`../assets/${imageSource}`, import.meta.url).href;
    } catch (error) {
      return 'https://via.placeholder.com/800x450?text=Image+Not+Found';
    }
  };

  const cardStyle = {
    backgroundColor: 'rgba(30, 41, 59, 0.4)',
    borderRadius: '1.5rem',
    overflow: 'hidden',
    border: `1px solid ${isHovered ? 'rgba(59, 130, 246, 0.5)' : 'rgba(255, 255, 255, 0.05)'}`,
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    backdropFilter: 'blur(8px)',
  };

  const imageContainerStyle = {
    position: 'relative',
    overflow: 'hidden',
    aspectRatio: '16/9',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.7s ease, filter 0.7s ease',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    filter: isHovered ? 'brightness(1)' : 'brightness(0.75)',
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, #020617, transparent)',
    opacity: 0.6,
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={cardStyle}
    >
      {/* PROJECT IMAGE */}
      <div style={imageContainerStyle}>
        <img
          src={getImageUrl(project.image)}
          alt={project.title}
          style={imageStyle}
        />
        <div style={overlayStyle}></div>
      </div>

      {/* PROJECT CONTENT */}
      <div style={{ padding: 'clamp(1rem, 3vw, 2rem)' }}>
        <h3 style={{
          fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: isHovered ? '#60a5fa' : '#ffffff',
          transition: 'color 0.3s ease'
        }}>
          {project.title}
        </h3>

        <p style={{ 
          color: '#94a3b8', 
          marginBottom: 'clamp(1rem, 3vw, 1.5rem)', 
          lineHeight: '1.6',
          fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
          minHeight: '4.8rem' 
        }}>
          {project.description}
        </p>

        {/* TECH TAGS */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '0.5rem', 
          marginBottom: 'clamp(1.5rem, 4vw, 2rem)' 
        }}>
          {project.tech.map(tech => (
            <span key={tech} style={{
                padding: '0.25rem 0.75rem',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                color: '#60a5fa',
                fontSize: 'clamp(0.7rem, 2vw, 0.75rem)',
                fontWeight: 'bold',
                borderRadius: '0.375rem',
                textTransform: 'uppercase'
            }}>
              {tech}
            </span>
          ))}
        </div>

        {/* VIEW PROJECT LINK */}
        <a 
          href={project.link || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#ffffff',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
          }}
        >
          View Project
          <svg
            style={{ 
              width: '1.25rem', 
              height: '1.25rem',
              transition: 'transform 0.3s ease',
              transform: isHovered ? 'translateX(5px)' : 'translateX(0)'
            }}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Projects;
