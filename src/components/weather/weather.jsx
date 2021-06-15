import React, { Component } from "react";

class Weather extends Component {
  onGeoOk = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // weather-fetch 까지 전달
    this.props.pushGEO(lat, lon);
  };

  onGeoError = () => {
    alert("Can't find you. No weather for you.");
  };

  render() {
    navigator.geolocation.getCurrentPosition(this.onGeoOk, this.onGeoError);
    return <span>패치된 온도/위치</span>;
  }
}

export default Weather;
