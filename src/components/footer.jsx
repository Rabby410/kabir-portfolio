import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 Kabir Hossain Nayan. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  background: "linear-gradient(to right, #2980B9, #6DD5FA)",
  color: "white",
  textAlign: "center",
  padding: "1rem",
  bottom: 0,
  width: "100%",
  boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)", // Optional: add a subtle shadow

  // Responsive styles
  "@media (max-width: 768px)": {
    padding: "0.5rem",
    fontSize: "0.8rem",
  },
};

export default Footer;
