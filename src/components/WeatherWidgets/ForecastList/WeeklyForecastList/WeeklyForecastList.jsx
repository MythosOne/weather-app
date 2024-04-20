import React from 'react';
import { Container, ForecastList } from './WeeklyForecastList.styled';

import { WeeklyForecastCard } from '../../ForecastCard/WeeklyForecastCard/WeeklyForecastCard';

export const WeeklyForecastList = ({ forecast }) => {
  // console.log(forecast);

  const groupedArray = [];
  const dateMap = new Map();

  forecast.list.forEach(obj => {
    const { dt } = obj;
    const date = new Date(dt * 1000).getUTCDate();
    // console.log('date:', date);

    if (!dateMap.has(date)) {
      dateMap.set(date, [obj]);
    } else {
      dateMap.get(date).push(obj);
    }
  });

  dateMap.forEach(dateArray => {
    groupedArray.push(dateArray);
  });

  // console.log("groupedArray:", groupedArray);

  // !!! temp_min, temp_max, weather icon

  return (
    <Container>
      <ForecastList>
        {/* {groupedArray.map(array => {
          const sumTempMin = array.reduce(
            (totalMinTemp, element) => totalMinTemp + element.main.temp_min,
            0
          );
          const tempMin = sumTempMin / array.length;
          console.log('tempMin: ', tempMin);

          const sumTempMax = array.reduce(
            (totalMaxTemp, element) => totalMaxTemp + element.main.temp_max,
            0
          );
          const tempMax = sumTempMax / array.length;
          console.log('tempMax: ', tempMax);
        })} */}

        {/* {forecast.list.map((element, index) => {
          if (index % 7 === 0) {
            // console.log(element)
            return <WeeklyForecastCard element={element} key={index} />;
          }
          return null;
        })} */}

        {groupedArray.map((element, index) => (
          <WeeklyForecastCard weatherDay={element} key={index} />
        ))}
      </ForecastList>
    </Container>
  );
};
