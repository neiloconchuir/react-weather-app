import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import Footer from "./Footer";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div>
          <div className="row">
            <div className="col-6">
              <h1>{weatherData.city}</h1>
              <ul>
                <li className="text-capitalize">
                  <FormattedDate date={weatherData.date} />{weatherData.description}
                </li>
                <li>
                  Humidity: <span className="highlight">{weatherData.humidity}%</span>, Wind:{" "}
                  <span className="highlight">{weatherData.wind}km/h</span>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <div className="temperature-container d-flex justify-content-end">
                <div>
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                  />
                  <span className="temperature">{weatherData.temperature}</span>
                  <span className="units">°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    const apiKey = "6ad6478bca96e80d85e0658e8313cfc0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
