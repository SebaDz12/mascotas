import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>&copy; 2024 Rescate de Mascotas. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "1rem 0",
    position: "fixed",
    width: "100%",
    bottom: 0,
    textAlign: "center",
  },
  container: {
    margin: "0 auto",
    maxWidth: "1200px",
    padding: "0 1rem",
  },
};

export default Footer;
