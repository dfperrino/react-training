import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import { useState } from "react";
import { allergens } from "./data";

function App() {
  const [menu, setMenu] = useState([]);

  const handleAdd = (id) => {
    setMenu((pv) => [...pv, allergens.find((a) => a.id === id)]);
  };

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

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
    </div>
  );
}

export default App;
