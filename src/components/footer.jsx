import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 Kabir Hossain Nayan. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#333",
  color: "white",
  textAlign: "center",
  padding: "1rem",
  bottom: 0,
  width: "100%",
};

export default Footer;
