import { WeatherCity } from '../components/WeatherCity/WeatherCity';
import { WeatherSection } from '../components/WeatherSection/WeatherSection';
import { useEffect, useState } from 'react';
import {
  apiServiceWeatherData,
  apiServiceForecastData,
  // apiServiceSearchData,
} from '../Api/apiService';
import { Loader } from '../components/Loader/Loader';
import { Main } from './Homepage.styled';

export const Homepage = () => {
  const [weatherCity, setWeatherCity] = useState(
    JSON.parse(localStorage.getItem('weatherCity')) ?? []
  );
  const [locationWeather, setLocationWeather] = useState(
    JSON.parse(localStorage.getItem('weather')) ?? []
  );
  const [forecast, setForecast] = useState(
    JSON.parse(localStorage.getItem('forecast')) ?? []
  );
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  console.log('locationWeather:', locationWeather);
  console.log('forecast:', forecast);
  const { latitude, longitude } = location;

  const handleSuccess = position => {
    const { latitude, longitude } = position.coords;
    setLocation({ latitude, longitude });
  };

  const handleError = error => {
    console.log(error);
  };

  useEffect(() => {
    localStorage.setItem('locationWeather', JSON.stringify(locationWeather));
    setIsLoading(true);

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      alert('Geolocation is not supported by your browser');
    }

    if (latitude !== null && longitude !== null) {
      apiServiceWeatherData(latitude, longitude)
        .then(weather => setLocationWeather(weather))
        .catch(error => console.error(error))
        .finally(() => setIsLoading(false));

      apiServiceForecastData(latitude, longitude)
        .then(forecast => setForecast(forecast))
        .catch(error => console.error(error))
        .finally(() => setIsLoading(false));
    }
  }, [latitude, longitude]);

  return (
    <Main>
      {Object.keys(locationWeather).length && (
        <WeatherCity
          weather={locationWeather}
          weatherCity={weatherCity}
          setWeatherCity={setWeatherCity}
        />
      )}
      {(Object.keys(locationWeather).length ||
        Object.keys(forecast).length) && (
        <WeatherSection weather={locationWeather} />
      )}
      {isLoading && <Loader />}
    </Main>
  );
};
