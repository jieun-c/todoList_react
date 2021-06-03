import React, { Component } from "react";
import styles from "./app.module.css";
import Clock from "./clock/clock";
import ToDoList from "./todolist/todolist";
import InputName from "./input_name/input_name";

class App extends Component {
  state = {
    currentUser: localStorage.getItem("currentUser"),
  };

  pushName = (name) => {
    localStorage.setItem("currentUser", name);
    this.setState({ currentUser: name });
  };

  render() {
    const { currentUser } = this.state;
    return (
      <div className={styles.container}>
        <Clock />
        {currentUser ? (
          <ToDoList name={currentUser} />
        ) : (
          <InputName pushName={this.pushName} />
        )}
      </div>
    );
  }
}

export default App;
