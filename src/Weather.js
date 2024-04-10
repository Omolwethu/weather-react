import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [inputed, setInputed] = useState(false);
  let [weather, setWeather] = useState(null);

  function showTemperature(response) {
    setInputed(true);
    console.log(response.data);
    setWeather({
      temperature: response.data.main.temp,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "6f578b96aa9505bcce148ac22cb85794";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter a city" onChange={changeCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (inputed) {
    return (
      <div>
        {form}
        <ul>
          <li> temperature: {Math.round(weather.temperature)} °C</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
          <li> Description: {weather.description}</li>
          <li> Humidity: {weather.humidity} %</li>
          <li> Wind: {weather.wind} km/h</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
