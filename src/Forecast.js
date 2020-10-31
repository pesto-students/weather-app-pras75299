import React, { useState } from 'react';

const Forecast = () => {
   let [responseObj, setResponseObj] = useState({}); 
   function getForecast() {
    fetch("https://community-open-weather-map.p.rapidapi.com/climate/month?q=seattle", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "2e3858cdb0mshf8069e22b020ca0p179dc1jsn973a3298831f"
        }
    })
    .then(response => response.json())
    .then(response => {
        setResponseObj(response)
    })
    .catch(err => {
        console.log(err);
    });
   }

   return (
     <div>
       <h2>Find Current Weather</h2>
       <div>{JSON.stringify(responseObj)}</div>
       <button onClick={getForecast}>Search</button>
     </div>
   );
}

export default Forecast;