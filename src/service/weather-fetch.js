class WeatherFetch {
  constructor(key) {
    this.key = key;
  }

  getWeather = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.key}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const name = data.name;
        const weather = data.weather[0].main;

        return [name, weather];
      });
  };
}

export default WeatherFetch;
