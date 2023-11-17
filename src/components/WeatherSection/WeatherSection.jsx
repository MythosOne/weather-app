import React from 'react';
import {
  Container,
  MyLocation,
  City,
  Temperature,
  Description,
  Location,
  LocationWeather,
  WeatherWidgets,
  WeatherForecast,
  Precipitation,
  Sunrise,
  Wind,
  Visibility,
  Humidity,
} from './WeatherSection.styled';

function WeatherSection({ weather, forecast }) {
  return (
    <Container>
      <LocationWeather>
        <MyLocation>My Location</MyLocation>
        <City>{weather.name}</City>
        <Temperature>{Math.trunc(weather.main.temp)}°</Temperature>
        <Description>{weather.weather[0].description}</Description>
        <Location>
          H:{Math.trunc(weather.coord.lat)} L:{Math.trunc(weather.coord.lon)}
        </Location>
      </LocationWeather>
      <WeatherWidgets>
        <WeatherForecast>{forecast}</WeatherForecast>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '10px',
          width: '95%',
        }}>
          <Precipitation>Precipitation</Precipitation>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '10px',
              width: '310px',
            }}
          >
            <Sunrise>Sunrise {weather.sys.sunrise} Sunset {weather.sys.sunset}</Sunrise>
            <Wind>Wind {weather.wind.speed} m/s</Wind>
            <Visibility>Visibility {weather.visibility}</Visibility>
            <Humidity>Humdity {weather.main.humidity}</Humidity>
          </div>
        </div>
      </WeatherWidgets>
    </Container>
  );
}

export default WeatherSection;
