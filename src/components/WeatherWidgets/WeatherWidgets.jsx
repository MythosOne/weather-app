import React from 'react';
import {
  Container,
  HourlyForecast,
  BlockHeader,
  BlockHourlyWater,
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
        <div
          style={{
            overflow: 'auto',
            scrollbarWidth: 'none',
          }}
        >
          <BlockHourlyWater>
            {forecast.list.map((element, index) => {
              if (index <= 7) {
                return (
                  <li key={index}>
                    <ul
                      style={{
                        listStyle: 'none',
                        fontSize: '14px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px',
                        alignItems: 'center',
                      }}
                    >
                      {/* <li>{index}</li> */}
                      <li>
                        {new Date(element.dt * 1000).toLocaleTimeString([], {
                          hour: '2-digit',
                          // minute: '2-digit',
                        })}
                      </li>
                      <li>
                        <img
                          src={`http://openweathermap.org/img/w/${element.weather[0].icon}.png`}
                          width="30"
                          alt="Weather icon"
                        />
                      </li>
                      <li>{Math.round(element.main.temp)}°</li>
                    </ul>
                  </li>
                );
              }
              return null;
            })}
          </BlockHourlyWater>
        </div>
      </HourlyForecast>
      <WeeklyForecast>
        <BlockHeader>5-DAY forecast</BlockHeader>
        <BlockWeeklyWater></BlockWeeklyWater>
      </WeeklyForecast>
      <PrecipitationMap>
        <BlockHeader>Precipitation Map</BlockHeader>
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
