import React from "react";

const withRedBox =
  (Component) =>
  ({ ...props }) =>
    <Component style={{ border: "red 1px solid" }} {...props} />;

export default withRedBox;
