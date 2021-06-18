import React from "react";

const Header = ({ title, onClick, userName, style = {} }) => {
  return (
    <header style={style} onClick={onClick}>
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
