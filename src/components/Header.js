import React from "react";

const mockApiCall = async () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Michael Jordan");
    }, 5000);
  });

const Header = (props) => {
  const [userName, setUserName] = React.useState("pepito");

  React.useEffect(() => {
    const fetchUserName = async () => {
      const name = await mockApiCall();
      setUserName(name);
    };
    fetchUserName();
  }, []);

  return (
    <header onClick={props.onClick}>
      <h1>{props.title}</h1>
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
