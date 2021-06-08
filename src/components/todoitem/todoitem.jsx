import React, { Component } from "react";

class ToDoItem extends Component {
  handleReset = () => {
    //눌린 키값 / 빙글빙글 키값 :: 비교

    console.log(this.props.toDo);
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
