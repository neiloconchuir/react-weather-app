import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function WeatherForecastDay(props) {
  function temperature() {
      let temp = Math.round(props.data.list[7].main.temp);
      return `${temp}°`;
  }

  function day() {
    let date = new Date(props.data.list[7].dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecastDay">{day()}</div>
      <WeatherIcon code={props.data.list[7].weather[0].icon} size={42} />
      <div className="WeatherForecastTemperatures">
        <span className="WeatherForecastTemperatureMax">
          {temperature()}
        </span>
      </div>
    </div>
  );
}