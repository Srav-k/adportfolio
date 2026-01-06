import React from "react";
import profileImg from "../assets/Srav.jpeg";

const Hero = () => {
  const styles = {
    section: {
      width: "100%",
      minHeight: "100vh",
      overflow: "hidden",
      background:
        "radial-gradient(circle at right, rgba(37,99,235,0.35), transparent 45%), linear-gradient(135deg, #081a1f, #0b2a33)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "clamp(3rem, 8vw, 7.5rem) clamp(1rem, 6vw, 3.75rem)",
      color: "#fff",
    },
    container: {
      width: "100%",
      maxWidth: "1200px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // ✅ stacks on mobile
      alignItems: "center",
      gap: "clamp(1.5rem, 5vw, 3.75rem)",
    },
    badge: {
      display: "inline-block",
      backgroundColor: "#0ea5e9",
      color: "#fff",
      padding: "0.375rem 1rem",
      borderRadius: "999px",
      fontSize: "clamp(0.7rem, 2vw, 0.85rem)",
      letterSpacing: "1px",
      marginBottom: "clamp(0.75rem, 2vw, 1.125rem)",
    },
    title: {
      fontSize: "clamp(1.75rem, 6vw, 3.5rem)",
      fontWeight: "800",
      lineHeight: "1.2",
      marginBottom: "clamp(0.75rem, 2vw, 1rem)",
    },
    highlight: {
      color: "#38bdf8",
    },
    subtitle: {
      fontSize: "clamp(1rem, 3vw, 1.375rem)",
      color: "#cbd5e1",
      marginBottom: "clamp(1.25rem, 4vw, 2rem)",
      maxWidth: "480px",
    },
    btnGroup: {
      display: "flex",
      gap: "clamp(0.75rem, 2vw, 1rem)",
      flexWrap: "wrap",
    },
    primaryBtn: {
      padding: "clamp(0.75rem, 2vw, 0.875rem) clamp(1.25rem, 4vw, 1.75rem)",
      backgroundColor: "#2563eb",
      borderRadius: "10px",
      border: "none",
      color: "#fff",
      fontWeight: "600",
      cursor: "pointer",
      fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
    },
    secondaryBtn: {
      padding: "clamp(0.75rem, 2vw, 0.875rem) clamp(1.25rem, 4vw, 1.75rem)",
      backgroundColor: "transparent",
      borderRadius: "10px",
      border: "1px solid rgba(255,255,255,0.25)",
      color: "#fff",
      fontWeight: "600",
      cursor: "pointer",
      fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
    },
    imageWrapper: {
      display: "flex",
      justifyContent: "center",
    },
    image: {
      width: "clamp(200px, 40vw, 380px)",
      height: "clamp(260px, 50vw, 450px)",
      objectFit: "cover",
      borderRadius: "0px",
      boxShadow: "0 30px 60px rgba(154, 166, 227, 0.45)",
      border: "4px solid",
      borderImageSlice: 1,
      borderWidth: "4px",
      borderImageSource:
        "linear-gradient(270deg, #4745b3ff, #0e32a9ff, #c9bdf3ff, #868688ff, #0000ff, #4b0082, #8b00ff, #69309bff)",
      animation: "borderColor 4s linear infinite",
    },
  };

  // Smooth scroll handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section style={styles.section}>
      <style>
        {`
          @keyframes borderColor {
            0% { border-image-source: linear-gradient(270deg, #473996ff, #37373bff, #dcdcd8ff, #b891efff, #0000ff, #4b0082, #8b00ff, #171465ff); }
            50% { border-image-source: linear-gradient(270deg, #757576ff, #0000ff, #4b0082, #8b00ff, #6f679aff, #57467fff, #7054edff, #00ff00); }
            100% { border-image-source: linear-gradient(270deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff, #ff0000); }
          }
        `}
      </style>

      <div style={styles.container}>
        {/* LEFT CONTENT */}
        <div>
          <span style={styles.badge}>WELCOME TO MY WORLD</span>
          <h1 style={styles.title}>
            Hi, I'm <span style={styles.highlight}>Kosuri Sravani</span>
          </h1>
          <p style={styles.subtitle}>
            Aspiring Front-End Developer | Ex-Recruiter
          </p>
          <div style={styles.btnGroup}>
            <button
              style={styles.primaryBtn}
              onClick={() => handleScroll("contact")}
            >
              Get In Touch
            </button>
            <button
              style={styles.secondaryBtn}
              onClick={() => handleScroll("projects")}
            >
              View Projects
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div style={styles.imageWrapper}>
          <img src={profileImg} alt="Profile" style={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
