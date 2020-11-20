import React from "react";
import "./App.css";
import Forecast from "./components/Forecast/Forecast";
import Form from "./components/Form/Form";
import KEY from "./components/CONSTANT";
import "weather-icons/css/weather-icons.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      windspeed: undefined,
      main: undefined,
      feel: undefined,
      humidity: undefined,
      celsius: undefined,
      description: "",
      error: "",
    };

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog",
    };
  }

  weatherIcons(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }

  convertToCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${KEY}`;
    if (country && city) {
      const apiFn = await fetch(URL);
      const data = await apiFn.json();
      console.log(data);
      if (data.cod !== 404 && country !== undefined) {
        this.setState({
          city: data.name,
          country: data.sys.country,
          windspeed: data.wind.speed,
          main: data.weather[0].main,
          celsius: this.convertToCelsius(data.main.temp),
          feel: this.convertToCelsius(data.main.feels_like),
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: "",
        });

        this.weatherIcons(this.weatherIcon, data.weather[0].id);
      } else {
        this.setState({
          error: data.message,
        });
      }
    } else {
      this.setState({
        error: "Search data is not found",
      });
    }
  };
  render() {
    return (
      <div className="App">
        <header className="header">Weather App</header>

        <main className="weatherForcastSection">
          <Form loadweather={this.getWeather} error={this.state.error} />
          <Forecast
            cityname={this.state.city}
            windspeed={this.state.windspeed}
            weatherIcon={this.state.icon}
            temp_celsius={this.state.celsius}
            feelLIke={this.state.feel}
            humid={this.state.humidity}
            description={this.state.description}
          />
        </main>
      </div>
    );
  }
}

export default App;
