import React, { useState } from "react";
import "./Forecast.css"
const API_KEY = "e1e3aeef1a428610073ff9107da4bbf5"
const API_URL = `https://pro.openweathermap.org/data/2.5/forecast/climate?q={London},{GB}&appid=${API_KEY}`

const Forecast = () => {
  let [responseObj, setResponseObj] = useState({});

  function getForecast() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((response) => {
          console.log(response)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="weatherForcastSection">
      <h2> Find Current Weather </h2> 
      <input type="text" className="inputControl" placeholder="Search"/>
      <div> {JSON.stringify(responseObj)} </div>
      <button className="searchBtn" onClick={getForecast}> Search </button>
    </div>
  );
};

export default Forecast;
