import React from "react";

const Form = (props) => {
  return (
    <div className="forcastInnerSection">
        <h2> Find Current Weather </h2>
        <form onSubmit={props.loadweather}>
        <div>{props.error ? error() : ""}</div>
        <input name="city" type="text" className="inputControl" placeholder="City"/>
        <input name="country" type="text" className="inputControl" placeholder="Country"/>
        <button className="searchBtn"> Search </button>
    </form>
    </div>    
  );
};

const error = (props) => {
  return (
    alert('Please Enter City and Country...!')
  );
};

export default Form;