'use client';

const EMAIL = "salcedo.cantina.latina@gmail.com";

const linkStyle = {
  color: "#F6B95C",
  textDecoration: "none",
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "1rem",
} as const;

export default function Footer() { 
  return (
    <footer id="contact" style={{
      backgroundColor: "#18504F",
      borderTop: "2px solid #E9B54E",
      padding: "1.25rem",
      marginTop: "0.5rem",
      textAlign: "center",
    }}>
      <p style={{
        color: "#F6D9A8",
        marginBottom: "0.75rem",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "1.1rem",
      }}>
        Follow us:
      </p>
      <div style={{
        display: "flex",
        gap: "1.5rem",
        justifyContent: "center",
        flexWrap: "wrap",
        marginBottom: "0.75rem",
      }}>
        <a href="https://instagram.com/cantina.sabor.latino" style={linkStyle}>
          @cantina.sabor.latino
        </a>
        <a href="https://instagram.com/cantina.cebichera" style={linkStyle}>
          @cantina.cebichera
        </a>
      </div>
      <p style={{ marginBottom: "0.5rem" }}>
        <a href={`mailto:${EMAIL}`} style={{
          ...linkStyle,
          color: "#F6D9A8",
        }}>
          {EMAIL}
        </a>
      </p>
      <p style={{
        color: "#F6D9A8",
        marginTop: "0.75rem",
        fontSize: "0.85rem",
        opacity: 0.8,
        fontFamily: "'Montserrat', sans-serif",
      }}>
        © 2026 Cantinas. Sharing stories through food.
      </p>
    </footer>
  );
}