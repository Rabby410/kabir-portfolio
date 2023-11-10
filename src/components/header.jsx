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
    <header
      className="bg-primary text-white sticky-top py-3 text-white"
      style={{
        background:
          "linear-gradient(to right, #1e5799, #2989d8, #207cca, #7db9e8)",
      }}
    >
      <nav className="container">
        <ul className="nav justify-content-center" style={{ textDecoration: "none" }}>
          <li className="nav-item">
            <Link href="#hero" className="nav-link">
              {/* Replace "Home" with a round favicon image */}
              <img
                src="/kabir.jpg" // Update the path to your favicon image
                alt="Favicon"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#about" className="nav-link" style={{color: "white"}}>
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#experience" className="nav-link" style={{color: "white"}}>
              Experience
            </Link>
          </li>

          <li className="nav-item">
            <Link href="#wd" className="nav-link" style={{color: "white"}}>
              Work Demonstration
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#education" className="nav-link" style={{color: "white"}}>
              Education
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link href="#cr" className="nav-link">
              Client Review
            </Link>
          </li> */}
          <li className="nav-item">
            <Link href="#contact" className="nav-link" style={{color: "white"}}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
