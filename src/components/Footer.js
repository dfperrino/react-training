import React from "react";
import { useUser } from "../state/UserContext";

const Footer = () => {
  const { userName, isLoading, isLoaded } = useUser();
  return (
    <footer style={{ textAlign: "center" }}>
      {isLoading && <p>Current user is loading</p>}
      {!isLoading && !isLoaded && <p>There isn't a user logged</p>}
      {isLoaded && <p>Current user logged: {userName}</p>}
    </footer>
  );
};

export default Footer;
