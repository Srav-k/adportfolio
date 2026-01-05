import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        ...styles.nav,
        ...(scrolled && styles.scrolled),
      }}
    >
      <h2 style={styles.logo}>MyPortfolio</h2>
      <ul style={styles.menu}>
        {["about", "skills", "projects", "contact"].map((item) => (
          <li key={item}>
            <a href={`#${item}`} style={styles.link}>
              {item.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "transparent",
    transition: "all 0.4s ease",
    zIndex: 999,
  },
  scrolled: {
    background: "rgba(27, 72, 179, 0.97)",
    backdropFilter: "blur(12px)",
  },
  logo: {
    fontSize: "32px",
    fontWeight: "bold",
    background: "linear-gradient(90deg, #38bdf8, #6366f1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "28px",
  },
  link: {
    textDecoration: "none",
    color: "#e5e7eb",
    fontWeight: "700", // Made bold (was 500)
    transition: "color 0.3s",
    fontSize: "16px", // Optional: slightly larger for better boldness visibility
  },
};