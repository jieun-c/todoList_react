import React, { Component } from "react";

class ToDoItem extends Component {
  render() {
    const { key, toDo } = this.props.toDos;
    return (
      <li>
        <input type="checkbox" id={key} />
        <label htmlFor={key}>
          <span>{toDo}</span>
        </label>
        <span>❌</span>
      </li>
    );
  }
}

export default ToDoItem;
