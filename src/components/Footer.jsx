import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

const styles = {
  footer: {
    padding: "clamp(1rem, 4vw, 2rem) clamp(1rem, 5vw, 1.25rem)",
    textAlign: "center",
    background: "#020617",
    borderTop: "1px solid #1e293b",
  },
  text: {
    color: "#94a3b8",
    fontSize: "clamp(0.75rem, 2vw, 0.875rem)", // scales between ~12px and ~14px
    letterSpacing: "0.5px",
    lineHeight: "1.5",
    wordBreak: "break-word", // prevents overflow on small screens
  },
};
