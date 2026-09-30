export default function Header() {
  return (
    <header style={{
      backgroundColor: "5C4033",
      borderBottom: "2px solid #D4AF37",
      padding: "1.5rem",
      textAlign: "center"
    }}>
      <h1 style={{
        fontSize: "2.5rem",
        color: "#FF8844",
        fontStyle: "italic",
        marginBottom: "0.5rem",
        fontFamily: "'Playfair Display', serif"
      }}>
        Cantinas
      </h1>
      <p style={{
        fontSize: "1rem",
        color: "#D4AF37",
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 300
      }}>
        Sharing stories through food
      </p>
    </header>
  );
}