import WeatherSection from '../WeatherSection/WeatherSection';
import { LocationForm, Title } from './MyLocationWeather.styled';

export const MyLocationWeather = ({ card }) => {
  return (
    <LocationForm>
      <Title>My Location</Title>
      <WeatherSection />
    </LocationForm>
  );
};
