import React, { Component } from "react";
import styles from "./app.module.css";
import Clock from "./components/clock/clock";
import InputUser from "./components/input_user/input_user";
import OutputUser from "./components/output_user/output_user";
import InputToDo from "./components/input_todo/input_todo";
import ToDoList from "./components/todolist/todolist";

class App extends Component {
  // localStorage 에서 가져올때는 다시 객체로 변환해야한다! (parse)
  state = {
    currentUser: localStorage.getItem("currentUser"),
    toDos: JSON.parse(localStorage.getItem("toDos")),
  };

  pushUser = (user) => {
    localStorage.setItem("currentUser", user);
    this.setState({ currentUser: user });
  };

  // localStorage 에 저장할땐 String 으로 저장할것! (stringify)
  saveTodo = (toDos) => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
    this.setState({ toDos });
  };

  pushToDo = (toDo) => {
    // 받아온 객체
    const data = { key: Date.now(), toDo, isChecked: false };
    // null 이 아닌가? data만 삽입 : state todos와 data 삽입
    const toDos = this.state.toDos ? [...this.state.toDos, data] : [data];

    this.saveTodo(toDos);
  };

  popToDo = (toDo) => {
    // 모든 키값 / 눌린 키값 :: 비교
    const toDos = this.state.toDos.filter((item) => item.key !== toDo.key);

    this.saveTodo(toDos);
  };

  resetAll = () => {
    localStorage.clear();
    this.setState({
      currentUser: localStorage.getItem("currentUser"),
      toDos: JSON.parse(localStorage.getItem("toDos")),
    });
  };

  render() {
    const { currentUser } = this.state;

    return (
      <div className={styles.container}>
        <header>
          <Clock display={currentUser ? "hello" : "wyn"} />
        </header>

        {currentUser ? (
          <section className="todoList">
            <OutputUser name={currentUser} />
            <InputToDo pushToDo={this.pushToDo} />
            <ToDoList toDos={this.state.toDos} popToDo={this.popToDo} />
          </section>
        ) : (
          <section className="inputUser">
            <InputUser pushUser={this.pushUser} />
          </section>
        )}

        <footer>
          {currentUser && (
            <button className="resetBtn" onClick={this.resetAll}>
              Reset
            </button>
          )}
          <div>온도 컴포넌트</div>
        </footer>
      </div>
    );
  }
}

export default App;
