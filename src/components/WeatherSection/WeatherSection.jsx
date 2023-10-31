import React from 'react';
import { Container, City, Temperature } from './WeatherSection.styled';

function WeatherSection() {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'stretch',
        }}
      >
        <City>My Location</City>
        <Temperature>23</Temperature>
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
