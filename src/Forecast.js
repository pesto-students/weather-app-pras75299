import React, { useState } from "react";
import "./Forecast.css";

const Forecast = () => {
  return (
    <div className="weatherForcastSection">
      <div className="forcastInnerSection">
        <h2> Find Current Weather </h2> 
        <input type="text" className="inputControl" placeholder="Search"/>
        <button className="searchBtn"> Search </button>
      </div>

      <div className="weatherDetails">
        <p>Height From Sea Level: <span>3000ft.</span></p>
        <p>Wind Speed: <span>3000ft.</span></p>
        <p>Rain: <span>3000ft.</span></p>
        <p>Humidity: <span>3000ft.</span></p>
        <p>Temperature: <span>3000ft.</span></p>
      </div>

      <div className="monthForCast">
        <div className="singleDaydata"></div>
        <div className="singleDaydata"></div>
        <div className="singleDaydata"></div>
        <div className="singleDaydata"></div>
        <div className="singleDaydata"></div>
        <div className="singleDaydata"></div>
        <div className="singleDaydata"></div>
        <div className="singleDaydata"></div>
        <div className="singleDaydata"></div>
        <div className="singleDaydata"></div>
      </div>

    </div>
  );
};

export default Forecast;
