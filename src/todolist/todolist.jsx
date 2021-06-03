import React, { Component } from "react";
import InputItem from "../input_item/input_item";
import InputTodo from "../input_todo/input_todo";

class ToDoList extends Component {
  state = {
    todos: [
      { key: "1", todo: "오늘의 할일1", isChecked: false },
      { key: "2", todo: "오늘의 할일2", isChecked: false },
      { key: "3", todo: "오늘의 할일3", isChecked: false },
    ],
  };

  render() {
    const { todos } = this.state;
    return (
      <section>
        <h1>
          Hello, <span>{this.props.name}</span>!
        </h1>
        <InputTodo />
        <div className="list">
          <ul>
            {todos.map((item) => (
              <InputItem key={item.key} todos={item} popItem={this.popItem} />
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default ToDoList;
