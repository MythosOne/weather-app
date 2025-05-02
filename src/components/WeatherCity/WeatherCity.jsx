import { useEffect, useState, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import { HomePageContext } from 'pages/Homepage';
import {
  apiServiceSearchData,
  apiServiceForecastData,
  // apiServiceWeatherMaps,
} from '../../Api/apiService';

import { SearchBar } from '../SearchBar/SearchBar';
import { ListOfWeatherCard } from '../ListOfWeatherCard/ListOfWeatherCard';
import MyLocationCard from '../MyLocationCard/MyLocationCard';

import {
  WeatherBar,
  BlockBtn,
  Title,
  ListBtn,
  CloseBtn,
  CardList,
  ScrollableList,
} from './WeatherCity.styled';

import { Loader } from '../Loader/Loader';

import { WeatherCityClose, CorrectListImg } from 'icons/IconComponent';

export const WeatherCity = ({
  weather,
  setForecastCities,
  setCurrentWeatherCityId,
  setWeatherSections,
  setIsOpen,
  offset,
  setOffset,
}) => {
  const [searchCity, setSearchCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [onCloseBtn, setOnCloseBtn] = useState(false);
  const { weatherCities, setWeatherCities } = useContext(HomePageContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobilePortal, setMobilePortal] = useState(null);

  const { setWithAnimation } = useContext(HomePageContext);

  WeatherCity.whyDidYouRender = true;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (searchCity) {
      handleCitySearch(searchCity);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchCity]);

  useEffect(() => {
    setMobilePortal(document.getElementById('mobile-portal'));
  }, []);

  const handleCitySearch = useCallback(
    async searchCity => {
      if (!searchCity.trim()) return;

      setIsLoading(true);

      try {
        const data = await apiServiceSearchData(searchCity);

        if (weatherCities.some(city => city.id === data.id)) {
          alert(`${searchCity} is already in cities`);
          setSearchCity('');
          return;
        }

        setWeatherCities(prev => {
          const updated = [...prev, data];
          localStorage.setItem('weatherCities', JSON.stringify(updated));
          return updated;
        });

        const { lat, lon } = data.coord;
        const forecast = await apiServiceForecastData(lat, lon);

        setForecastCities(prev => {
          const updated = [...prev, forecast];
          localStorage.setItem('forecastCities', JSON.stringify(updated));
          return updated;
        });

        setWithAnimation(true);

        setSearchCity('');
      } catch (error) {
        alert('City not found');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [weatherCities, setWeatherCities, setForecastCities]
  );

  const onDeleteCard = useCallback(
    cityId => {
      setWeatherCities(prev => prev.filter(({ id }) => id !== cityId));
      setForecastCities(prev => prev.filter(({ city }) => city.id !== cityId));
      setCurrentWeatherCityId(null);
      setWeatherSections({});
    },
    [
      setWeatherCities,
      setForecastCities,
      setCurrentWeatherCityId,
      setWeatherSections,
    ]
  );

  const handleCloseBtn = useCallback(() => {
    setOnCloseBtn(prev => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setOffset(-100);
    setIsOpen(prev => !prev);
  }, [setOffset, setIsOpen]);
  
  const content = (
    <WeatherBar dataOffset={offset}>
      <BlockBtn>
        <ListBtn
          type="button"
          aria-label="list"
          title="List"
          onClick={handleCloseBtn}
        >
          <CorrectListImg />
        </ListBtn>
        <CloseBtn
          type="button"
          aria-label="close"
          title="Close"
          onClick={handleClose}
        >
          <WeatherCityClose />
        </CloseBtn>
      </BlockBtn>
      <Title>Weather</Title>
      <SearchBar
        setSearchCity={setSearchCity}
        setCurrentWeatherCityId={setCurrentWeatherCityId}
      />
      <CardList>
        <ScrollableList>
          <MyLocationCard weather={weather} />
          <ListOfWeatherCard
            onCloseBtn={onCloseBtn}
            onDeleteCard={onDeleteCard}
          />
        </ScrollableList>
      </CardList>
      {isLoading && <Loader />}
    </WeatherBar>
  );

  if (windowWidth < 767 && mobilePortal) {
    return createPortal(content, mobilePortal);
  }

  return content;
};

WeatherCity.propTypes = {
  weather: PropTypes.object.isRequired,
  setForecastCities: PropTypes.func.isRequired,
  setCurrentWeatherCityId: PropTypes.func.isRequired,
  setWeatherSections: PropTypes.func.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  offset: PropTypes.number.isRequired,
  setOffset: PropTypes.func.isRequired,
};
