import React from "react";
import { useParams } from "react-router-dom";

const HelpDetail = (props) => {
  const params = useParams();
  return (
    <div>
     <h3>{params.name}</h3>
     <p>Here we are going to show {params.name} help</p>
    </div>
  );
};

export default HelpDetail;
