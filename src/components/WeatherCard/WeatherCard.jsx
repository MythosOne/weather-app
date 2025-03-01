import React, { useEffect, useState } from 'react';

import { Clock } from 'components/Clock/Clock';

import {
  Container,
  Block,
  BlockItem,
  BlockWeather,
  City,
  WeatherIcon,
  Description,
  Temperature,
  Location,
  CloseBtn,
} from './WeatherCard.styled';

import { CloseCardImg } from 'icons/IconComponent';

function WeatherCard({ weatherCity, onCloseBtn, onDeleteCard }) {
  const [showComponent, setShowComponent] = useState(false);

  const iconUrl = `https://openweathermap.org/img/wn/${weatherCity.weather[0].icon}@2x.png`;

  useEffect(() => {
    setShowComponent(!showComponent);
  }, []);

  return (
    <Container className={showComponent ? 'active' : 'exit-active'}>
      <Block>
        <BlockItem>
          <City>{weatherCity.name}</City>
          <Clock
            timeZoneOffset={weatherCity.timezone}
            clockWeatherCard={true}
          />
        </BlockItem>
        <Temperature>{Math.trunc(weatherCity.main.temp)}°</Temperature>
      </Block>
      <Block>
        <BlockWeather>
          <WeatherIcon
            src={iconUrl}
            width="32"
            height="32"
            alt="weather-icon"
          />
          <Description>{weatherCity.weather[0].description}</Description>
        </BlockWeather>
        <Location>
          H:{Math.trunc(weatherCity.coord.lat)}° L:
          {Math.trunc(weatherCity.coord.lon)}°
        </Location>
      </Block>
      {onCloseBtn && (
        <CloseBtn
          type="button"
          aria-label="close"
          title="Close"
          onClick={() => {
            onDeleteCard(weatherCity.id);
          }}
          className={onCloseBtn ? 'active' : ''}
        >
          <CloseCardImg />
        </CloseBtn>
      )}
    </Container>
  );
}

export default WeatherCard;
