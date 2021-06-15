import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
// import WeatherFetch from "./service/weather-fetch";
// const weather = new WeatherFetch("b64e98039f142949909b14901bc0d20d");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
