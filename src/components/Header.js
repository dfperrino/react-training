import React from "react";

class Header extends React.Component {
  componentDidMount() {
    window.alert("mount");
  }
  componentDidUpdate() {
    window.alert("update");
  }
  render() {
    return (
      <header onClick={this.props.onClick}>
        <h1>{this.props.title}</h1>
        <nav>
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
            <li>Option 4</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
