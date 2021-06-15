import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import Header from "./components/Header";
import { useState } from "react";
import { allergens } from "./data";

function App() {
  const [menu, setMenu] = useState([]);
  const [title, setTitle] = useState("React Training");

  const handleAdd = (id) => {
    setMenu((pv) => [...pv, allergens.find((a) => a.id === id)]);
  };

  const handleHeaderClick = () => setTitle(title + "g");

  return (
    <div className="App">
      <Header title={title} onClick={handleHeaderClick} />
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
