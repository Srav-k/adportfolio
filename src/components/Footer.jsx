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
    padding: "32px 20px",
    textAlign: "center",
    background: "#020617",
    borderTop: "1px solid #1e293b",
  },
  text: {
    color: "#94a3b8",
    fontSize: "14px",
    letterSpacing: "0.5px",
  },
};
