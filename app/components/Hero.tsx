'use client';

const WA_NUMBER = "61431603800";
const waLink = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const services = [
  {
    title: "End-of-Year Parties",
    text: "Year-end celebrations for your team or company. We bring Sabor Latino to you.",
    msg: "Hi Daniel, I'd like info on an end-of-year party.",
  },
  {
    title: "Functions",
    text: "Private functions, birthdays and celebrations with real Latin American food.",
    msg: "Hi Daniel, I'd like info on a private function.",
  },
  {
    title: "Events & Catering",
    text: "Events, markets and group catering. Up to 4 hours of service. Limited spots each weekend.",
    msg: "Hi Daniel, I'd like info on an event or catering.",
  },
];

const btnStyle = {
  display: "inline-block",
  padding: "0.75rem 1.5rem",
  backgroundColor: "#FF8844",
  color: "#5C4033",
  textDecoration: "none",
  fontSize: "0.95rem",
  fontWeight: 600,
  borderRadius: "4px",
  fontFamily: "'Poppins', sans-serif",
  transition: "all 0.3s",
} as const;

export default function Hero() {
  return (
    <section style={{ backgroundColor: "#5C4033", padding: "1rem" }}>
      {/* HERO */}
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <img
          src="/images/van.jpg"
          alt="Cantina Sabor Latino food truck"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            border: "2px solid #D4AF37",
            display: "block",
          }}
        />
        <h1 style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
          color: "#FF8844",
          margin: "1.25rem 0 0.5rem",
        }}>
          Your event, with Latin flavour
        </h1>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.1rem",
          color: "#D4AF37",
          margin: "0 0 1.25rem",
        }}>
          End-of-year parties, functions and catering across Melbourne
        </p>
        <a
          href={waLink("Hi Daniel, I'd like to book the Cantina Sabor Latino van.")}
          target="_blank"
          rel="noopener noreferrer"
          style={btnStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#D4AF37";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#FF8844";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Book the van
        </a>
      </div>

      {/* SERVICES */}
      <div style={{
        maxWidth: "900px",
        margin: "1.5rem auto 0",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "1rem",
      }}>
        {services.map((s) => (
          <div key={s.title} style={{
            border: "2px solid #D4AF37",
            borderRadius: "8px",
            padding: "1.25rem",
            backgroundColor: "rgba(92, 64, 51, 0.5)",
            display: "flex",
            flexDirection: "column",
          }}>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "1.3rem",
              color: "#FF8844",
              margin: "0 0 0.5rem",
            }}>
              {s.title}
            </h2>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1rem",
              color: "#D4AF37",
              margin: "0 0 1rem",
              flexGrow: 1,
            }}>
              {s.text}
            </p>
            <a
              href={waLink(s.msg)}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...btnStyle, textAlign: "center" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#D4AF37";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FF8844";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Enquire on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}