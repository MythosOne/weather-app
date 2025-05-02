import PropTypes from 'prop-types';

import { Container, ForecastList } from './HourlyForecastList.styled';

import { HourlyForecastCard } from '../../ForecastCard/HourlyForecastCard/HourlyForecastCard';

export const HourlyForecastList = ({ forecast }) => {
  return (
    <Container>
      <ForecastList>
        {forecast.list.map((element, index) => {
          if (index <= 7) {
            return <HourlyForecastCard element={element} key={index} />;
          }
          return null;
        })}
      </ForecastList>
    </Container>
  );
};

HourlyForecastList.propTypes = {
  forecast: PropTypes.shape({
    list: PropTypes.arrayOf(PropTypes.object.isRequired),
  }).isRequired,
};
