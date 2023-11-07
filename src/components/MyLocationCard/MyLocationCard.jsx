import React from 'react';
import {
  Container,
  City,
  Time,
  Temperature,
  Location,
} from './MyLocationCard.styled';

function MyLocationCard({weather}) {
  console.log(weather);
  return (
    <Container onClick={() => console.log('iCloud')}>
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
      >
        <Time>15:45</Time>
        <Location>H:15 L:7</Location>
      </div>
    </Container>
  );
}  

export default MyLocationCard;