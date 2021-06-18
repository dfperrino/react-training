import React from "react";

import "./App.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { UserProvider } from "./state/UserContext";

const App = () => {
  const title = "React Training";

  return (
    <div className="App">
      <UserProvider>
        <Header title={title} />
        <SubHeader />
        <Content />
        <Footer />
      </UserProvider>
    </div>
  );
};

export default App;
