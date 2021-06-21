import React from "react";
import { useParams } from "react-router-dom";

const AllergenDetail = (props) => {
  const params = useParams();
  return (
    <div>
     <h1>{params.name}</h1>
     <p>We don't have any informaion about this allergen yet. But we will get it soon 😉</p>
    </div>
  );
};

export default AllergenDetail;
