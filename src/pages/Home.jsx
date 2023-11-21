import { WeatherCity } from '../components/WeatherCity/WeatherCity';
import { MyLocationWeather } from '../components/MyLocationWeather/MyLocationWeather';
import { useEffect, useState } from 'react';
import {
  apiServiceWeatherData,
  apiServiceForecastData,
  // apiServiceSearchData,
} from '../Api/apiService';
import { Loader } from '../components/Loader/Loader';

const Home = () => {
  const [weather, setWeather] = useState(
    JSON.parse(localStorage.getItem('weather')) ?? {}
  );
  const [forecast, setForecast] = useState(
    JSON.parse(localStorage.getItem('weather')) ?? {}
  );
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  // console.log(location);
  // console.log(weather);
  // console.log(forecast);
  const { latitude, longitude } = location;

  const handleSuccess = position => {
    const { latitude, longitude } = position.coords;
    setLocation({ latitude, longitude });
  };

  const handleError = error => {
    console.log(error);
  };

  useEffect(() => {
    localStorage.setItem('weather', JSON.stringify(weather));
    setIsLoading(true);

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      alert('Geolocation is not supported by your browser');
    }

    if (latitude !== null && longitude !== null) {
      apiServiceWeatherData(latitude, longitude)
        .then(weather => setWeather(weather))
        .catch(error => console.error(error))
        .finally(() => setIsLoading(false));

      apiServiceForecastData(latitude, longitude)
        .then(forecast => setForecast(forecast))
        .catch(error => console.error(error))
        .finally(() => setIsLoading(false));
    }
  }, [latitude, longitude]);

  return (
    <>
      {Object.keys(weather).length && <WeatherCity weather={weather} />}
      {Object.keys(weather).length && (
        <MyLocationWeather weather={weather} forecast={forecast} />
      )}

      {/* <WeatherCity weather={weather} /> */}
      {/* <MyLocationWeather weather={weather} forecast={forecast} /> */}
      {isLoading && <Loader />}
    </>
  );
};

export default Home;
