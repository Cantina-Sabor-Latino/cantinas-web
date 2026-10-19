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
  backgroundColor: "#18504F",
  color: "#F6B95C",
  textDecoration: "none",
  fontSize: "0.95rem",
  fontWeight: 600,
  borderRadius: "4px",
  fontFamily: "'Montserrat', sans-serif",
  transition: "all 0.3s",
} as const;

const hoverOn = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.currentTarget.style.backgroundColor = "#D9481F";
  e.currentTarget.style.color = "#FFFFFF";
  e.currentTarget.style.transform = "translateY(-2px)";
};
const hoverOff = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.currentTarget.style.backgroundColor = "#18504F";
  e.currentTarget.style.color = "#F6B95C";
  e.currentTarget.style.transform = "translateY(0)";
};

export default function Hero() {
  return (
    <section style={{ backgroundColor: "#FAF3E3", padding: "1rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <img
          src="/images/van.jpg"
          alt="Cantina Sabor Latino food truck"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            border: "2px solid #E9B54E",
            display: "block",
          }}
        />
        <h1 style={{
          fontFamily: "'Lobster', cursive",
          fontWeight: 400,
          fontSize: "clamp(1.8rem, 5vw, 2.6rem)",
          color: "#D9481F",
          margin: "1.25rem 0 0.5rem",
        }}>
          Your event, with Latin flavour
        </h1>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "1rem",
          color: "#3D4D4D",
          margin: "0 0 1.25rem",
        }}>
          End-of-year parties, functions and catering across Melbourne
        </p>
        <a
          href={waLink("Hi Daniel, I'd like to book the Cantina Sabor Latino van.")}
          target="_blank"
          rel="noopener noreferrer"
          style={btnStyle}
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
        >
          Book the van
        </a>
      </div>

      <div style={{
        maxWidth: "900px",
        margin: "1.5rem auto 0",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "1rem",
      }}>
        {services.map((s) => (
          <div key={s.title} style={{
            border: "2px solid #E9B54E",
            borderRadius: "8px",
            padding: "1.25rem",
            backgroundColor: "#FBF6EA",
            display: "flex",
            flexDirection: "column",
          }}>
            <h2 style={{
              fontFamily: "'Lobster', cursive",
              fontWeight: 400,
              fontSize: "1.4rem",
              color: "#D9481F",
              margin: "0 0 0.5rem",
            }}>
              {s.title}
            </h2>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.95rem",
              color: "#1D2B2B",
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
              onMouseEnter={hoverOn}
              onMouseLeave={hoverOff}
            >
              Enquire on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}