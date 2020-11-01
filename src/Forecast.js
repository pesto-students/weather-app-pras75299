import React from "react";
import "./Forecast.css";

const Forecast = (props) => {
  return (
    <div className="weatherForcastSection">      

      <div className="weatherDetails">
        <div className="leftSection">
          <div>
            <i className={`wi ${props.weatherIcon} display-1`} />
            {props.temp_celsius ? (
            <h5>{props.temp_celsius}&deg; C</h5>
            ) : null}
            <p> {props.description.charAt(0).toUpperCase() +
              props.description.slice(1)}</p>
          </div>          
        </div>

        <div className="rightSection">
          <p>{props.cityname}</p>
          <p>Height From Sea Level: <span>3000ft.</span></p>
          <p>Wind Speed: <span>{props.windspeed}</span></p>
          <p>Rain: <span>3000ft.</span></p>
          <p>Humidity: {props.humid ? (
            <span>{props.humid}</span>
            ) : null}</p>
          <p>Feel like: {props.feelLIke ? (
            <span>{props.feelLIke}&deg; C</span>
            ) : null}</p>
        </div>

      </div>

      <div className="monthForCast" style={{'display': 'none'}}>
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
