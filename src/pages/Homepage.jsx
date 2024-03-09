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

export const Homepage = ({ isOpen, setIsOpen /*onSelectWeatherCity*/ }) => {
  const [weatherCities, setWeatherCities] = useState(
    JSON.parse(localStorage.getItem('weatherCity')) ?? []
  );
  const [locationWeather, setLocationWeather] = useState(
    JSON.parse(localStorage.getItem('weather')) ?? []
  );
  const [weatherSection, setWeatherSection] = useState({});
  const [forecast, setForecast] = useState(
    JSON.parse(localStorage.getItem('forecast')) ?? []
  );
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentWeatherCityId, setCurrentWeatherCityId] = useState(0);
  console.log('currentWeatherCityId:', currentWeatherCityId);

  // const [isOpen, setIsOpen] = useState(false);
  console.log("weatherSection:", weatherSection);
  // console.log('locationWeatherId:', locationWeather.id);
  // console.log('forecast:', forecast);
  // console.log('weatherCities:', weatherCities);
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

  useEffect(() => {
    const handleChangeCity = () => {
      weatherCities.map(city => {
        if (currentWeatherCityId === city.id) {
          setWeatherSection(city);
        }
        // return console.log('weatherSection:', weatherSection);
      });
    };

    handleChangeCity();

  }, [currentWeatherCityId]);

  const handlerSelectWeatherCity = cityId =>
    setCurrentWeatherCityId(cityId); /*console.log('weatherCityId: ' + id)*/

  return (
    <Main>
      {Object.keys(locationWeather).length && (
        <WeatherCity
          weather={locationWeather}
          weatherCities={weatherCities}
          setWeatherCities={setWeatherCities}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onSelectWeatherCity={handlerSelectWeatherCity}
        />
      )}
      {(Object.keys(locationWeather).length ||
        Object.keys(forecast).length) && (
        <WeatherSection
          weather={locationWeather}
          weatherCity={weatherSection}
          weatherSection={weatherSection}
        />
      )}
      {isLoading && <Loader />}
    </Main>
  );
};
