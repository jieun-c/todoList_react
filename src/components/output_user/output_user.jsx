import React, { Component } from "react";

class OutputUser extends Component {
  render() {
    return (
      <>
        <h1>
          Hello, <span>{this.props.name}</span>!
        </h1>
      </>
    );
  }
}

export default OutputUser;
