import React, { useState } from 'react';
import {
  Container,
  Block,
  BlockItem,
  City,
  Time,
  Description,
  Temperature,
  Location,
  CloseBtn,
} from './WeatherCard.styled';

import { CloseCardImg } from 'icons/IconComponent';

function WeatherCard({ weatherCity, onCloseBtn, onDeleteCard }) {
  // const [onCloseBtn, setOnCloseBtn] = useState(false);
  // console.log("onCloseBtn:", onCloseBtn)
  // console.log(weatherCity);
  // console.log((new Date(weatherCity.dt * 1000)).getTimezoneOffset() / 60)
  // Неправильно показывает время, исправить.
  const UTCTime = () => {
    let time = new Date(weatherCity.dt * 1000);
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Container
    // onClick={() =>
    //   console.log(
    //     `myWeatherCityCard Name: ${weatherCity.name} lat: ${weatherCity.coord.lat} lon ${weatherCity.coord.lon}`
    //   )
    // }
    >
      <Block>
        <BlockItem>
          <City>{weatherCity.name}</City>
          <Time>
            {/* {(new Date(weatherCity.dt * 1000)).toUTCString()} */}
            {UTCTime()}
          </Time>
        </BlockItem>
        <Temperature>{Math.trunc(weatherCity.main.temp)}°</Temperature>
      </Block>
      <Block>
        <Description>{weatherCity.weather[0].description}</Description>
        <Location>
          H:{Math.trunc(weatherCity.coord.lat)} L:
          {Math.trunc(weatherCity.coord.lon)}
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
        >
          <CloseCardImg />
        </CloseBtn>
      )}
    </Container>
  );
}

export default WeatherCard;
