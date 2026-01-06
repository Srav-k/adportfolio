import React, { useState } from "react";

const ExperienceEducation = () => {
  /* ===== DATA (INLINE) ===== */
  const EXPERIENCES = [
    {
      period: "MAY 2023 - AUG 2024",
      role: "Healthcare Recruiter",
      company: "Sanity Health Staffing",
      highlights: [
        "Managed full-cycle recruitment for medical professionals, improving hiring timelines by 20%.",
        "Sourced and screened candidates via job portals and social platforms.",
      ],
    },
    {
      period: "APR 2022 - MAR 2023",
      role: "Customer Support Executive",
      company: "Byju's",
      highlights: [
        "Handled 80-100 customer interactions daily.",
        "Maintained CRM service logs.",
      ],
    },
    {
      period: "JUL 2021 - FEB 2022",
      role: "Junior Executive",
      company: "Shriram City Union Finance",
      highlights: ["Coordinated daily operations and documentation."],
    },
  ];

  const EDUCATION = [
    {
      period: "2015 - 2019",
      degree: "Bachelor's Degree in Bachelor of Technology",
      school: "SRK Institute of Technology, Vijayawada.",
    },
  ];

  /* ===== STYLES ===== */
  const styles = {
    section: {
      padding: "clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 1.5rem)",
      backgroundColor: "rgba(15, 23, 42, 0.8)",
      minHeight: "100vh",
    },
    container: {
      maxWidth: "64rem",
      margin: "0 auto",
    },
    header: {
      textAlign: "center",
      marginBottom: "clamp(2rem, 6vw, 5rem)",
    },
    title: {
      fontSize: "clamp(1.5rem, 5vw, 2.25rem)",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "#ffffff",
    },
    underline: {
      width: "clamp(3rem, 8vw, 5rem)",
      height: "0.25rem",
      backgroundColor: "#3b82f6",
      margin: "0 auto",
      borderRadius: "9999px",
    },
    timelineWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "clamp(2rem, 5vw, 4rem)",
    },
    subHeader: {
      fontSize: "clamp(1.25rem, 4vw, 1.5rem)",
      fontWeight: "bold",
      marginBottom: "clamp(1rem, 3vw, 2rem)",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      color: "#ffffff",
    },
    iconBox: (color) => ({
      padding: "0.5rem",
      backgroundColor: `${color}33`,
      color: color,
      borderRadius: "0.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "clamp(1rem, 4vw, 1.25rem)",
    }),
    timelineLine: {
      borderLeft: "2px solid #1e293b",
      marginLeft: "1.25rem",
      paddingLeft: "clamp(1rem, 3vw, 2rem)",
      display: "flex",
      flexDirection: "column",
      gap: "clamp(1.5rem, 4vw, 2rem)",
    },
  };

  return (
    <section id="experience" style={styles.section}>
      <div style={styles.container}>
        {/* ===== HEADER ===== */}
        <div style={styles.header}>
          <h2 style={styles.title}>Experience & Education</h2>
          <div style={styles.underline}></div>
        </div>

        <div style={styles.timelineWrapper}>
          {/* ===== WORK HISTORY ===== */}
          <div>
            <h3 style={styles.subHeader}>
              <span style={styles.iconBox("#60a5fa")}>💼</span>
              Work History
            </h3>

            <div style={styles.timelineLine}>
              {EXPERIENCES.map((exp, i) => (
                <TimelineItem
                  key={i}
                  period={exp.period}
                  title={exp.role}
                  subtitle={exp.company}
                  highlights={exp.highlights}
                  accentColor="#3b82f6"
                />
              ))}
            </div>
          </div>

          {/* ===== EDUCATION ===== */}
          <div>
            <h3 style={styles.subHeader}>
              <span style={styles.iconBox("#a855f7")}>🎓</span>
              Academic Background
            </h3>

            <div style={styles.timelineLine}>
              {EDUCATION.map((edu, i) => (
                <TimelineItem
                  key={i}
                  period={edu.period}
                  title={edu.degree}
                  subtitle={edu.school}
                  accentColor="#a855f7"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ===== TIMELINE ITEM ===== */
const TimelineItem = ({ period, title, subtitle, highlights, accentColor }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* DOT */}
      <div
        style={{
          position: "absolute",
          left: "-41px",
          top: "1.5rem",
          width: "clamp(0.75rem, 2vw, 1rem)",
          height: "clamp(0.75rem, 2vw, 1rem)",
          backgroundColor: accentColor,
          borderRadius: "50%",
          boxShadow: `0 0 10px ${accentColor}80`,
        }}
      />

      {/* CARD */}
      <div
        style={{
          backgroundColor: hover
            ? "rgba(30, 41, 59, 0.6)"
            : "rgba(30, 41, 59, 0.3)",
          padding: "clamp(1rem, 3vw, 1.5rem)",
          borderRadius: "1rem",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          transition: "all 0.3s ease",
        }}
      >
        <span
          style={{
            fontSize: "clamp(0.75rem, 2.5vw, 0.875rem)",
            fontWeight: "600",
            color: accentColor,
            display: "block",
            marginBottom: "0.5rem",
          }}
        >
          {period}
        </span>

        <h4
          style={{
            fontSize: "clamp(1rem, 3vw, 1.25rem)",
            fontWeight: "bold",
            color: "#ffffff",
          }}
        >
          {title}
        </h4>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: highlights ? "1rem" : "0",
            fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
          }}
        >
          {subtitle}
        </p>

        {highlights && (
          <ul
            style={{
              paddingLeft: "1.25rem",
              color: "#cbd5e1",
              fontSize: "clamp(0.85rem, 2.5vw, 0.9375rem)",
              lineHeight: "1.6",
            }}
          >
            {highlights.map((item, index) => (
              <li key={index} style={{ marginBottom: "0.25rem" }}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceEducation;
