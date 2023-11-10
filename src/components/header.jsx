import Link from "next/link";
import React from "react";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header style={headerStyle}>
      <nav>
        <ul style={navStyle}>
            <li className="mx-5">Home</li>
            <li className="mx-5"><Link href="#about">About Me</Link></li>
            <li className="mx-5"><Link href="#experiance">Experiance</Link></li>
            <li className="mx-5">Education</li>
            <li className="mx-5">Work Demostration</li>
            <li className="mx-5">Client Review</li>
        </ul>
      </nav>
      <div className="contact">
      </div>
    </header>
  );
};

const headerStyle = {
  backgroundColor: "#333",
  color: "white",
  padding: "1rem",
  textAlign: "center",
};

const navStyle = {
  listStyle: "none",
  padding: 0,
  display: "flex",
  justifyContent: "center",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "1.2rem",
  margin: "0 1rem",
};

export default Header;
