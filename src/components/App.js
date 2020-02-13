import React, { useState } from 'react';
import Form from './Form';
import Weather from './Weather';
import './App.scss';

const APIKEY = '65d27e0ed32f75abb34d2da3a85e1959';

const App = props => {
  const [weather, getWeather] = useState([]);

  async function getData(e) {
    e.preventDefault();
    const city = e.target.city.value;
    const country = e.target.country.value;
    const apiData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKEY}`
    )
      .then(res => res.json())
      .then(res => res);
    getWeather({
      data: apiData,
      city: apiData.name,
      weather: apiData.weather[0].description,
      temperature: apiData.main.temp
    });
  }

  return (
    <div className="app">
      <h1>What's the weather?</h1>
      <Form submit={getData} />
      <Weather weather={weather} />
    </div>
  );
};

export default App;
