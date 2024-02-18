import React from 'react';
import  LocationWeather  from '../LocationWeather/LocationWeather';
import { WeatherWidgets } from '../WeatherWidgets/WeatherWidgets';
import { Section } from './WeatherSection.styled';

export const WeatherSection = ({ weather, forecast }) => {
  return (
    <Section>
      <LocationWeather weather={weather} />
      <WeatherWidgets weather={weather} forecast={forecast} />
    </Section>
  );
};
