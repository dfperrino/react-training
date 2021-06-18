import React from "react";

const mockApiCall = async (isFemale) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(isFemale ? "Michelle Jordan" : "Michael Jordan");
    }, 5000);
  });

const Header = ({ title, onClick, isFemale = false }) => {
  const [userName, setUserName] = React.useState("pepito");

  React.useEffect(() => {
    const fetchUserName = async () => {
      const name = await mockApiCall(isFemale);
      setUserName(name);
    };
    fetchUserName();
  }, [isFemale]);

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
