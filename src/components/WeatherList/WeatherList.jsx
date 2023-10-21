import React from 'react';
import { Container } from './Weather.styled';
import WeatherCard from '../WeatherCard/WeatherCard';

export const WeatherList = ({ cards }) => {
  return (
    <Container>
      {cards.map(card => (
        <li key={card.id}>
          <WeatherCard weathercard={card} />
        </li>
      ))}
    </Container>
  );
};
