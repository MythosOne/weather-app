import React from 'react';
import {
  Container,
  Block,
  HourlyForecast,
  BlockHeader,
  // BlockHourlyWater,
  WeeklyForecast,
  // BlockWeeklyWater,
  PrecipitationMap,
  BlockMap,
  Sunrise,
  BlockSunrise,
  PictureSunrise,
  TextSunrise,
  // BlockText,
  BlockSunset,
  TextSunset,
  Time,
  PictureSunset,
  Wind,
  Visibility,
  Humidity,
  Precipitation,
  Pressure,
  Text,
} from './WeatherWidgets.styled';

// import { WiSunrise, WiSunset } from 'react-icons/wi';
import {
  WindImg,
  SunriseImg,
  SunsetImg,
  HumidityImg,
  AverageTempImg,
  PressureImg,
  // PrecipitationImg,
  VisibilityImg,
} from 'icons/IconComponent';

import { HourlyForecastList } from './ForecastList/HourlyForecastList/HourlyForecastList';
import { WeeklyForecastList } from './ForecastList/WeeklyForecastList/WeeklyForecastList';
import { WeatherMap } from './WeatherMap/WeatherMap';
import { AverageTemp } from './AverageTemp/AverageTemp';

export const WeatherWidgets = ({ weather, forecast }) => {
  const UTCTime = unixTime => {
    let time = new Date((unixTime + weather.timezone) * 1000);
    return `${time.getUTCHours().toString().padStart(2, '0')}:${time
      .getUTCMinutes()
      .toString()
      .padStart(2, '0')}`;
  };
  // console.log('weather:', weather);
  // console.log('forecast:', forecast);
  // console.log("weather.coord.lon:", weather.coord.lon)
  const { lat, lon } = weather.coord;

  const arrTemp = [];

  const averageTemp = ({ forecast }) => {
    forecast.list.map((element, index) => {
      if (index <= 7) {
        arrTemp.push(element.main.temp);
      }
    });
    const averageTemp = arrTemp.reduce((prevTemp, temp) => {
      return prevTemp + temp;
    }, 0);
    console.log(forecast.city.name);
    return <p>{Math.round(averageTemp / arrTemp.length)}°C</p>;
  };

  return (
    <Container>
      <HourlyForecast>
        <BlockHeader>Hourly forecast for 24 hours</BlockHeader>
        <HourlyForecastList forecast={forecast} />
      </HourlyForecast>
      <WeeklyForecast>
        <BlockHeader>5-DAY forecast</BlockHeader>
        <WeeklyForecastList forecast={forecast} />
      </WeeklyForecast>
      <PrecipitationMap>
        <BlockHeader>Precipitation Map</BlockHeader>
        <BlockMap>
          <WeatherMap lon={lon} lat={lat} city={weather.name} />
        </BlockMap>
      </PrecipitationMap>
      <Sunrise>
        <BlockHeader>Sunrise</BlockHeader>
        {/* <WiSunrise style={{ width: '24px', height: '24px' }} /> */}
        <Block>
          <BlockSunrise>
            <TextSunrise>Sunrise</TextSunrise>
            <Time>{UTCTime(weather.sys.sunrise)}</Time>
          </BlockSunrise>
          {/* <TextSunrise>
            Sunrise
            <br />
            {UTCTime(weather.sys.sunrise)}
          </TextSunrise> */}
          <PictureSunrise>
            <SunriseImg />
          </PictureSunrise>
          <BlockSunset>
            <TextSunset>Sunset</TextSunset>
            <Time>{UTCTime(weather.sys.sunset)}</Time>
          </BlockSunset>
          <PictureSunset>
            <SunsetImg />
          </PictureSunset>
          {/* {new Date(weather.sys.sunrise * 1000).toUTCString()} */}
          {/* <WiSunset style={{ width: '24px', height: '24px' }} /> */}
        </Block>
        {/* Sunset {new Date(weather.sys.sunset * 1000).toUTCString()} */}
      </Sunrise>
      <Wind>
        <BlockHeader>Wind</BlockHeader>
        <WindImg />
        <Text>{weather.wind.speed}m/s</Text>
      </Wind>
      <Visibility>
        <BlockHeader>Visibility</BlockHeader>
        <VisibilityImg />
        <Text>{weather.visibility / 1000}km</Text>
      </Visibility>
      <Humidity>
        <BlockHeader>Humdity</BlockHeader>
        <HumidityImg />
        <Text>{weather.main.humidity}%</Text>
      </Humidity>
      <Precipitation>
        {/* <BlockHeader>Precipitation</BlockHeader>
        <PrecipitationImg /> */}
        <BlockHeader>Average temp 24 hrs</BlockHeader>
        <AverageTempImg />
        <AverageTemp forecast={forecast} />
        {/* <Text style={{ color: 'red', fontWeight: '900' }}>
          {averageTemp({ forecast })}°C
        </Text> */}
      </Precipitation>
      <Pressure>
        <BlockHeader>Pressure</BlockHeader>
        <PressureImg />
        <Text>{weather.main.pressure}hPa</Text>
        {/* {weather.main.pressure} hPa */}
      </Pressure>
    </Container>
  );
};
