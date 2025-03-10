import React, { useEffect, useState, createContext } from 'react';
import { WeatherCity } from '../components/WeatherCity/WeatherCity';
import { WeatherSection } from '../components/WeatherSection/WeatherSection';
import {
  apiServiceWeatherData,
  apiServiceForecastData,
} from '../Api/apiService';
import { Loader } from '../components/Loader/Loader';
import { Main } from './Homepage.styled';

export const HomePageContext = createContext();

export const Homepage = ({ location, isOpen, setIsOpen }) => {
  //!!!State weather cities
  const [weatherCities, setWeatherCities] = useState(
    JSON.parse(localStorage.getItem('weatherCities')) ?? []
  );
  const [forecastCities, setForecastCities] = useState(
    JSON.parse(localStorage.getItem('forecastCities')) ?? []
  );
  //!!! state location weather
  const [locationWeather, setLocationWeather] = useState(
    JSON.parse(localStorage.getItem('locationWeather')) ?? {}
  );
  const [locationForecast, setLocationForecast] = useState(
    JSON.parse(localStorage.getItem('locationForecast')) ?? {}
  );

  //!!! state weather section
  const [weatherSection, setWeatherSection] = useState(
    JSON.parse(localStorage.getItem('weatherSection')) ?? {}
  );
  const [forecastSection, setForecastSection] = useState(
    JSON.parse(localStorage.getItem('forecastSection')) ?? {}
  );

  const [isLoading, setIsLoading] = useState(false);

  const [currentWeatherCityId, setCurrentWeatherCityId] = useState(0);

  const [offset, setOffset] = useState(-100);
  
  const { latitude, longitude } = location;

  useEffect(() => {
    setIsLoading(true);

    if (latitude !== null && longitude !== null) {
      apiServiceWeatherData(latitude, longitude)
        .then(weather =>
          setLocationWeather({
            ...weather,
            myLocation: true,
          })
        )
        .catch(error => console.error('Error fetching weather data:', error))
        .finally(() => setIsLoading(false));

      apiServiceForecastData(latitude, longitude)
        .then(forecast => setLocationForecast(forecast))
        .catch(error => console.error('Error fetching forecast data:', error))
        .finally(() => setIsLoading(false));
    }

    const updatedWeatherCities = [...weatherCities];
    const updatedForecastCities = [...forecastCities];

    weatherCities.forEach(weatherCity => {
      const lat = weatherCity.coord.lat;
      const lon = weatherCity.coord.lon;

      apiServiceWeatherData(lat, lon)
        .then(weather => {
          const indexToUpdate = updatedWeatherCities.findIndex(
            city => city.id === weatherCity.id
          );

          if (indexToUpdate !== -1) {
            updatedWeatherCities[indexToUpdate] = {
              ...weatherCity,
              ...weather,
            };
          }

          setWeatherCities(updatedWeatherCities);
        })
        .catch(error => console.error('Error fetching weather data:', error))
        .finally(() => setIsLoading(false));
    });

    forecastCities.forEach(forecastCity => {
      const lat = forecastCity.city.coord.lat;
      const lon = forecastCity.city.coord.lon;

      apiServiceForecastData(lat, lon)
        .then(forecast => {
          const indexToUpdate = updatedForecastCities.findIndex(
            ({ city }) => city.id === forecastCity.city.id
          );
          if (indexToUpdate !== -1) {
            updatedForecastCities[indexToUpdate] = {
              ...forecastCity,
              ...forecast,
            };
          }

          setForecastCities(updatedForecastCities);
        })
        .catch(error => console.error('Error fetching forecast data:', error))
        .finally(() => setIsLoading(false));
    });

    setIsLoading(false);
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

  localStorage.setItem('weatherCities', JSON.stringify(weatherCities));
  localStorage.setItem('forecastCities', JSON.stringify(forecastCities));

  const handlerSelectWeatherCity = cityId => setCurrentWeatherCityId(cityId);

  const { myLocation } = locationWeather;

  useEffect(() => {
    if (isOpen) {
      return setOffset(0);
    }
  }, [isOpen]);

  return (
    <>
      {myLocation && (
        <Main>
          <HomePageContext.Provider
            value={{
              weatherCities,
              setWeatherCities,
              handlerSelectWeatherCity,
              setWeatherSection,
              setCurrentWeatherCityId,
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
                offset={offset}
                setOffset={setOffset}
              />
            )}
            {Object.keys(locationWeather).length &&
              Object.keys(locationForecast).length && <WeatherSection />}
            {isLoading && <Loader />}
          </HomePageContext.Provider>
        </Main>
      )}
    </>
  );
};
