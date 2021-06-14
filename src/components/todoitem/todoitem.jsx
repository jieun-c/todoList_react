import React, { PureComponent } from "react";
import styles from "./todoitem.module.css";

class ToDoItem extends PureComponent {
  handleRemove = () => {
    this.props.popToDo(this.props.toDo);
  };

  handleCheck = (e) => {
    this.props.onCheck(e.target.checked, this.props.toDo);
  };

  render() {
    const { key, toDo, isChecked } = this.props.toDo;
    const middleLine = isChecked ? styles.toDoDone : styles.toDoYet;
    return (
      <li className={styles.list}>
        <input
          type="checkbox"
          className={styles.check}
          id={key}
          onChange={this.handleCheck}
          checked={isChecked}
        />
        <label htmlFor={key}>
          <span className={`${styles.todo} ${middleLine}`}>{toDo}</span>
        </label>
        <button className={styles.deleteBtn} onClick={this.handleRemove}>
          ❌
        </button>
      </li>
    );
  }
}

export default ToDoItem;
