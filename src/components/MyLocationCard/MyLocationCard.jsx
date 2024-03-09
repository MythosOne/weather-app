import React from 'react';
import {
  Container,
  Block,
  BlockItem,
  City,
  Description,
  Temperature,
  MyLocation,
  Location,
} from './MyLocationCard.styled';

function MyLocationCard({ weather }) {
  return (
    <Container onClick={() => console.log('myLocationWeatherId:' + weather.id)}>
      <Block>
        <BlockItem>
          <MyLocation>My Location</MyLocation>
          <City>{weather.name}</City>
        </BlockItem>
        <Temperature>{Math.trunc(weather.main.temp)}°</Temperature>
      </Block>
      <Block>
        <Description>{weather.weather[0].description}</Description>
        <Location>
          H:{Math.trunc(weather.coord.lat)} L:{Math.trunc(weather.coord.lon)}
        </Location>
      </Block>
    </Container>
  );
}

export default MyLocationCard;
