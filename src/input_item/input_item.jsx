import React, { Component } from "react";

class InputItem extends Component {
  render() {
    const { key, todo } = this.props.todos;
    return (
      <li>
        <input type="checkbox" id={key} />
        <label htmlFor={key}>
          <span>{todo}</span>
        </label>
        <span>❌</span>
      </li>
    );
  }
}

export default InputItem;
