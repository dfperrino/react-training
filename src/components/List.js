import React from "react";
import { useHistory } from "react-router";
import Allergen from "./Allergen";

const List = (props) => {
  const history = useHistory();
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
          onClick={() => history.push(`/allergen/${a.text}`)}
        />
      ))}
    </div>
  );
};

export default List;
