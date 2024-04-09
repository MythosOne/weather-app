import React from 'react';
import { Container, Block, BlockItem, ImgDate } from './HourlyForecastCard.styled';

export const HourlyForecastCard = ({ element }) => {
  return (
    <Container>
      <Block>
        <BlockItem>
          {new Date(element.dt * 1000).toLocaleTimeString([], {
            hour: '2-digit',
            // minute: '2-digit',
          })}
        </BlockItem>
        <BlockItem>
          <ImgDate
            src={`http://openweathermap.org/img/w/${element.weather[0].icon}.png`}
            width="30"
            alt="Weather icon"
          />
        </BlockItem>
        <BlockItem>{Math.round(element.main.temp)}°</BlockItem>
      </Block>
    </Container>
  );
};
