import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    const onResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setOpen(false);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <nav style={{ ...styles.nav, ...(scrolled && styles.scrolled) }}>
      <div style={styles.container}>
        <h2 style={styles.logo}>MyPortfolio</h2>

        {/* DESKTOP MENU */}
        {!isMobile && (
          <ul style={styles.menu}>
            {["about", "skills", "projects", "contact"].map((item) => (
              <li key={item}>
                <a href={`#${item}`} style={styles.link}>
                  {item.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* HAMBURGER (MOBILE ONLY) */}
        {isMobile && (
          <div style={styles.hamburger} onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={26} /> : <FaBars size={26} />}
          </div>
        )}
      </div>

      {/* MOBILE MENU */}
      {open && isMobile && (
        <div style={styles.mobileMenu}>
          {["Home", "About", "Courses", "Contact", "Login", "SignUp"].map(
            (item) => (
              <a
                key={item}
                href="/"
                onClick={() => setOpen(false)}
                style={styles.mobileLink}
              >
                {item}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 999,
    transition: "0.4s ease",
  },

  scrolled: {
    background: "rgba(27, 72, 179, 0.95)",
    backdropFilter: "blur(10px)",
  },

  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "20px clamp(1rem, 5vw, 3rem)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    fontSize: "clamp(1.4rem, 4vw, 2rem)",
    fontWeight: "800",
    background: "linear-gradient(90deg, #38bdf8, #6366f1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  menu: {
    listStyle: "none",
    display: "flex",
    gap: "clamp(1.5rem, 4vw, 3rem)",
    margin: 0,
    padding: 0,
  },

  link: {
    textDecoration: "none",
    color: "#e5e7eb",
    fontWeight: "700",
    letterSpacing: "1px",
  },

  hamburger: {
    cursor: "pointer",
    color: "#fff",
  },

  mobileMenu: {
    position: "fixed",
    top: "80px",
    left: 0,
    width: "100%",
    height: "35%",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "25px",
  },

  mobileLink: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#1e3a8a",
    textDecoration: "none",
  },
};
