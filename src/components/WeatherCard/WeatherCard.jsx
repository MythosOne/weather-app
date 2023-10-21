import React from 'react';
import { Container, City, Time, Temperature, Location } from './WeatherCard.styled';

function WeatherCard({ city }) {

  return (
      <Container>
        <City>{city.city}</City>
        <Temperature>21</Temperature>
        <Time>15:45</Time>
        <Location>H:15 L:7</Location>
      </Container>
  );
}

export default WeatherCard;
