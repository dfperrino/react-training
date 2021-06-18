import React from "react";

const BugComponent = () => {
  const handleClick = () => {};
  throw Error("I'm a buggy component");
  return <button onClick={handleClick}>Click me! 🚀</button>;
};

export default BugComponent;
