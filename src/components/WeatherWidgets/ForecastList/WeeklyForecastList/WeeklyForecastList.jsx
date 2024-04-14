import React from 'react';
import { Container, ForecastList } from './WeeklyForecastList.styled';

import { WeeklyForecastCard } from '../../ForecastCard/WeeklyForecastCard/WeeklyForecastCard';

export const WeeklyForecastList = ({ forecast }) => {
  const groupedArray = [];
  const dateMap = new Map();

  forecast.list.forEach(obj => {
    const { dt } = obj;
    const date = new Date(dt * 1000).getUTCDate();
    console.log('date:', date);

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

  return (
    <Container>
      <ForecastList>
        {groupedArray.map((element, index, array) => {
          array.forEach(element => {
            // const { main } = element;
            console.log("elementForEach", element)
            // console.log(element.main.temp_min)
          });

        })}
        {forecast.list.map((element, index) => {
          if (index % 7 === 0) {
            // console.log(element)
            return <WeeklyForecastCard element={element} key={index} />;
          }
          return null;
        })}
      </ForecastList>
    </Container>
  );
};
