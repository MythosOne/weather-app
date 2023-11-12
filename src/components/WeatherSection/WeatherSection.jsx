import React from 'react';
import {
  Container,
  MyLocation,
  City,
  Temperature,
  Description,
  Location,
} from './WeatherSection.styled';

function WeatherSection({ weather }) {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MyLocation>My Location</MyLocation>
        <City>{weather.name}</City>
        <Temperature>{Math.trunc(weather.main.temp)}°</Temperature>
        <Description>{weather.weather[0].description}</Description>
        <Location>
          H:{Math.trunc(weather.coord.lat)} L:{Math.trunc(weather.coord.lon)}
        </Location>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      ></div>
    </Container>
  );
}

export default WeatherSection;
