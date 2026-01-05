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
    padding: "8rem 2rem",
    background: "#0f172a",
    minHeight: "100vh",
    opacity: 0,
    transform: "translateY(60px)",
    transition: "all 1s ease-in-out",
    color: "#fff",
  },
  title: {
    fontSize: "3.5rem",
    textAlign: "center",
    marginBottom: "1rem",
    letterSpacing: "1px",
    animation: "fadeInDown 1s ease",
  },
  subtitle: {
    textAlign: "center",
    color: "#94a3b8",
    marginBottom: "2rem",
    fontSize: "1.25rem",
  },
  underline: {
    width: "5rem",
    height: "5px",
    background: "#3b82f6",
    margin: "0 auto 4rem",
    borderRadius: "999px",
    animation: "slideIn 1s ease",
  },
  grid: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  infoCard: {
    display: "flex",
    gap: "1.5rem",
    padding: "2rem",
    background: "rgba(30,41,59,0.85)",
    borderRadius: "1.25rem",
    alignItems: "center",
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  iconBox: {
    width: "64px",
    height: "64px",
    borderRadius: "14px",
    background: "#1e3a8a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px", // bigger icons
    transition: "transform 0.3s ease",
  },
  infoTitle: {
    fontSize: "1.25rem",
    marginBottom: "0.3rem",
    fontWeight: "600",
  },
  infoText: {
    color: "#cbd5f5",
    fontSize: "1.1rem",
  },
  form: {
    background: "rgba(30,41,59,0.85)",
    padding: "2.5rem",
    borderRadius: "1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
  },
  label: {
    fontSize: "1rem",
    color: "#cbd5e1",
    fontWeight: "500",
  },
  input: {
    padding: "1rem 1.25rem",
    borderRadius: "0.75rem",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "#020617",
    color: "#fff",
    outline: "none",
    fontSize: "1rem",
    transition: "border 0.3s ease",
  },
  textarea: {
    padding: "1rem 1.25rem",
    borderRadius: "0.75rem",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "#020617",
    color: "#fff",
    outline: "none",
    resize: "none",
    fontSize: "1rem",
  },
  button: {
    marginTop: "1rem",
    padding: "1rem",
    borderRadius: "0.75rem",
    border: "none",
    background: "linear-gradient(90deg, #2563eb, #3b82f6)",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "1.1rem",
    transition: "transform 0.3s ease, background 0.3s ease",
  },
};
