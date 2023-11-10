import React from "react";

const Hero = () => {
  const heroStyle = {
    background:
      'url("https://images.unsplash.com/photo-1524169358666-79f22534bc6e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRmb2xpbyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D") center/cover no-repeat', // Replace with your image path
    color: "white",
    textAlign: "center",
    padding: "100px 0",
  };

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const subheadingStyle = {
    fontSize: "1.5rem",
    marginBottom: "40px",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 20px",
    fontSize: "1.2rem",
    textDecoration: "none",
    borderRadius: "5px",
  };

  return (
    <section style={heroStyle} id="hero">
      <div className="container">
        <h1 style={headingStyle}>Welcome to My Portfolio</h1>
        <p style={subheadingStyle}>Showcasing my skills and projects</p>
        <a href="#portfolio" style={buttonStyle}>
          <a href="tel:+8801936906837" className="text-black">Contact me</a>
        </a>
      </div>
    </section>
  );
};
export default Hero;
