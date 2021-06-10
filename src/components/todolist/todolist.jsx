import React, { Component } from "react";
import ToDoItem from "../todoitem/todoitem";

class ToDoList extends Component {
  popToDo = (toDo) => {
    this.props.popToDo(toDo);
  };

  render() {
    const { toDos } = this.props;
    return (
      <div className="list">
        <ul>
          {toDos &&
            toDos.map((item) => (
              <ToDoItem key={item.key} toDo={item} popToDo={this.popToDo} />
            ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
