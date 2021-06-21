import React from "react";
import { useUser } from "../state/UserContext";
import { Link, NavLink } from "react-router-dom"
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
        <NavLink to="/" exact>Home 🏠</NavLink>
        <NavLink to="/allergen">Menú 🍕</NavLink>
        <NavLink to="/help">Help 🚧</NavLink>
      </ul>
    </nav>
  );
};

const UserBox = () => {
  const { userName } = useUser();
  return <h3>{userName}</h3>;
};

export default Header;
