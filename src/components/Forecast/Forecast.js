import React from "react";
import "./Forecast.css";

const Forecast = (props) => {
  return (
    <>   
      <div className="weatherDetails">
        <div className="leftSection">
          <div>
            <i className={`wi ${props.weatherIcon} display-1`} />
            {props.temp_celsius ? (
            <h5>{props.temp_celsius}&deg; C</h5>
            ) : null}
            <p className="noBorderMargin"> {props.description.charAt(0).toUpperCase() +
              props.description.slice(1)}</p>
          </div>          
        </div>

        <div className="rightSection">
          {props.cityname ? (
            <p>Location: <span>{props.cityname}</span></p>
            ) : null}
          <p style={{'display':'none'}}>Height From Sea Level: <span>3000ft.</span></p>
          {props.windspeed ? (
            <p>Wind Speed: <span>{props.windspeed} km/hr</span></p>
            ) : null}
          <p style={{'display':'none'}}>Rain: <span>3000ft.</span></p>
          
          {props.humid ? (
            <p>Humidity: <span>{props.humid}</span></p>
            ) : null}
          {props.feelLIke ? (
            <p className="noBorderMargin">Feel like: <span>{props.feelLIke}&deg; C</span></p>
            ) : null}
          
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

    </>
  );
};

export default Forecast;
