import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const WA = (msg: string) =>
  `https://wa.me/61431603800?text=${encodeURIComponent(msg)}`;

const photos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

// Completá con los datos del próximo episodio
const nextEpisode = {
  title: "Next episode",
  text: "Fecha, venue y tema del próximo episodio. Lugares limitados.",
};

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
} as const;

export default function CebicheraPage() {
  return (
    <>
      <Header />
      <Nav />

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "1.5rem 1rem" }}>
        <section style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1 style={{
            fontFamily: "'Lobster', cursive",
            fontWeight: 400,
            fontSize: "clamp(2rem, 6vw, 3rem)",
            color: "#D9481F",
            margin: "0 0 0.5rem",
          }}>
            Cantina Cebichera
          </h1>
          <p style={{ fontFamily: "'Montserrat', sans-serif", color: "#3D4D4D", fontSize: "1rem", margin: 0 }}>
            Curated storytelling dinner series
          </p>
        </section>

        <section style={{
          border: "2px solid #E9B54E",
          borderRadius: "8px",
          padding: "1.5rem",
          backgroundColor: "#FBF6EA",
          marginBottom: "2rem",
        }}>
          <h2 style={{
            fontFamily: "'Lobster', cursive",
            fontWeight: 400,
            fontSize: "1.6rem",
            color: "#D9481F",
            margin: "0 0 0.75rem",
          }}>
            {nextEpisode.title}
          </h2>
          <p style={{ fontFamily: "'Montserrat', sans-serif", color: "#1D2B2B", margin: "0 0 1.25rem" }}>
            {nextEpisode.text}
          </p>
          <a
            href={WA("Hi Daniel, I'd like to reserve a seat for Cantina Cebichera.")}
            target="_blank"
            rel="noopener noreferrer"
            style={btnStyle}
          >
            Reserve
          </a>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{
            fontFamily: "'Lobster', cursive",
            fontWeight: 400,
            fontSize: "1.8rem",
            color: "#D9481F",
            margin: "0 0 1rem",
          }}>
            Gallery
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "0.75rem",
          }}>
            {photos.map((p) => (
              <img
                key={p}
                src={`/images/cebichera/${p}`}
                alt="Cantina Cebichera"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  border: "2px solid #E9B54E",
                  display: "block",
                }}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}