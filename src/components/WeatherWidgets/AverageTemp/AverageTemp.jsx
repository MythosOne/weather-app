import PropTypes from 'prop-types';

import { Text } from '../WeatherWidgets.styled';

export const AverageTemp = ({ forecast }) => {
  const arrTemp = [];

  console.log("forecast", forecast);

  forecast.list.forEach((element, index) => {
    if (index <= 7) {
      arrTemp.push(element.main.temp);
    }
  });

  const averageTemp = arrTemp.reduce((prevTemp, temp) => {
    return prevTemp + temp;
  }, 0);

  return (
    <>
      <Text>{Math.round(averageTemp / arrTemp.length)}°C</Text>
    </>
  );
};

AverageTemp.propTypes = {
  forecast: PropTypes.shape({
    list: PropTypes.arrayOf(
      PropTypes.shape({
        main: PropTypes.shape({
          temp: PropTypes.number.isRequired,
        }).isRequired,
      })
    ).isRequired,
  }).isRequired,
};
