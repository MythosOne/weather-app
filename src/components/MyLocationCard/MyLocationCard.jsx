import React, {useContext} from 'react';
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
import { HomePageContext } from 'pages/Homepage';

function MyLocationCard({ weather}) {

  const { setWeatherSection} = useContext(HomePageContext);

  return (
    <Container
      onClick={() =>
        setWeatherSection({})
      }
    >
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
