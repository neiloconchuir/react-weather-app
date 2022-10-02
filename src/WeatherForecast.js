import React from 'react';
import WeatherIcon from './WeatherIcon';
import './WeatherForecast.css';

export default function WeatherForecast() {
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