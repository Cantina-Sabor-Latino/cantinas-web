'use client';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#5C4033",
      borderTop: "2px solid #D4AF37",
      padding: "1.25rem",
      marginTop: "0.5rem",
      textAlign: "center",
      fontSize: "1.1rem"
    }}>
      <p style={{
        color: "#D4AF37",
        marginBottom: "1rem",
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.2rem"
      }}>
        Follow us:
      </p>
      <div style={{
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        marginBottom: "1rem",
        flexWrap: "wrap",
        fontSize: "1.1rem"
      }}>
        <a href="https://instagram.com/cantina.sabor.latino" style={{
          color: "#FF8844",
          textDecoration: "none",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.1rem"
        }}>
          @cantina.sabor.latino
        </a>
        <a href="https://instagram.com/cantina.cebichera" style={{
          color: "#FF8844",
          textDecoration: "none",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.1rem"
        }}>
          @cantina.cebichera
        </a>
      </div>
      
      <p style={{
        color: "#D4AF37",
        marginBottom: "0.5rem",
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.1rem"
      }}>
        📧 hola@cantinas.au
      </p>
      
      <p style={{
        color: "#D4AF37",
        marginTop: "1.5rem",
        fontSize: "0.95rem",
        opacity: 0.8
      }}>
        © 2026 Cantinas. Sharing stories through food.
      </p>
    </footer>
  );
}