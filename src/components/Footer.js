import React from "react";

const Footer = ({ userName }) => {
  return (
    <footer style={{ textAlign: "center" }}>
      <p>Current user logged: {userName}</p>
    </footer>
  );
};

export default Footer;
