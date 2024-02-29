import React from 'react';
import {
  Container,
  City,
  Time,
  Description,
  Temperature,
  Location,
} from './WeatherCard.styled';

function WeatherCard({ weatherCity }) {
  // console.log(weatherCity);
  // console.log((new Date(weatherCity.dt * 1000)).getTimezoneOffset() / 60)
  // Неправильно показывает время, исправить.
 const UTCTime = () => {
  let time = new Date(weatherCity.dt*1000);
  return `${time.getUTCHours()}:${time.getUTCMinutes()}`;
 };

  return (
    <Container
      onClick={() =>
        console.log(
          `myWeatherCityCard Name: ${weatherCity.name} lat: ${weatherCity.coord.lat} lon ${weatherCity.coord.lon}`
        )
      }
    >
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
          <City>{weatherCity.name}</City>
          <Time>
            {/* {(new Date(weatherCity.dt * 1000)).toUTCString()} */}
            {UTCTime()}
          </Time>
        </div>
        <Temperature>{Math.trunc(weatherCity.main.temp)}°</Temperature>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Description>{weatherCity.weather[0].description}</Description>
        <Location>
          H:{Math.trunc(weatherCity.coord.lat)} L:
          {Math.trunc(weatherCity.coord.lon)}
        </Location>
      </div>
    </Container>
  );
}

export default WeatherCard;
