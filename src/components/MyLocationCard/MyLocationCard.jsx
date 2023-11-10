import React from 'react';
import {
  Container,
  City,
  Description,
  Temperature,
  MyLocation,
  Location,
} from './MyLocationCard.styled';

function MyLocationCard({ weather }) {
  return (
    <Container onClick={() => console.log('myLocationCard')}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'stretch',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <MyLocation>My Location</MyLocation>
          <City>{weather.name}</City>
        </div>
        <Temperature>{Math.trunc(weather.main.temp)}°</Temperature>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Description>{weather.weather[0].description}</Description>
        <Location>
          H:{Math.trunc(weather.coord.lat)} L:{Math.trunc(weather.coord.lon)}
        </Location>
      </div>
    </Container>
  );
}

export default MyLocationCard;
