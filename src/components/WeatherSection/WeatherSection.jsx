import React from 'react';
import LocationWeather from '../LocationWeather/LocationWeather';
import { WeatherWidgets } from '../WeatherWidgets/WeatherWidgets';
import { Section } from './WeatherSection.styled';

export const WeatherSection = ({ weather, forecast, weatherSection, forecastSection }) => {
  return (
    <Section>
      {Object.keys(weatherSection).length ? <LocationWeather weather={weatherSection}/> : <LocationWeather weather={weather} />}
      {Object.keys(weatherSection).length  ? <WeatherWidgets weather={weatherSection} forecast={forecastSection} /> : <WeatherWidgets weather={weather} forecast={forecast}/>}     
    </Section>
  );
};
