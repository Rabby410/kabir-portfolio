import Link from "next/link";
import React from "react";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-dark text-white sticky-top py-3">
      <nav className="container">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link href="#" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#about" className="nav-link">
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#experience" className="nav-link">
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#education" className="nav-link">
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#wd" className="nav-link">
              Work Demonstration
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#cr" className="nav-link">
              Client Review
            </Link>
          </li>
          <li className="nav-item"><Link href="#contact" className="nav-link">
          Contact
        </Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
