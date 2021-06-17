import React, { PureComponent } from "react";

class Weather extends PureComponent {
  key = "b64e98039f142949909b14901bc0d20d";
  state = {
    city: null,
    weather: null,
  };

  getWeather = (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.key}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const city = data.name;
        const weather = data.weather[0].main;

        this.setState({ city, weather });
      });
  };

  onGeoOk = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    this.getWeather(lat, lon);
  };

  onGeoError = () => {
    alert("Can't find you. No weather for you.");
  };

  askGEO = () => {
    navigator.geolocation.getCurrentPosition(this.onGeoOk, this.onGeoError);
  };

  // 지역과 날씨를 props로 받아옴
  render() {
    const { city, weather } = this.state;
    this.askGEO();
    return (
      <span className="weather">
        {city ? `${city} @ ${weather}` : `위치 권한을 허용해주세요!`}
      </span>
    );
  }
}

export default Weather;
