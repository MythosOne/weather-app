import { Searchbar } from '../Searchbar/Searchbar';
import { WeatherForm, Title } from './WeatherCity.styled';

export const WeatherCity = () => {
  return (
    <WeatherForm>
      <Title>Weather</Title>
      <Searchbar/>
    </WeatherForm>
  );
};
