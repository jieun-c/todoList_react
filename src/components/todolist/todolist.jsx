import React, { Component } from "react";
import ToDoItem from "../todoitem/todoitem";
import InputToDo from "../input_todo/input_todo";

class ToDoList extends Component {
  state = {
    toDos: localStorage.getItem("toDos"),
  };

  pushToDo = (toDo) => {
    // 추가하는 방법으로 변경 필요
    const toDos = [{ key: Date.now(), toDo, isChecked: false }];
    localStorage.setItem("toDos", toDos);
    this.setState({ toDos });
  };

  render() {
    const { toDos } = this.state;
    return (
      <section>
        <h1>
          Hello, <span>{this.props.name}</span>!
        </h1>
        <InputToDo pushToDo={this.pushToDo} />
        <div className="list">
          <ul>
            {toDos &&
              toDos.map((item) => <ToDoItem key={item.key} toDos={item} />)}
          </ul>
        </div>
      </section>
    );
  }
}

export default ToDoList;
