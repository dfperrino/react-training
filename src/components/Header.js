import React from "react";
import { usePrevious } from "../utils/usePrevious";

const mockApiCall = async (isFemale) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(isFemale ? "Michelle Jordan" : "Michael Jordan");
    }, 5000);
  });

const Header = ({ title, onClick, isFemale = false }) => {
  const [userName, setUserName] = React.useState("pepito");

  React.useEffect(() => {
    console.log("passing");
    const fetchUserName = async () => {
      const name = await mockApiCall(isFemale);
      setUserName(name);
    };
    fetchUserName();
  }, [isFemale]);

  const prevUserName = usePrevious(userName);
  console.log(prevUserName);

  return (
    <header onClick={onClick}>
      <h1>{title}</h1>
      <nav>
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
          <li>Option 4</li>
        </ul>
      </nav>
      <h3>{userName}</h3>
    </header>
  );
};

export default Header;
