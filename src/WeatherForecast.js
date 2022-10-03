import React from 'react';
import WeatherIcon from './WeatherIcon';
import './WeatherForecast.css';
import axios from 'axios';

export default function WeatherForecast(props) {

  function handleResponse(response) {
      console.log(response.data);
  }

  let apiKey = "6ad6478bca96e80d85e0658e8313cfc0";
  let city = props.city;
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Thurs</div>
          <WeatherIcon code="01d" size={42} />
          <div className="WeatherForecastTemperatures">
            <span className="WeatherForecastTemperatureMax">19°</span>
            <span className="WeatherForecastTemperatureMin">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}