import React from 'react';

const Weather = props => {
  const { city, temperature, weather } = props.weather;
  return (
    <div>
      <h2>{city}</h2>
      <p>{temperature}</p>
      <p>{weather}</p>
    </div>
  );
};

export default Weather;
