import React, { useEffect, useRef, useState } from "react";

const Skills = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skillsData = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "REST APIs"],
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
    },
  ];

  return (
    <section id="skills" ref={sectionRef} style={styles.section}>
      <div style={styles.container}>
        {/* ===== HEADER ===== */}
        <div style={styles.header}>
          <h2 style={styles.title}>Technical Skills</h2>
          <div style={styles.underline} />
        </div>

        {/* ===== SKILLS GRID ===== */}
        <div style={styles.grid}>
          {skillsData.map((group, index) => (
            <div
              key={group.category}
              style={{
                ...styles.card,
                ...(visible && {
                  opacity: 1,
                  transform: "translateY(0)",
                  transitionDelay: `${index * 0.15}s`,
                }),
              }}
            >
              <h3 style={styles.category}>{group.category}</h3>

              <div style={styles.tags}>
                {group.skills.map((skill) => (
                  <SkillTag key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===== Skill Tag ===== */
const SkillTag = ({ name }) => {
  const [hover, setHover] = useState(false);

  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...styles.tag,
        backgroundColor: hover ? "#3a5984ff" : "#155bccff",
        color: hover ? "#ffffff" : "#f0f0f0ff",
      }}
    >
      {name}
    </span>
  );
};

export default Skills;

/* ===== Inline Styles ===== */
const styles = {
  section: {
    padding: "clamp(4rem, 8vw, 8.75rem) clamp(1rem, 4vw, 1.5rem) clamp(6rem, 10vw, 13.75rem)",
    backgroundColor: "#0b1332ff",
    minHeight: "100vh",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "clamp(2rem, 6vw, 5.5rem)",
  },
  title: {
    fontSize: "clamp(1.75rem, 5vw, 2.375rem)",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "clamp(0.75rem, 2vw, 1rem)",
  },
  underline: {
    width: "clamp(3.5rem, 8vw, 5.625rem)",
    height: "4px",
    backgroundColor: "#3b82f6",
    margin: "0 auto",
    borderRadius: "10px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "clamp(1.5rem, 4vw, 2.25rem)",
  },
  card: {
    background: "linear-gradient(145deg, #121621ff, #4455a3ff)",
    padding: "clamp(1.25rem, 3vw, 1.75rem)",
    borderRadius: "18px",
    borderTop: "4px solid #bfd1edff",
    boxShadow: "0 18px 35px rgba(0,0,0,0.45)",
    opacity: 0,
    transform: "translateY(50px)",
    transition: "0.7s ease",
    minHeight: "clamp(220px, 40vh, 300px)",
  },
  category: {
    color: "#ffffff",
    fontSize: "clamp(1rem, 3vw, 1.25rem)",
    fontWeight: "600",
    marginBottom: "clamp(1rem, 3vw, 1.375rem)",
    letterSpacing: "0.06em",
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "clamp(0.5rem, 2vw, 0.75rem)",
  },
  tag: {
    padding: "clamp(0.5rem, 2vw, 0.75rem) clamp(0.75rem, 3vw, 1rem)",
    fontSize: "clamp(0.75rem, 2.5vw, 0.875rem)",
    fontWeight: "500",
    borderRadius: "10px",
    cursor: "default",
    border: "1px solid rgba(255,255,255,0.08)",
    transition: "all 0.3s ease",
  },
};
