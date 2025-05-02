import PropTypes from 'prop-types';

import {
  Container,
  Block,
  BlockItem,
  ImgDate,
  BlockTemp,
} from './HourlyForecastCard.styled';

export const HourlyForecastCard = ({ element }) => {
  
  return (
    <Container>
      <Block>
        <BlockItem>
          {new Date(element.dt * 1000).toLocaleTimeString([], {
            hour: '2-digit',
          })}
        </BlockItem>
        <BlockItem>
          <ImgDate
            src={`https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`}
            width="42"
            height="42"
            alt="weather-icon"
          />
        </BlockItem>
        <BlockTemp>{Math.round(element.main.temp)}°</BlockTemp>
      </Block>
    </Container>
  );
};

HourlyForecastCard.propTypes = {
  element: PropTypes.shape({
    dt: PropTypes.number.isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
