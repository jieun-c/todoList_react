import React, { PureComponent } from "react";
import styles from "./todoitem.module.css";

class ToDoItem extends PureComponent {
  handleRemove = () => {
    this.props.popToDo(this.props.toDo);
  };

  render() {
    const { key, toDo } = this.props.toDo;
    return (
      <li className={styles.list}>
        <input type="checkbox" className={styles.check} id={key} />
        <label htmlFor={key}>
          <span className={styles.todo}>{toDo}</span>
        </label>
        <button className={styles.deleteBtn} onClick={this.handleRemove}>
          ❌
        </button>
      </li>
    );
  }
}

export default ToDoItem;
