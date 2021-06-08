import React, { Component } from "react";

class ToDoItem extends Component {
  handleReset = () => {
    this.props.onToDo(this.props.toDo);
  };

  render() {
    const { key, toDo } = this.props.toDo;
    return (
      <li>
        <input type="checkbox" id={key} />
        <label htmlFor={key}>
          <span>{toDo}</span>
        </label>
        <button onClick={this.handleReset}>❌</button>
      </li>
    );
  }
}

export default ToDoItem;