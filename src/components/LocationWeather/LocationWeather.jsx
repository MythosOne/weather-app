import { useContext } from 'react';
import PropTypes from 'prop-types';

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

LocationWeather.propTypes = {
  weather: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
    coord: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default LocationWeather;
