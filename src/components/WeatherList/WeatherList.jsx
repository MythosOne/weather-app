import React from 'react';
import { Container } from './Weather.styled';
import WeatherCard from '../WeatherCard/WeatherCard';

export const WeatherList = ({ cities, weatherCity }) => {

  return (
    <Container>
      {cities.map(card => (
        <li key={card.id}>
          <WeatherCard weatherCity={weatherCity} />
        </li>
      ))}
    </Container>
  );
};
