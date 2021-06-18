import React from "react";
import { useUser } from "../state/UserContext";

const Footer = () => {
  const { userName } = useUser();
  return (
    <footer style={{ textAlign: "center" }}>
      <p>Current user logged: {userName}</p>
    </footer>
  );
};

export default Footer;
