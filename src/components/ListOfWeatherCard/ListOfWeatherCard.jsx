import { useContext } from 'react';
import { Container, WeatherCardList } from './ListOfWeatherCard.styled';
import WeatherCard from '../WeatherCard/WeatherCard';
import { HomePageContext } from 'pages/Homepage';

export const ListOfWeatherCard = ({ onCloseBtn, onDeleteCard }) => {
  const { weatherCities, handlerSelectWeatherCity, setWithAnimation } =
    useContext(HomePageContext);

  return (
    <Container>
      <WeatherCardList>
        {weatherCities.map(city => (
          <li
            key={city.id}
            onClick={() => {
              handlerSelectWeatherCity(city.id);
              setWithAnimation(true);
            }}
          >
            <WeatherCard
              weatherCity={city}
              onCloseBtn={onCloseBtn}
              onDeleteCard={onDeleteCard}
            />
          </li>
        ))}
      </WeatherCardList>
    </Container>
  );
};
