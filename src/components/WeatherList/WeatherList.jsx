import React from 'react';
import { Container } from './Weather.styled';
import WeatherCard from '../WeatherCard/WeatherCard';

export const WeatherList = ({ cities, onSelectWeatherCity }) => {

  return (
    <Container>
      {cities.map(city => (
        <li key={city.id} onClick={()=> onSelectWeatherCity(city.id)}>
          <WeatherCard weatherCity={city} />
        </li>
      ))}
    </Container>
  );
};
