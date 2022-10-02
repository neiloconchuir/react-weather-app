import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Footer from "./Footer";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
    setReady(true);
  }

  if (ready) {
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
              <h1>New York</h1>
              <ul>
                <li className="text-capitalize">
                  Wednesday 7:00, Mostly cloudy
                </li>
                <li>
                  Humidity: <span className="highlight">72%</span>, Wind:{" "}
                  <span className="highlight">13km/h</span>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <div className="temperature-container d-flex justify-content-end">
                <div>
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="Mostly cloudy"
                  />
                  <span className="temperature">{temperature}</span>
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
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
