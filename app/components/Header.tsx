export default function Header() {
  return (
    <header style={{ backgroundColor: "#18504F", padding: "1.25rem 1rem", textAlign: "center" }}>
      <h1 style={{
        fontFamily: "'Lobster', cursive",
        fontWeight: 400,
        fontSize: "clamp(2rem, 7vw, 2.8rem)",
        color: "#F6B95C",
        margin: 0,
      }}>
        Cantinas
      </h1>
      <p style={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "0.95rem",
        color: "#F6D9A8",
        margin: "0.35rem 0 0",
        letterSpacing: "0.5px",
      }}>
        Sharing stories through food
      </p>
    </header>
  );
}