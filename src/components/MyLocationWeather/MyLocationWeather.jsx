import WeatherSection from '../WeatherSection/WeatherSection';
import { LocationForm } from './MyLocationWeather.styled';

export const MyLocationWeather = ({ weather }) => {
  return (
    <LocationForm>
      <WeatherSection weather={weather}/>
    </LocationForm>
  );
};
