'use client';

export default function BranchCard() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "1rem",
      margin: "1rem auto",
      maxWidth: "900px",
      padding: "0 1rem"
    }}>
      {/* Sabor Latino - LEFT */}
      <div style={{
        border: "2px solid #D4AF37",
        padding: "1.5rem",
        borderRadius: "8px",
        backgroundColor: "rgba(92, 64, 51, 0.5)"
      }}>
        <h2 style={{
          fontSize: "1.8rem",
          color: "#FF8844",
        
          marginBottom: "1rem",
          fontFamily: "'Poppins', sans-serif",
        }}>
          Cantina Sabor Latino
        </h2>
        <p style={{
          fontSize: "0.95rem",
          color: "#D4AF37",
          marginBottom: "1rem",
          fontFamily: "'Poppins', sans-serif"
        }}>
          Everyday Latin American cuisine. Find us at markets, bars, and pop-up venues across Melbourne.
        </p>
        <button style={{
          display: "inline-block",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#FF8844",
          color: "#5C4033",
          textDecoration: "none",
          fontSize: "0.95rem",
          fontWeight: 600,
          borderRadius: "4px",
          marginTop: "1rem",
          cursor: "pointer",
          border: "none",
          fontFamily: "'Poppins', sans-serif",
          transition: "all 0.3s"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#D4AF37";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#FF8844";
          e.currentTarget.style.transform = "translateY(0)";
        }}>
          Order via WhatsApp
        </button>
      </div>

      {/* Cebichera - RIGHT */}
      <div style={{
        border: "2px solid #D4AF37",
        padding: "1.5rem",
        borderRadius: "8px",
        backgroundColor: "rgba(92, 64, 51, 0.5)"
      }}>
        <h2 style={{
          fontSize: "1.8rem",
          color: "#FF8844",
          
          marginBottom: "1rem",
          fontFamily: "'Poppins', sans-serif"
        }}>
          Cantina Cebichera
        </h2>
        <p style={{
          fontSize: "0.95rem",
          color: "#D4AF37",
          marginBottom: "1rem",
          fontFamily: "'Poppins', sans-serif"
        }}>
          Curated storytelling dinner series. Each episode is a narrative, a menu, and a moment.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#FF8844",
            color: "#5C4033",
            fontSize: "0.95rem",
            fontWeight: 600,
            borderRadius: "4px",
            cursor: "pointer",
            border: "none",
            fontFamily: "'Poppins', sans-serif",
            transition: "all 0.3s"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#D4AF37";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#FF8844";
            e.currentTarget.style.transform = "translateY(0)";
          }}>
            Next Episode
          </button>
          <button style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#FF8844",
            color: "#5C4033",
            fontSize: "0.95rem",
            fontWeight: 600,
            borderRadius: "4px",
            cursor: "pointer",
            border: "none",
            fontFamily: "'Poppins', sans-serif",
            transition: "all 0.3s"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#D4AF37";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#FF8844";
            e.currentTarget.style.transform = "translateY(0)";
          }}>
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}