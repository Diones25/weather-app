import React, { useState } from "react";
import './WeatherApp.css';

import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';

const WeatherApp = () => {

  let api_key = "591f6d1f15e83bfb97adc9925b47a7f1";

  const [ wicon, setWicon ] = useState(cloud_icon);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if(element[0].value ==="") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}&units=metric`;

    let response = await fetch(url);
    let data = await response.json();
    
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temp = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    let weather_image = document.getElementById("weather-image")

    humidity[0].innerHTML = data.main.humidity+" %";
    wind[0].innerHTML = Math.floor(data.wind.speed)+" km/h";
    temp[0].innerHTML = Math.floor(data.main.temp)+"°c";
    location[0].innerHTML = data.name;

    if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(clear_icon);
      weather_image.src = clear_icon;
    }
    else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
      setWicon(clear_icon);
      weather_image.src = clear_icon;
    }
    else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
      setWicon(drizzle_icon);
      weather_image.src = drizzle_icon;
    }
    else if(data.weather[0].icon==="04d" || data.weather[0].icon ==="04n") {
      setWicon(drizzle_icon);
      weather_image.src = drizzle_icon;
    }
    else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
      setWicon(rain_icon);
      weather_image.src = rain_icon;
    }
    else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
      setWicon(rain_icon);
      weather_image.src = rain_icon;
    }
    else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
      setWicon(snow_icon);
      weather_image.src = snow_icon;
    }
    else {
      setWicon(clear_icon);
      weather_image.src = clear_icon;
    }
   
  }

  return (
    <>
      <div className="container">
        <div className="top-bar">
          <input type="text" className="cityInput" placeholder="Pesquisar" />
          <div className="search-icon" onClick={() => {search()}}>
            <img src={search_icon} alt="" />
          </div>
        </div>

        <div className="weather-image">
          <img src={cloud_icon} id="weather-image" alt="" />
        </div>
        <div className="weather-temp">--</div>
        <div className="weather-location">--</div>
        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} className="icon" alt="" />
            <div className="data">
              <div className="humidity-percent">--</div>
              <div className="text">Humidade</div>
            </div>
          </div>

          <div className="element">
            <img src={wind_icon} className="icon" alt="" />
            <div className="data">
              <div className="wind-rate">--</div>
              <div className="text">Velocidade do vento</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeatherApp;