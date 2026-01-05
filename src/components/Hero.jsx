import React from "react";
import profileImg from "../assets/Srav.jpeg";

const Hero = () => {
  const styles = {
    section: {
      width: "100vw",
      minHeight: "100vh",
      overflow: "hidden",
      background:
        "radial-gradient(circle at right, rgba(37,99,235,0.35), transparent 45%), linear-gradient(135deg, #081a1f, #0b2a33)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "120px 60px",
      color: "#fff",
    },
    container: {
      width: "100%",
      maxWidth: "1200px",
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      alignItems: "center",
      gap: "60px",
    },
    badge: {
      display: "inline-block",
      backgroundColor: "#0ea5e9",
      color: "#fff",
      padding: "6px 16px",
      borderRadius: "999px",
      fontSize: "12px",
      letterSpacing: "1px",
      marginBottom: "18px",
    },
    title: {
      fontSize: "56px",
      fontWeight: "800",
      lineHeight: "1.2",
      marginBottom: "16px",
    },
    highlight: {
      color: "#38bdf8",
    },
    subtitle: {
      fontSize: "22px",
      color: "#cbd5e1",
      marginBottom: "32px",
      maxWidth: "480px",
    },
    btnGroup: {
      display: "flex",
      gap: "16px",
      flexWrap: "wrap",
    },
    primaryBtn: {
      padding: "14px 28px",
      backgroundColor: "#2563eb",
      borderRadius: "10px",
      border: "none",
      color: "#fff",
      fontWeight: "600",
      cursor: "pointer",
    },
    secondaryBtn: {
      padding: "14px 28px",
      backgroundColor: "transparent",
      borderRadius: "10px",
      border: "1px solid rgba(255,255,255,0.25)",
      color: "#fff",
      fontWeight: "600",
      cursor: "pointer",
    },
    imageWrapper: {
      display: "flex",
      justifyContent: "center",
    },
    image: {
      width: "380px",
      height: "450px",
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
