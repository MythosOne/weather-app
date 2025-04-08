import React, { useContext } from 'react';
import { Container, ScrollableList } from './ListOfWeatherCard.styled';
import WeatherCard from '../WeatherCard/WeatherCard';
import { HomePageContext } from 'pages/Homepage';

export const ListOfWeatherCard = ({ onCloseBtn, onDeleteCard }) => {
  const { weatherCities, handlerSelectWeatherCity } = useContext(HomePageContext);
  
  return (
    <Container>
      {/* <ScrollableList> */}
      {weatherCities.map(city => (
        <li key={city.id} onClick={() => handlerSelectWeatherCity(city.id)}>
          <WeatherCard
            weatherCity={city}
            onCloseBtn={onCloseBtn}
            onDeleteCard={onDeleteCard}
          />
        </li>
      ))}
      {/* </ScrollableList> */}
    </Container>
  );
};
