import React, { useState } from "react";

const Allergen = (props) => {
  const [selected, setSelected] = useState(false);

  const hadleClick = () => {
    props.onSelect();
    setSelected(true);
  };

  return (
    <div>
      {props.icon} - {props.name}
      {props.hot && "🔥"}
      {props.showButton && (
        <>
          {" "}
          -
          <button disabled={selected} onClick={hadleClick}>
            Select
          </button>
        </>
      )}
    </div>
  );
};

export default Allergen;
