import React, { useEffect } from "react";

const Header = (props) => {
  // On mount
  useEffect(() => {
    window.alert("mount");
  }, []);

  // On updates
  useEffect(() => {
    window.alert("update");
  }, [props.title]);

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
    </header>
  );
};

export default Header;
