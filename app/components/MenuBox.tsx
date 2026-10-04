'use client';

export default function MenuBox() {
  const menuItems = [
    { category: "Empanadas", items: [
      { name: "Beef", desc: "ground beef & spices", price: "$8" },
      { name: "Pork", desc: "pulled pork & orange", price: "$8" },
      { name: "Vego", desc: "potato, corn & lentils (gf/vegan)", price: "$8" }
    ]},
    { category: "Tacos", items: [
      { name: "Beef", desc: "braised beef & coleslaw", price: "$8" },
      { name: "Pollo", desc: "roasted chicken & mole sauce", price: "$8" }
    ]},
    { category: "Sanguches", items: [
      { name: "Pan de Pollo", desc: "crispy chicken roll w/ potato crisps & Parmesan slaw", price: "$14" }
    ]},
    { category: "Combos", items: [
      { name: "Combo 1", desc: "any 3 empanadas", price: "$22" },
      { name: "Combo 2", desc: "any 3 tacos", price: "$22" }
    ]}
  ];

  return (
    <div style={{
      maxWidth: "900px",
      margin: "2rem auto",
      padding: "0 1.5rem"
    }}>
      <h2 style={{
        fontSize: "2rem",
        color: "#FF8844",
        fontStyle: "italic",
        marginBottom: "1.5rem",
        fontFamily: "'Poppins', sans-serif",
        textAlign: "center"
      }}>
        Menú Sabor Latino
      </h2>

      {menuItems.map((section) => (
        <div key={section.category} style={{
          border: "2px solid #D4AF37",
          padding: "1.25rem",
          marginBottom: "1rem",
          borderRadius: "4px",
          backgroundColor: "rgba(45, 106, 107, 0.3)"
        }}>
          <h3 style={{
            fontSize: "1.5rem",
            color: "#FF8844",
            fontStyle: "italic",
            marginBottom: "0.8rem",
            fontFamily: "'Poppins', sans-serif"
          }}>
            {section.category}
          </h3>
          
          {section.items.map((item) => (
            <div key={item.name} style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "0.8rem",
              fontSize: "0.95rem"
            }}>
              <div>
                <div style={{ color: "#D4AF37", fontWeight: 500 }}>
                  {item.name}
                </div>
                <div style={{ color: "#D4AF37", fontSize: "0.85rem", opacity: 0.9 }}>
                  {item.desc}
                </div>
              </div>
              <div style={{ color: "#FF8844", fontWeight: 600 }}>
                {item.price}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}