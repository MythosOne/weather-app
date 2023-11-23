import React from 'react';
import {
  Container,
  City,
  Description,
  Temperature,
  Location,
} from './WeatherCard.styled';

function WeatherCard({ weatherCity }) {
  // console.log(weatherCity);
  return (
    <Container onClick={() => console.log(`myWeatherCityCard Name: ${weatherCity.name} lat: ${weatherCity.coord.lat} lon ${weatherCity.coord.lon}`)}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'stretch',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Location>{weatherCity.name}</Location>
          <City>{weatherCity.name}</City>
        </div>
        <Temperature>{Math.trunc(weatherCity.main.temp)}°</Temperature>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Description>{weatherCity.weather[0].description}</Description>
        <Location>
          H:{Math.trunc(weatherCity.coord.lat)} L:
          {Math.trunc(weatherCity.coord.lon)}
        </Location>
      </div>
    </Container>
  );
}

export default WeatherCard;
