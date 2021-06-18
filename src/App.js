import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import Header from "./components/Header";
import BugComponent from "./components/BugComponent";
import ErrorCatcher from "./components/ErrorCatcher";
import { useState } from "react";
import { allergens } from "./data";

const Content = () => {
  const [menu, setMenu] = useState([]);
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

const SubHeader = () => {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <ErrorCatcher>
        <BugComponent />
      </ErrorCatcher>
    </>
  );
};

const App = () => {
  const [isFemale, setIsFemale] = useState(false);

  const title = "React Training";

  const handleHeaderClick = () => setIsFemale(!isFemale);

  return (
    <div className="App">
      <Header title={title} isFemale={isFemale} onClick={handleHeaderClick} />
      <SubHeader />
      <Content />
    </div>
  );
};

export default App;
