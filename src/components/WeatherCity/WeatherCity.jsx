import { useEffect, useState, useContext } from 'react';
import { createPortal } from 'react-dom';

import { SearchBar } from '../SearchBar/Searchbar';
import { WeatherList } from '../WeatherList/WeatherList';
import MyLocationCard from '../MyLocationCard/MyLocationCard';

import {
  WeatherBar,
  BlockBtn,
  Title,
  ListBtn,
  CloseBtn,
} from './WeatherCity.styled';

import {
  apiServiceSearchData,
  apiServiceForecastData,
  // apiServiceWeatherMaps,
} from '../../Api/apiService';
import { Loader } from '../Loader/Loader';

import { WeatherCityClose, CorrectListImg } from 'icons/IconComponent';
import { HomePageContext } from 'pages/Homepage';

export const WeatherCity = ({
  weather,
  forecastCities,
  setForecastCities,
  isOpen,
  setIsOpen,
  offset,
  setOffset,
}) => {
  const [searchCity, setSearchCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [onCloseBtn, setOnCloseBtn] = useState(false);
  const [, setCityId] = useState(0);
  const { weatherCities, setWeatherCities } = useContext(HomePageContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (searchCity) {
      handleAddCity(searchCity);
    }
  }, [searchCity]);

  const mobilePortal = document.getElementById('mobile-portal');

  const handleAddCity = async searchCity => {
    if (searchCity === '') {
      return;
    }

    setIsLoading(true);

    try {
      const data = await apiServiceSearchData(searchCity);

      if (weatherCities.some(city => city.id === data.id)) {
        alert(`${searchCity} is already in contacts`);
        return;
      }

      const { lat, lon } = data.coord;
      const forecast = await apiServiceForecastData(lat, lon);

      setWeatherCities(prevState => {
        const updatedWeatherCities = [...prevState, data];
        localStorage.setItem(
          'weatherCities',
          JSON.stringify(updatedWeatherCities)
        );
        return updatedWeatherCities;
      });

      setForecastCities(prevState => {
        const updatedForecastCities = [...prevState, forecast];
        localStorage.setItem(
          'forecastCities',
          JSON.stringify(updatedForecastCities)
        );
        return updatedForecastCities;
      });
    } catch (error) {
      alert('City not found');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onDeleteCard = cityId => {
    setCityId(cityId);

    // setWeatherCities(weatherCities.filter(({ id }) => id !== cityId));
    // setForecastCities(forecastCities.filter(({ city }) => city.id !== cityId));
    setWeatherCities(prev => {
      const updatedWeather = prev.filter(({ id }) => id !== cityId);
      localStorage.setItem('weatherCities', JSON.stringify(updatedWeather));
      return updatedWeather;
    });

    setForecastCities(prev => {
      const updatedForecast = prev.filter(({ city }) => city.id !== cityId);
      localStorage.setItem('forecastCities', JSON.stringify(updatedForecast));
      return updatedForecast;
    });
  };

  const content = (
    <WeatherBar dataOffset={offset}>
      <BlockBtn>
        <ListBtn
          type="button"
          aria-label="list"
          title="List"
          onClick={() => {
            setOnCloseBtn(!onCloseBtn);
          }}
        >
          <CorrectListImg />
        </ListBtn>
        <CloseBtn
          type="button"
          aria-label="close"
          title="Close"
          onClick={() => {
            setOffset(-100);
            setIsOpen(!isOpen);
          }}
        >
          <WeatherCityClose />
        </CloseBtn>
      </BlockBtn>
      <Title>Weather</Title>
      <SearchBar setSearchCity={setSearchCity} />
      <MyLocationCard weather={weather} />
      <WeatherList onCloseBtn={onCloseBtn} onDeleteCard={onDeleteCard} />
      {isLoading && <Loader />}
    </WeatherBar>
  );

  if (windowWidth < 767 && mobilePortal) {
    return createPortal(content, mobilePortal);
  }

  return content;
};
