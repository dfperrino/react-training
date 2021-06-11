import React from "react";
import Allergen from "./Allergen";

const List = (props) => {
  const handleSelect = (id) => {
    props.onSelect(id);
  };

  return (
    <div>
      {props.items.map((a) => (
        <Allergen
          key={a.id}
          name={a.text}
          icon={a.icon}
          hot={a.yummy}
          showButton={props.showButtons}
          onSelect={() => handleSelect(a.id)}
        />
      ))}
    </div>
  );
};

export default List;
