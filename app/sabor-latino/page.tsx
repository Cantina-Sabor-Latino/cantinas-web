import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const WA = (msg: string) =>
  `https://wa.me/61431603800?text=${encodeURIComponent(msg)}`;

const photos: string[] = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];

type Item = { name: string; desc: string; price: string; tags?: string[]; contains?: string };
type Block = { section: string; note?: string; items: Item[] };

const menu: Block[] = [
  {
    section: "Empanadas",
    note: "Flaky handmade pastry, served with our Latíname sauce — tomato, red chilli, garlic, onion & spices. Mild heat 🌶️",
    items: [
      { name: "Beef", desc: "spiced ground beef", price: "8" },
      { name: "Pork", desc: "tender pulled pork with a citrus kick of orange", price: "8" },
      // CONFIRMAR: ¿la masa de la Vego es realmente GF y vegana?
      { name: "Vego", desc: "potato, sweet corn & lentils", price: "8", tags: ["VG", "GF"] },
    ],
  },
  {
    section: "Tacos",
    note: "Soft corn tortillas with fresh coleslaw",
    items: [
      { name: "Beef", desc: "tender braised beef", price: "8" },
      // CONFIRMAR: si el mole lleva almendras o sésamo, agregar: contains: "nuts, sesame"
      { name: "Pollo", desc: "roast chicken in mole — Mexico's rich, dark sauce of dried chillies, warm spices, onion & dark cocoa", price: "8" },
    ],
  },
  {
    section: "Sanguches",
    items: [
      { name: "Pan de Pollo", desc: "our signature: crispy chicken roll with potato crisps & Parmesan slaw", price: "14" },
    ],
  },
  {
    section: "Combos",
    items: [
      { name: "Combo 1", desc: "any 3 empanadas", price: "22" },
      { name: "Combo 2", desc: "any 3 tacos", price: "22" },
    ],
  },
];

const tagStyle = {
  display: "inline-block",
  marginLeft: "0.4rem",
  padding: "0.05rem 0.4rem",
  fontSize: "0.7rem",
  fontWeight: 700,
  borderRadius: "4px",
  backgroundColor: "#18504F",
  color: "#FAF3E3",
  verticalAlign: "middle",
} as const;
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

export default function SaborLatinoPage() {
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
            Cantina Sabor Latino
          </h1>
          <p style={{ fontFamily: "'Montserrat', sans-serif", color: "#3D4D4D", fontSize: "1rem", margin: 0 }}>
            Latin street food · catering & events
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{
            fontFamily: "'Lobster', cursive",
            fontWeight: 400,
            fontSize: "1.8rem",
            color: "#D9481F",
            margin: "0 0 1rem",
          }}>
            Menu
          </h2>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.85rem", color: "#3D4D4D", margin: "-0.5rem 0 1rem" }}>
            <span style={tagStyle}>VG</span> vegan · <span style={tagStyle}>GF</span> gluten-free · Allergies or dietary needs? Ask us before ordering.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem",
          }}>
            {menu.map((block) => (
              <div key={block.section} style={{
                border: "2px solid #E9B54E",
                borderRadius: "8px",
                padding: "1.25rem",
                backgroundColor: "#FBF6EA",
              }}>
                <h3 style={{
                  fontFamily: "'Lobster', cursive",
                  fontWeight: 400,
                  fontSize: "1.5rem",
                  color: "#D9481F",
                  margin: 0,
                }}>
                  {block.section}
                </h3>
                {block.note && (
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.85rem", color: "#3D4D4D", margin: "0.25rem 0 0.75rem" }}>
                    {block.note}
                  </p>
                )}
                {block.items.map((item) => (
                  <div key={item.name + item.desc} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                    padding: "0.6rem 0",
                    borderTop: "1px solid #E9B54E",
                    fontFamily: "'Montserrat', sans-serif",
                    color: "#1D2B2B",
                  }}>
                    <span>
                      <strong>{item.name}:</strong> {item.desc}
                      {item.tags?.map((t) => (
                        <span key={t} style={tagStyle}>{t}</span>
                      ))}
                      {item.contains && (
                        <em style={{ display: "block", fontSize: "0.8rem", color: "#3D4D4D" }}>
                          Contains: {item.contains}
                        </em>
                      )}
                    </span>
                                        <strong style={{ color: "#18504F", whiteSpace: "nowrap" }}>${item.price}</strong>
                  </div>
                ))}
              </div>
            ))}
          </div>
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
                src={`/images/sabor-latino/${p}`}
                alt="Cantina Sabor Latino"
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

        <section style={{ textAlign: "center", marginBottom: "1rem" }}>
          <a
            href={WA("Hi Daniel, I'd like to order from Cantina Sabor Latino.")}
            target="_blank"
            rel="noopener noreferrer"
            style={btnStyle}
          >
            Order via WhatsApp
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}