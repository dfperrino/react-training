import React from "react";
import List from "./List";
import { allergens } from "../data";

const Content = () => {
  const [menu, setMenu] = React.useState([]);
  const handleAdd = (id) => {
    setMenu((pv) => [...pv, allergens.find((a) => a.id === id)]);
  };
  return (
    <div className="flex w-100">
      <div className="w-50">
        <h1>Available:</h1>
        <List items={allergens} onSelect={handleAdd} showButtons />
      </div>
      <div className="w-50">
        <h1>Menu:</h1>
        <List items={menu} />
      </div>
    </div>
  );
};

export default Content;
