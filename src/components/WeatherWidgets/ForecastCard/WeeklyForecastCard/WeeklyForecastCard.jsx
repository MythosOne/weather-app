import React from 'react';

import {
  Container,
  Block,
  ItemWeekDay,
  ItemWeatherImg,
  ImgDate,
  BlockTemp,
  MaxTemp,
  MinTemp,
  Text,
} from './WeeklyForecastCard.styled';

export const WeeklyForecastCard = ({ weatherDay }) => {
  // console.log('weatherDay:', weatherDay);

  const tempMin = weatherDay.reduce(
    (minTemp, element) =>
      minTemp < element.main.temp_min ? minTemp : element.main.temp_min,
    weatherDay[0]
  );

  // const tempMin = sumTempMin / weatherDay.length;
  // console.log('tempMin: ', tempMin);

  const tempMax = weatherDay.reduce(
    (maxTemp, element) =>
      maxTemp > element.main.temp_max ? maxTemp : element.main.temp_max,
    weatherDay[0]
  );
  // const tempMax = sumTempMax / weatherDay.length;
  // console.log('tempMax: ', tempMax);

  return (
    <Container>
      <Block>
        <ItemWeekDay>
          {new Date(weatherDay[0].dt * 1000).toLocaleDateString('en-US', {
            weekday: 'short',
          })}
          {/* {new Date(element.dt * 1000).getUTCDay()} */}
        </ItemWeekDay>
        <ItemWeatherImg>
          <ImgDate
            src={`http://openweathermap.org/img/w/${weatherDay[0].weather[0].icon}.png`}
            width="42"
            alt="Weather icon"
          />
        </ItemWeatherImg>
        <BlockTemp>
          <MaxTemp>
            <Text>Max:</Text>{Math.round(tempMax)}°
          </MaxTemp>
          <MinTemp>
            <Text>Min:</Text>{Math.round(tempMin)}°</MinTemp>
        </BlockTemp>
      </Block>
    </Container>
  );
};
