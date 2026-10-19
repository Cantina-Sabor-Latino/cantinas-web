'use client';

const WA_NUMBER = "61431603800";
const waLink = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

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
  textDecoration: "none",
  fontFamily: "'Montserrat', sans-serif",
  transition: "all 0.3s",
  textAlign: "center",
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
        <a
          href={waLink("Hi Daniel, I'd like to order from Cantina Sabor Latino.")}
          target="_blank"
          rel="noopener noreferrer"
          style={btnStyle}
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
        >
          Order via WhatsApp
        </a>
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
          <a
            href={waLink("Hi Daniel, when is the next Cantina Cebichera episode?")}
            target="_blank"
            rel="noopener noreferrer"
            style={btnStyle}
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
          >
            Next Episode
          </a>
          <a
            href={waLink("Hi Daniel, I'd like to reserve a seat for Cantina Cebichera.")}
            target="_blank"
            rel="noopener noreferrer"
            style={btnStyle}
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
          >
            Reserve
          </a>
        </div>
      </div>
    </div>
  );
}