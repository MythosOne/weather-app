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
      <PrecipitationMap>Precipitation Map ({forecast.city.name})</PrecipitationMap>
      <Sunrise>
        {/* <WiSunrise style={{ width: '24px', height: '24px' }} /> */}
        <SunriseImg />
        Sunrise {UTCTime(weather.sys.sunrise)}
        {/* {new Date(weather.sys.sunrise * 1000).toUTCString()} */}
        {/* <WiSunset style={{ width: '24px', height: '24px' }} /> */}
        <SunsetImg />
        Sunset {UTCTime(weather.sys.sunset)}
        {/* Sunset {new Date(weather.sys.sunset * 1000).toUTCString()} */}
      </Sunrise>
      <Wind>
        <WindImg />
        Wind {weather.wind.speed} m/s
      </Wind>
      <Visibility>
        <VisibilityImg />
        Visibility {weather.visibility}
      </Visibility>
      <Humidity>
        <HumidityImg />
        Humdity {weather.main.humidity}
      </Humidity>
      <Precipitation>
        <PrecipitationImg />
        Precipitation
      </Precipitation>
      <Pressure>
        <PressureImg />
        Pressure
      </Pressure>
    </Container>
  );
};
