import { useContext } from 'react';
import { HomePageContext } from 'pages/Homepage';
import {
  Container,
  MyLocation,
  Temperature,
  Description,
  Location,
} from './LocationWeather.styled';

function LocationWeather({ weather }) {
  const { locationWeather } = useContext(HomePageContext);

  return (
    <Container id="LocationWeather">
      {weather.id === locationWeather.id ? (
        weather.name ? (
          <>
            <MyLocation>My Location</MyLocation>
          </>
        ) : (
          <>
            <MyLocation>Unknown location</MyLocation>
          </>
        )
      ) : (
        <MyLocation>{weather.name}</MyLocation>
      )}
      <Temperature>{Math.trunc(weather.main.temp)}°</Temperature>
      <Description>{weather.weather[0].description}</Description>
      <Location>
        H:{Math.trunc(weather.coord.lat)} L:{Math.trunc(weather.coord.lon)}
      </Location>
    </Container>
  );
}

export default LocationWeather;
