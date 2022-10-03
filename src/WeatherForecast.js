import React, { useState } from 'react';
import './WeatherForecast.css';
import axios from 'axios';
import WeatherForecastDay from './WeatherForecastDay';

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
      setForecast(response.data);
      setLoaded(true);

  }

  if (loaded) {
    
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast} />
          </div>
        </div>
      </div>
    );

  } else {

    let apiKey = "6ad6478bca96e80d85e0658e8313cfc0";
    let city = props.city;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}