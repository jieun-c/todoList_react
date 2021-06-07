import React, { Component } from "react";
import styles from "./app.module.css";
import Clock from "./components/clock/clock";
import ToDoList from "./components/todolist/todolist";
import InputUser from "./components/input_user/input_user";

class App extends Component {
  state = {
    currentUser: localStorage.getItem("currentUser"),
  };

  pushUser = (user) => {
    localStorage.setItem("currentUser", user);
    this.setState({ currentUser: user });
  };

  render() {
    const { currentUser } = this.state;
    return (
      <div className={styles.container}>
        <Clock />
        {currentUser ? (
          <ToDoList name={currentUser} />
        ) : (
          <InputUser pushUser={this.pushUser} />
        )}
      </div>
    );
  }
}

export default App;
