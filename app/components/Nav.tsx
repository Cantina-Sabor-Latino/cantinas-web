'use client';

import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Sabor Latino", href: "/sabor-latino" },
  { label: "Cebichera", href: "/cebichera" },
  { label: "Enquiries", href: "/#contact" },
];

export default function Nav() {
  return (
    <nav style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "0.5rem 1.5rem",
      padding: "0.75rem 1rem",
      backgroundColor: "#18504F",
      borderBottom: "2px solid #E9B54E",
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "0.9rem",
    }}>
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          style={{
            color: "#F6D9A8",
            textDecoration: "none",
            fontWeight: 500,
            padding: "0.25rem",
            borderBottom: "2px solid transparent",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#F6B95C";
            e.currentTarget.style.borderBottom = "2px solid #F6B95C";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#F6D9A8";
            e.currentTarget.style.borderBottom = "2px solid transparent";
          }}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}