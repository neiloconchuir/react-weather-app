import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function WeatherForecastDay(props) {
  function temperature() {
      let temp = Math.round(props.data.main.temp);
      return `${temp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecastDay">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={42} />
      <div className="WeatherForecastTemperatures">
        <span className="WeatherForecastTemperatureMax">
          {temperature()}
        </span>
      </div>
    </div>
  );
}