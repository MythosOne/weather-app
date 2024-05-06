import {
  Container,
  MyLocation,
  City,
  Temperature,
  Description,
  Location,
} from './LocationWeather.styled';

function LocationWeather({ weather }) {
  return (
    <Container id="LocationWeather">
      {weather.name ? (
        <>
          <MyLocation>My Location</MyLocation>
          <City>{weather.name}</City>
        </>
      ) : (
        <MyLocation>Unknown location</MyLocation>
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
