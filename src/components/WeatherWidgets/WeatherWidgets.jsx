import React from 'react';
import {
  Container,
  HourlyForecast,
  BlockHeader,
  // BlockHourlyWater,
  WeeklyForecast,
  BlockWeeklyWater,
  PrecipitationMap,
  Sunrise,
  Wind,
  Visibility,
  Humidity,
  Precipitation,
  Pressure,
} from './WeatherWidgets.styled';

// import { WiSunrise, WiSunset } from 'react-icons/wi';
import {
  WindImg,
  SunriseImg,
  SunsetImg,
  HumidityImg,
  PressureImg,
  PrecipitationImg,
  VisibilityImg,
} from 'icons/IconComponent';

import { HourlyForecastList } from './ForecastList/HourlyForecastList/HourlyForecastList';
import { WeeklyForecastList } from './ForecastList/WeeklyForecastList/WeeklyForecastList';

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
      <HourlyForecast>
        <BlockHeader>Hourly forecast for 24 hours</BlockHeader>
        <HourlyForecastList forecast={forecast} />
      </HourlyForecast>
      <WeeklyForecast>
        <BlockHeader>5-DAY forecast</BlockHeader>
        <WeeklyForecastList forecast={forecast}/>
      </WeeklyForecast>
      <PrecipitationMap>
        <BlockHeader>Precipitation Map</BlockHeader>
      </PrecipitationMap>
      <Sunrise>
        <BlockHeader>Sunrise</BlockHeader>
        {/* <WiSunrise style={{ width: '24px', height: '24px' }} /> */}
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
        <BlockHeader>Wind</BlockHeader>
        <WindImg />
        {weather.wind.speed} m/s
      </Wind>
      <Visibility>
        <BlockHeader>Visibility</BlockHeader>
        <VisibilityImg />
        {weather.visibility / 1000} km
      </Visibility>
      <Humidity>
        <BlockHeader>Humdity</BlockHeader>
        <HumidityImg />
        {weather.main.humidity}%
      </Humidity>
      <Precipitation>
        <BlockHeader>Precipitation</BlockHeader>
        <PrecipitationImg />
      </Precipitation>
      <Pressure>
        <BlockHeader>Pressure</BlockHeader>
        <PressureImg />
        {weather.main.pressure} hPa
      </Pressure>
    </Container>
  );
};
