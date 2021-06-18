import React from "react";

import "./App.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Content from "./components/Content";

import { fetchUsernameByGender } from "./api/user";

const useUser = (isFemale) => {
  const [userName, setUserName] = React.useState("pepito");

  React.useEffect(() => {
    const fetchUserName = async () => {
      const name = await fetchUsernameByGender(isFemale);
      setUserName(name);
    };
    fetchUserName();
  }, [isFemale]);

  return userName;
};

const App = () => {
  const title = "React Training";
  const [isFemale, setIsFemale] = React.useState(false);
  const handleHeaderClick = () => setIsFemale(!isFemale);

  const username = useUser(isFemale);

  return (
    <div className="App">
      <Header title={title} userName={username} onClick={handleHeaderClick} />
      <SubHeader />
      <Content />
    </div>
  );
};

export default App;
