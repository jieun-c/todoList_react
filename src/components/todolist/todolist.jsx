import React, { Component } from "react";
import ToDoItem from "../todoitem/todoitem";
import InputToDo from "../input_todo/input_todo";

class ToDoList extends Component {
  // localStorage 에 저장할땐 String 으로 저장할것! (stringify)
  // 물론 가져올때는 다시 객체로 변환해야한다! (parse)
  state = {
    toDos: JSON.parse(localStorage.getItem("toDos")),
  };

  pushToDo = (toDo) => {
    // 받아온 객체
    const data = { key: Date.now(), toDo, isChecked: false };
    // null 이 아닌가? data만 삽입 : state todos와 data 삽입
    const toDos = this.state.toDos ? [...this.state.toDos, data] : [data];

    localStorage.setItem("toDos", JSON.stringify(toDos));
    // 저장
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
              toDos.map((item) => (
                <ToDoItem
                  key={item.key}
                  toDo={item}
                  popToDo={this.handleReset}
                />
              ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default ToDoList;
