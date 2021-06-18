import React from "react";
import { useUser } from "../state/UserContext";

const Header = ({ title, style = {} }) => {
  const { changeUser } = useUser();
  return (
    <header style={style} onClick={changeUser}>
      <h1>{title}</h1>
      <Nav />
      <UserBox />
    </header>
  );
};

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>

        <li>Option 4</li>
      </ul>
    </nav>
  );
};

const UserBox = () => {
  const { userName } = useUser();
  return <h3>{userName}</h3>;
};

export default Header;
