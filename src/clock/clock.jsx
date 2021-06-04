import React, { Component } from "react";
import styles from "./clock.module.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date } = this.state;
    return (
      <div className={styles.clock}>
        <div className={styles.time}>
          {`${String(date.getHours()).padStart(2, "0")} : 
            ${String(date.getMinutes()).padStart(2, "0")}`}
        </div>
        <div className={styles.days}>
          {`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
            2,
            "0"
          )}-${String(date.getDate()).padStart(2, "0")}`}
        </div>
      </div>
    );
  }
}

export default Clock;
