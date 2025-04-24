import React, { useContext } from 'react';
import {
  Container,
  Block,
  BlockItem,
  BlockWeather,
  WeatherIcon,
  City,
  Description,
  Temperature,
  MyLocation,
  Location,
} from './MyLocationCard.styled';
import { HomePageContext } from 'pages/Homepage';

function MyLocationCard({ weather }) {
  const { setWeatherSection, setCurrentWeatherCityId } =
    useContext(HomePageContext);

  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <Container
      onClick={() => {
        setWeatherSection({});
        setCurrentWeatherCityId(0);
      }}
    >
      <ul>
        <Block>
          <BlockItem>
            <MyLocation>My Location</MyLocation>
            <City>{weather.name ? weather.name : 'unknown location'}</City>
          </BlockItem>
          <Temperature>{Math.trunc(weather.main.temp)}°</Temperature>
        </Block>
        <Block>
          <BlockWeather>
            <WeatherIcon src={iconUrl} width="32" alt="weather-icon" />
            <Description>{weather.weather[0].description}</Description>
          </BlockWeather>
          <Location>
            H:{Math.trunc(weather.coord.lat)}° L:{Math.trunc(weather.coord.lon)}
            °
          </Location>
        </Block>
      </ul>
    </Container>
  );
}

export default MyLocationCard;
