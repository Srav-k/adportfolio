import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const titleRef = useRef(null);
  const cardRef = useRef(null);
  const infoRefs = useRef([]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (cardRef.current) observer.observe(cardRef.current);
    infoRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  const PERSONAL_INFO = {
    intro:
      "I am a passionate Front-End Developer who loves building clean, interactive, and responsive web applications. I enjoy turning ideas into visually appealing and user-friendly digital experiences.",
    location: "Mangalagiri, India",
    email: "kosuri1997@gmail.com",
    phone: "+91 9885066788",
    languages: "English, Telugu",
  };

  // Responsive styles using clamp() and fluid units
  const styles = {
    section: {
      padding: "clamp(3rem, 6vw, 6rem) clamp(1rem, 4vw, 1.5rem)",
      backgroundColor: "#0f172a",
      minHeight: "100vh",
    },
    container: {
      maxWidth: "56rem",
      margin: "0 auto",
    },
    header: {
      textAlign: "center",
      marginBottom: "clamp(2rem, 5vw, 4rem)",
    },
    title: {
      fontSize: "clamp(1.5rem, 5vw, 2.25rem)",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "#ffffff",
      opacity: 0,
      transform: "translateY(20px)",
      transition: "all 0.8s ease",
    },
    underline: {
      width: "clamp(3rem, 8vw, 5rem)",
      height: "0.25rem",
      backgroundColor: "#3b82f6",
      margin: "0 auto",
      borderRadius: "9999px",
    },
    card: {
      backgroundColor: "rgba(30, 41, 59, 0.7)",
      backdropFilter: "blur(10px)",
      padding: "clamp(1.5rem, 4vw, 3rem)",
      borderRadius: "clamp(1rem, 2vw, 1.5rem)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
      opacity: 0,
      transform: "translateY(30px)",
      transition: "all 0.9s ease",
    },
    introText: {
      fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
      lineHeight: "1.6",
      color: "#cbd5e1",
      fontStyle: "italic",
      marginBottom: "clamp(1.5rem, 4vw, 2.5rem)",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "clamp(1rem, 3vw, 2rem)",
      color: "#cbd5e1",
    },
    infoItem: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      opacity: 0,
      transform: "translateY(20px)",
      transition: "all 0.8s ease",
      fontSize: "clamp(0.9rem, 2vw, 1rem)",
    },
    label: {
      color: "#60a5fa",
      fontWeight: "bold",
      minWidth: "6rem",
    },
    link: {
      color: "inherit",
      textDecoration: "none",
      transition: "color 0.3s",
    },
    navSeparator: {
      position: "absolute",
      bottom: "0",
      left: "50%",
      transform: "translateX(-50%)",
      width: "120px",
      height: "4px",
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      borderRadius: "9999px",
      opacity: scrolled ? 1 : 0,
      transition: "opacity 0.4s ease",
    },
  };

  const infoData = [
    { label: "Location", value: PERSONAL_INFO.location },
    {
      label: "Email",
      value: PERSONAL_INFO.email,
      link: `mailto:${PERSONAL_INFO.email}`,
    },
    { label: "Phone", value: PERSONAL_INFO.phone },
    { label: "Languages", value: PERSONAL_INFO.languages },
  ];

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        {/* ===== HEADER ===== */}
        <div style={styles.header}>
          <h2 ref={titleRef} style={styles.title}>
            About Me
          </h2>
          <div style={styles.underline}></div>
        </div>

        {/* ===== CARD ===== */}
        <div ref={cardRef} style={styles.card}>
          <p style={styles.introText}>
            “{PERSONAL_INFO.intro}”
          </p>

          <div style={styles.grid}>
            {infoData.map((item, index) => (
              <div
                key={index}
                ref={(el) => (infoRefs.current[index] = el)}
                style={styles.infoItem}
              >
                <span style={styles.label}>{item.label}:</span>
                {item.link ? (
                  <a
                    href={item.link}
                    style={styles.link}
                    onMouseOver={(e) => (e.target.style.color = "#ffffff")}
                    onMouseOut={(e) => (e.target.style.color = "inherit")}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span>{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Optional separator */}
      {/* <div style={styles.navSeparator}></div> */}
    </section>
  );
};

export default About;
