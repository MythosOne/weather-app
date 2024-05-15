import React, { useContext } from 'react';
import { HomePageContext } from 'pages/Homepage';
import {
  Container,
  MyLocation,
  City,
  Temperature,
  Description,
  Location,
} from './LocationWeather.styled';

function LocationWeather({ weather }) {
  const { locationWeather } = useContext(HomePageContext);

  return (
    <Container id="LocationWeather">
      { weather.id === locationWeather.id ? (
        <>
          <MyLocation>My Location</MyLocation>
          <City>{weather.name}</City>
        </>
      ) : (
        <MyLocation>{weather.name}</MyLocation>
      )}
      <Temperature>{Math.trunc(weather.main.temp)}°</Temperature>
      <Description>{weather.weather[0].description}</Description>
      <Location>
        H:{Math.trunc(weather.coord.lat)} L:{Math.trunc(weather.coord.lon)}
      </Location>
    </Container>
  );
}

export default LocationWeather;
