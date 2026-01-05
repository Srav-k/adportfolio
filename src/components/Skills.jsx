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
    padding: "140px 24px 220px", // 🔥 expanded height
    backgroundColor: "#0b1332ff",
    minHeight: "100vh", // 🔥 taller section
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "90px", // 🔥 more space
  },
  title: {
    fontSize: "38px",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "14px",
  },
  underline: {
    width: "90px",
    height: "4px",
    backgroundColor: "#3b82f6",
    margin: "0 auto",
    borderRadius: "10px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "36px",
  },
  card: {
    background: "linear-gradient(145deg, #121621ff, #4455a3ff)",
    padding: "28px",
    borderRadius: "18px",
    borderTop: "4px solid #bfd1edff",
    boxShadow: "0 18px 35px rgba(0,0,0,0.45)",
    opacity: 0,
    transform: "translateY(50px)",
    transition: "0.7s ease",
    height: "40vh",
  },
  category: {
    color: "#ffffff",
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "22px",
    letterSpacing: "0.06em",
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  },
  tag: {
    padding: "9px 16px",
    fontSize: "14px",
    fontWeight: "500",
    borderRadius: "10px",
    cursor: "default",
    border: "1px solid rgba(255,255,255,0.08)",
    transition: "all 0.3s ease",
  },
};
