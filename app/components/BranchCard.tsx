'use client';

const cardStyle = {
  border: "2px solid #E9B54E",
  padding: "1.5rem",
  borderRadius: "8px",
  backgroundColor: "#FBF6EA",
};

const btnStyle = {
  display: "inline-block",
  padding: "0.75rem 1.5rem",
  backgroundColor: "#18504F",
  color: "#F6B95C",
  fontSize: "0.95rem",
  fontWeight: 600,
  borderRadius: "4px",
  cursor: "pointer",
  border: "none",
  fontFamily: "'Montserrat', sans-serif",
  textDecoration: "none",
  transition: "all 0.3s",
} as const;

const hoverOn = (e: React.MouseEvent<HTMLElement>) => {
  e.currentTarget.style.backgroundColor = "#D9481F";
  e.currentTarget.style.color = "#FFFFFF";
  e.currentTarget.style.transform = "translateY(-2px)";
};
const hoverOff = (e: React.MouseEvent<HTMLElement>) => {
  e.currentTarget.style.backgroundColor = "#18504F";
  e.currentTarget.style.color = "#F6B95C";
  e.currentTarget.style.transform = "translateY(0)";
};

export default function BranchCard() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "1rem",
      margin: "1rem auto",
      maxWidth: "900px",
      padding: "0 1rem",
    }}>
      {/* Sabor Latino - LEFT */}
      <div style={cardStyle}>
        <h2 style={{
          fontFamily: "'Lobster', cursive",
          fontWeight: 400,
          fontSize: "1.8rem",
          color: "#D9481F",
          marginBottom: "1rem",
        }}>
          Cantina Sabor Latino
        </h2>
        <p style={{
          fontSize: "0.95rem",
          color: "#1D2B2B",
          marginBottom: "1rem",
          fontFamily: "'Montserrat', sans-serif",
        }}>
          Everyday Latin American cuisine. Find us at markets, bars, and pop-up venues across Melbourne.
        </p>
        <button style={btnStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
          Order via WhatsApp
        </button>
      </div>

      {/* Cebichera - RIGHT */}
      <div style={cardStyle}>
        <h2 style={{
          fontFamily: "'Lobster', cursive",
          fontWeight: 400,
          fontSize: "1.8rem",
          color: "#D9481F",
          marginBottom: "1rem",
        }}>
          Cantina Cebichera
        </h2>
        <p style={{
          fontSize: "0.95rem",
          color: "#1D2B2B",
          marginBottom: "1rem",
          fontFamily: "'Montserrat', sans-serif",
        }}>
          Curated storytelling dinner series. Each episode is a narrative, a menu, and a moment.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button style={btnStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
            Next Episode
          </button>
          <button style={btnStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}