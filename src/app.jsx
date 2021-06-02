import React, { Component } from "react";
import styles from "./app.module.css";
import Clock from "./clock/clock";

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Clock />
      </div>
    );
  }
}

export default App;
