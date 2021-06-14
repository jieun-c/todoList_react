import React, { Component } from "react";
import styles from "./todolist.module.css";
import ToDoItem from "../todoitem/todoitem";

class ToDoList extends Component {
  popToDo = (toDo) => {
    this.props.popToDo(toDo);
  };

  handleCheck = (checkEvent, toDo) => {
    this.props.onCheck(checkEvent, toDo);
  };

  render() {
    const { toDos } = this.props;
    return (
      <ul className={styles.listBox}>
        {toDos &&
          toDos.map((item) => (
            <ToDoItem
              key={item.key}
              toDo={item}
              popToDo={this.popToDo}
              onCheck={this.handleCheck}
            />
          ))}
      </ul>
    );
  }
}

export default ToDoList;
