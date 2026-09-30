'use client';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "5C4033",
      borderTop: "2px solid #D4AF37",
      padding: "2rem",
      marginTop: "3rem",
      textAlign: "center",
      fontSize: "0.9rem"
    }}>
      <p style={{
        color: "#D4AF37",
        marginBottom: "1rem",
        fontFamily: "'Cormorant Garamond', serif"
      }}>
        Follow us:
      </p>
      <div style={{
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        marginBottom: "1rem",
        flexWrap: "wrap"
      }}>
        <a href="https://instagram.com/cantina.cebichera" style={{
          color: "#FF8844",
          textDecoration: "none",
          fontFamily: "'Cormorant Garamond', serif"
        }}>
          @cantina.cebichera
        </a>
        <a href="https://instagram.com/cantina.sabor.latino" style={{
          color: "#FF8844",
          textDecoration: "none",
          fontFamily: "'Cormorant Garamond', serif"
        }}>
          @cantina.sabor.latino
        </a>
      </div>
      
      <p style={{
        color: "#D4AF37",
        marginBottom: "0.5rem",
        fontFamily: "'Cormorant Garamond', serif"
      }}>
        📧 hola@cantinas.au
      </p>
      
      <p style={{
        color: "#D4AF37",
        marginTop: "1.5rem",
        fontSize: "0.85rem",
        opacity: 0.8
      }}>
        © 2026 Cantinas. Sharing stories through food.
      </p>
    </footer>
  );
}