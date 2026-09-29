'use client' ; 
export default function Nav() {
  const links = ["Home", "Sabor Latino", "Cebichera", "Gallery", "Enquiries"];

  return (
    <nav style={{
      display: "flex",
      gap: "2rem",
      justifyContent: "center",
      padding: "1rem",
      fontSize: "0.95rem",
      flexWrap: "wrap",
      backgroundColor: "#2D6A6B",
      borderBottom: "1px solid #D4AF37"
    }}>
      {links.map((link) => (
        <a
          key={link}
          href="#"
          style={{
            color: "#D4AF37",
            textDecoration: "none",
            borderBottom: "1px solid transparent",
            transition: "all 0.3s",
            cursor: "pointer",
            fontFamily: "'Cormorant Garamond', serif"
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#FF8844";
            e.target.style.borderBottom = "1px solid #FF8844";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#D4AF37";
            e.target.style.borderBottom = "1px solid transparent";
          }}
        >
          {link}
        </a>
      ))}
    </nav>
  );
}