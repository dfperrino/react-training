import React from "react";
import logo from "../logo.svg";
import BugComponent from "./BugComponent";
import ErrorCatcher from "./ErrorCatcher";

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

export default SubHeader;
