import React, { useState } from "react";
import Form from "./Form";
import Weather from "./Weather";

const APIKEY = "65d27e0ed32f75abb34d2da3a85e1959";

const App = props => {
  const [weather, getWeather] = useState({});

  async function getData(e) {
    e.preventDefault();
    console.log(e);
    const city = "";
    const country = "";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${APIKEY}`
    )
      .then(res => res.json())
      .then(res => console.log(res));
  }

  return (
    <div>
      <h1>Howdy</h1>
      <Form submit={getData} />
    </div>
  );
};

export default App;
