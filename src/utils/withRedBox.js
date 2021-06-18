import React from "react";

const withRedBox =
  (Component) =>
  ({ ...props }) =>
    <Component style={{ border: "red 1px solid" }} {...props} />;

/*
const withRedBox = (Component) => {
  class WithRedBox extends React.Component {
    render() {
      return <Component style={{ border: "red 1px solid" }} {...this.props} />;
    }
  }
  return WithRedBox;
};
*/

export default withRedBox;
