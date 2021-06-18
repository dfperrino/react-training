import React, { useEffect } from "react";

const heavyCalc = () => {
  for (let index = 0; index < 1e8; index++) {
    // nothing
  }
  return 0;
};

const Header = (props) => {
  // On mount
  useEffect(() => {
    window.alert("mount");
  }, []);

  // On updates
  useEffect(() => {
    window.alert("update");
  }, [props.title]);

  const calculateValue = () => {
    const t0 = performance.now();
    const value = heavyCalc();
    const t1 = performance.now();
    console.log("La llamada heavyCalc tardó " + (t1 - t0) + " milisegundos.");
    return value;
  };

  const calculatedValue = calculateValue();

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
