import React from 'react';
import { LocationWeather } from '../LocationWeather/LocationWeather';
import { WeatherWidgets } from '../WeatherWidgets/WeatherWidgets';
import { Container } from './WeatherSection.styled';

export const WeatherSection = ({ weather, forecast }) => {
  return (
    <Container>
      <LocationWeather weather={weather} />
      <WeatherWidgets weather={weather} forecast={forecast} />
    </Container>
  );
};
