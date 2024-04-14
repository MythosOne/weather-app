import React from 'react';

import {
  Container,
  Block,
  BlockItem,
  ImgDate,
  BlockTemp,
  MaxTemp,
  MinTemp,
} from './WeeklyForecastCard.styled';

export const WeeklyForecastCard = ({ element }) => {
  return (
    <Container>
      <Block>
        <BlockItem>
          {new Date(element.dt * 1000).toLocaleDateString('en-US', {
            weekday: 'short',
          })}
          {/* {new Date(element.dt * 1000).getUTCDay()} */}
        </BlockItem>
        <BlockItem>
          <ImgDate
            src={`http://openweathermap.org/img/w/${element.weather[0].icon}.png`}
            width="42"
            alt="Weather icon"
          />
        </BlockItem>
        <BlockTemp>
          <MaxTemp>"Max:" {Math.round(element.main.temp)}°</MaxTemp>
          <MinTemp>"Min:" {Math.round(element.main.temp)}°</MinTemp>
        </BlockTemp>
      </Block>
    </Container>
  );
};
