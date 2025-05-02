import { useContext } from 'react';
import PropTypes from 'prop-types';

import { HomePageContext } from 'pages/Homepage';

import {
  Container,
  Block,
  BlockItem,
  BlockWeather,
  WeatherIcon,
  City,
  Description,
  Temperature,
  MyLocation,
  Location,
} from './MyLocationCard.styled';

function MyLocationCard({ weather }) {
  const { setWeatherSection, setCurrentWeatherCityId } =
    useContext(HomePageContext);

  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <Container
      onClick={() => {
        setWeatherSection({});
        setCurrentWeatherCityId(0);
      }}
    >
      <ul>
        <Block>
          <BlockItem>
            <MyLocation>My Location</MyLocation>
            <City>{weather.name ? weather.name : 'unknown location'}</City>
          </BlockItem>
          <Temperature>{Math.trunc(weather.main.temp)}°</Temperature>
        </Block>
        <Block>
          <BlockWeather>
            <WeatherIcon src={iconUrl} width="32" alt="weather-icon" />
            <Description>{weather.weather[0].description}</Description>
          </BlockWeather>
          <Location>
            H:{Math.trunc(weather.coord.lat)}° L:{Math.trunc(weather.coord.lon)}
            °
          </Location>
        </Block>
      </ul>
    </Container>
  );
}

MyLocationCard.propTypes = {
  weather: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
    coord: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MyLocationCard;
