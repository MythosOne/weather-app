import { SearchBar } from '../Searchbar/SearchBar';
import { WeatherForm, Title } from './WeatherCity.styled';

export const WeatherCity = () => {
  return (
    <WeatherForm>
      <Title>Weather</Title>
      <SearchBar/>
    </WeatherForm>
  );
};
