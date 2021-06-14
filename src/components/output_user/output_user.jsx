import React, { PureComponent } from "react";

class OutputUser extends PureComponent {
  render() {
    return (
      <h1>
        Hello, <span>{this.props.name}</span>!
      </h1>
    );
  }
}

export default OutputUser;
