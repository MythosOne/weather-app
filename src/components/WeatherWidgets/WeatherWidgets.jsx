import React from 'react';
import {
  Container,
  HourlyForecast,
  WeeklyForecast,
  PrecipitationMap,
  Sunrise,
  Wind,
  Visibility,
  Humidity,
  Precipitation,
  Pressure,
} from './WeatherWidgets.styled';

import { WiSunrise, WiSunset } from 'react-icons/wi';
import {
  WindImg,
  SunriseImg,
  SunsetImg,
  HumidityImg,
  PressureImg,
  PrecipitationImg,
  VisibilityImg,
} from 'icons/IconComponent';

export const WeatherWidgets = ({ weather, forecast }) => {

  const UTCTime = unixTime => {
    let time = new Date(unixTime * 1000);
    return `${time.getUTCHours().toString().padStart(2, '0')}:${time
      .getUTCMinutes()
      .toString()
      .padStart(2, '0')}`;
  };
  // console.log('weather:', weather);
  // console.log('forecast:', forecast);
  return (
    <Container>
      <HourlyForecast>Hourly forecast ({forecast.city.name})</HourlyForecast>
      <WeeklyForecast>Weekly forecast ({forecast.city.name})</WeeklyForecast>
      <PrecipitationMap>
        Precipitation Map ({forecast.city.name})
      </PrecipitationMap>
      <Sunrise>
        {/* <WiSunrise style={{ width: '24px', height: '24px' }} /> */}
        Sunrise
        <SunriseImg />
        {UTCTime(weather.sys.sunrise)}
        {/* {new Date(weather.sys.sunrise * 1000).toUTCString()} */}
        {/* <WiSunset style={{ width: '24px', height: '24px' }} /> */}
        <br />
        Sunset
        <SunsetImg />
        {UTCTime(weather.sys.sunset)}
        {/* Sunset {new Date(weather.sys.sunset * 1000).toUTCString()} */}
      </Sunrise>
      <Wind>
        Wind
        <WindImg />
        {weather.wind.speed} m/s
      </Wind>
      <Visibility>
        Visibility
        <VisibilityImg />
        {weather.visibility / 1000} km
      </Visibility>
      <Humidity>
        Humdity
        <HumidityImg />
        {weather.main.humidity}%
      </Humidity>
      <Precipitation>
        Precipitation
        <PrecipitationImg />
      </Precipitation>
      <Pressure>
        Pressure
        <PressureImg />
        {weather.main.pressure} hPa
      </Pressure>
    </Container>
  );
};
