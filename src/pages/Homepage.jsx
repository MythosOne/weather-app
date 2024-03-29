import { WeatherCity } from '../components/WeatherCity/WeatherCity';
import { WeatherSection } from '../components/WeatherSection/WeatherSection';
import React, { useEffect, useState, createContext } from 'react';
import {
  apiServiceWeatherData,
  apiServiceForecastData,
} from '../Api/apiService';
import { Loader } from '../components/Loader/Loader';
import { Main } from './Homepage.styled';

export const HomePageContext = createContext();

export const Homepage = ({ isOpen, setIsOpen }) => {
  //State weather cities
  const [weatherCities, setWeatherCities] = useState(
    JSON.parse(localStorage.getItem('weatherCities')) ?? []
  );
  const [forecastCities, setForecastCities] = useState(
    JSON.parse(localStorage.getItem('forecastCities')) ?? []
  );
  // state location weather
  const [locationWeather, setLocationWeather] = useState(
    JSON.parse(localStorage.getItem('locationWeather')) ?? {}
  );
  const [locationForecast, setLocationForecast] = useState(
    JSON.parse(localStorage.getItem('locationForecast')) ?? {}
  );
  const [onLocationWeather, setOnLocationWeather] = useState(false);
  // console.log(onLocationWeather)
  // state weather section
  const [weatherSection, setWeatherSection] = useState(
    JSON.parse(localStorage.getItem('weatherSection')) ?? {}
  );
  const [forecastSection, setForecastSection] = useState(
    JSON.parse(localStorage.getItem('forecastSection')) ?? {}
  );

  // state location
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  const [currentWeatherCityId, setCurrentWeatherCityId] = useState(0);
  // console.log('currentWeatherCityId:', currentWeatherCityId);

  // const [isOpen, setIsOpen] = useState(false);
  // console.log('weatherSection:', weatherSection);
  // console.log('locationWeatherId:', locationWeather.id);
  // console.log('locationWeather:', locationWeather);
  // console.log('locationForecast:', locationForecast);
  // console.log('forecastSection:', forecastSection);
  // console.log('forecastCities:', forecastCities);
  // console.log('Homepage weatherCities:', weatherCities);
  const { latitude, longitude } = location;

  const handleSuccess = position => {
    const { latitude, longitude } = position.coords;
    setLocation({ latitude, longitude });
  };

  const handleError = error => {
    console.log(error);
  };

  useEffect(() => {
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
        .then(forecast => setLocationForecast(forecast))
        .catch(error => console.error(error))
        .finally(() => setIsLoading(false));
    }
  }, [latitude, longitude]);

  localStorage.setItem('locationWeather', JSON.stringify(locationWeather));
  localStorage.setItem('locationForecast', JSON.stringify(locationForecast));

  useEffect(() => {
    const handleChangeCity = () => {
      weatherCities.forEach(weatherCity => {
        if (currentWeatherCityId === weatherCity.id) {
          setWeatherSection(weatherCity);
        }
      });
      forecastCities.forEach(forecastCity => {
        if (currentWeatherCityId === forecastCity.city.id) {
          setForecastSection(forecastCity);
        }
      });
    };

    handleChangeCity();
  }, [currentWeatherCityId, forecastCities, weatherCities, locationForecast]);

  const handlerSelectWeatherCity = cityId => setCurrentWeatherCityId(cityId);

  return (
    <Main>
      <HomePageContext.Provider
        value={{
          weatherCities,
          setWeatherCities,
          handlerSelectWeatherCity,
          setOnLocationWeather,
          locationForecast,
          forecastSection,
          locationWeather,
          weatherSection,
        }}
      >
        {Object.keys(locationWeather).length && (
          <WeatherCity
            weather={locationWeather}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            forecastCities={forecastCities}
            setForecastCities={setForecastCities}
          />
        )}
        {Object.keys(locationWeather).length &&
          Object.keys(locationForecast).length && <WeatherSection />}
        {isLoading && <Loader />}
      </HomePageContext.Provider>
    </Main>
  );
};
