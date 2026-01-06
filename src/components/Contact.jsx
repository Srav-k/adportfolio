import React, { useEffect, useRef } from "react";

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const CONTACT_INFO = {
    email: "kosuri1997@gmail.com",
    phone: "+91 9885066788",
  };

  return (
    <section id="contact" ref={sectionRef} style={styles.section}>
      <h2 style={styles.title}>✨ Let's Connect ✨</h2>
      <p style={styles.subtitle}>
        I'm open for front-end opportunities. Feel free to reach out!
      </p>
      <div style={styles.underline} />

      <div style={styles.grid}>
        {/* LEFT INFO */}
        <div style={styles.left}>
          <div style={styles.infoCard}>
            <div style={styles.iconBox}>📧</div>
            <div>
              <h4 style={styles.infoTitle}>Email</h4>
              <p style={styles.infoText}>{CONTACT_INFO.email}</p>
            </div>
          </div>

          <div style={styles.infoCard}>
            <div style={{ ...styles.iconBox, background: "#14532d" }}>📞</div>
            <div>
              <h4 style={styles.infoTitle}>Phone</h4>
              <p style={styles.infoText}>{CONTACT_INFO.phone}</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form style={styles.form}>
          <label style={styles.label}>Full Name</label>
          <input style={styles.input} type="text" />

          <label style={styles.label}>Email</label>
          <input style={styles.input} type="email" />

          <label style={styles.label}>Message</label>
          <textarea style={styles.textarea} rows="4" />

          <button style={styles.button}>Send Message 🚀</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

/* ================= STYLES ================= */
const styles = {
  section: {
    padding: "clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 2rem)",
    background: "#0f172a",
    minHeight: "100vh",
    opacity: 0,
    transform: "translateY(60px)",
    transition: "all 1s ease-in-out",
    color: "#fff",
  },
  title: {
    fontSize: "clamp(2rem, 6vw, 3.5rem)",
    textAlign: "center",
    marginBottom: "1rem",
    letterSpacing: "1px",
    animation: "fadeInDown 1s ease",
  },
  subtitle: {
    textAlign: "center",
    color: "#94a3b8",
    marginBottom: "2rem",
    fontSize: "clamp(1rem, 3vw, 1.25rem)",
    maxWidth: "600px",
    marginInline: "auto", // ✅ centers subtitle text block
  },
  underline: {
    width: "clamp(3rem, 8vw, 5rem)",
    height: "5px",
    background: "#3b82f6",
    margin: "0 auto clamp(2rem, 6vw, 4rem)",
    borderRadius: "999px",
    animation: "slideIn 1s ease",
  },
  grid: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // ✅ stacks on mobile
    gap: "clamp(2rem, 5vw, 4rem)",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: "clamp(1.5rem, 4vw, 2rem)",
  },
  infoCard: {
    display: "flex",
    gap: "clamp(1rem, 3vw, 1.5rem)",
    padding: "clamp(1.25rem, 4vw, 2rem)",
    background: "rgba(30,41,59,0.85)",
    borderRadius: "1.25rem",
    alignItems: "center",
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  iconBox: {
    width: "clamp(48px, 10vw, 64px)",
    height: "clamp(48px, 10vw, 64px)",
    borderRadius: "14px",
    background: "#1e3a8a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "clamp(24px, 6vw, 32px)",
    transition: "transform 0.3s ease",
    flexShrink: 0, // ✅ prevents shrinking on small screens
  },
  infoTitle: {
    fontSize: "clamp(1rem, 3vw, 1.25rem)",
    marginBottom: "0.3rem",
    fontWeight: "600",
  },
  infoText: {
    color: "#cbd5f5",
    fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
    wordBreak: "break-word",
  },
  form: {
    background: "rgba(30,41,59,0.85)",
    padding: "clamp(1.25rem, 5vw, 2.5rem)",
    borderRadius: "1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "clamp(1rem, 3vw, 1.5rem)",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
  },
  label: {
    fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
    color: "#cbd5e1",
    fontWeight: "500",
  },
  input: {
    padding: "clamp(0.75rem, 3vw, 1rem) clamp(1rem, 4vw, 1.25rem)",
    borderRadius: "0.75rem",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "#020617",
    color: "#fff",
    outline: "none",
    fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
    transition: "border 0.3s ease",
  },
  textarea: {
    padding: "clamp(0.75rem, 3vw, 1rem) clamp(1rem, 4vw, 1.25rem)",
    borderRadius: "0.75rem",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "#020617",
    color: "#fff",
    outline: "none",
    resize: "none",
    fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
  },
  button: {
    marginTop: "1rem",
    padding: "clamp(0.75rem, 3vw, 1rem)",
    borderRadius: "0.75rem",
    border: "none",
    background: "linear-gradient(90deg, #2563eb, #3b82f6)",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "clamp(1rem, 3vw, 1.1rem)",
    transition: "transform 0.3s ease, background 0.3s ease",
  },
};
