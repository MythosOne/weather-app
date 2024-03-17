import React, { useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';
import { SearchBar } from '../SearchBar/SearchBar';
import {
  WeatherBar,
  BlockBtn,
  Title,
  ListBtn,
  CloseBtn,
} from './WeatherCity.styled';
import { WeatherList } from '../WeatherList/WeatherList';
import {
  apiServiceSearchData,
  apiServiceForecastData,
} from '../../Api/apiService';
import { Loader } from '../Loader/Loader';

import { WeatherCityClose, CorrectListImg } from 'icons/IconComponent';

export const WeatherCity = ({
  weather,
  weatherCities,
  setWeatherCities,
  forecastCities,
  setForecastCities,
  isOpen,
  setIsOpen,
  onSelectWeatherCity,
  setOnLocationWeather,
}) => {
  // const [weatherCity, setWeatherCity] = useState(
  //   JSON.parse(localStorage.getItem('weatherCity')) ?? []
  // );
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(-100);
  // console.log("first value: " + JSON.stringify(value))
  // console.log('weatherCities:', weatherCities[0].coord.lon);
  // console.log('WeatherCity- isOpen:', isOpen);
  // console.log('offset:', offset);

  const [onCloseBtn, setOnCloseBtn] = useState(false);
  const [cityId, setCityId] = useState(0);
  // console.log('State CityId:', cityId);

  // !!!!!!!!!!!!!!!!
  const handleSubmit = value => {
    setValue(value.toLowerCase());
  };

  const addCity = city => {
    if (city.length === 0) {
      alert('Field must be filled');
    }
  };

  // const handleClose = () => setOffset(-100);

  useEffect(() => {
    if (isOpen) {
      // console.log('WeatherCity-useEffect-isOpen:', isOpen);
      return setOffset(0);
    }
    // return setOffset(0)
  }, [isOpen]);

  useEffect(() => {
    if (value.trim() === '') {
      return;
    }

    setIsLoading(true);

    let lat;
    let lon;

    apiServiceSearchData(value)
      .then(data => {
        setWeatherCities([...weatherCities, { ...data }]);

        lat = data.coord.lat;
        lon = data.coord.lon;

        apiServiceForecastData(lat, lon)
          .then(forecast =>
            setForecastCities([...forecastCities, { ...forecast }])
          )
          .catch(error => console.error(error))
          .finally(() => setIsLoading(false));
      })
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false));
  }, [value]);

  localStorage.setItem('weatherCities', JSON.stringify(weatherCities));
  localStorage.setItem('forecastCities', JSON.stringify(forecastCities));

  const onDeleteCard = cityId => {
    setCityId(cityId);
    setWeatherCities(weatherCities.filter(({id}) => id !== cityId));
    // console.log('WeatherCity weatherCities:', weatherCities);
  };

  return (
    <WeatherBar dataOffset={offset} /*handleClose={handleClose}*/>
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
      <SearchBar
        onSubmit={handleSubmit}
        onAddCity={addCity}
        weather={weather}
        setOnLocationWeather={setOnLocationWeather}
      />
      <WeatherList
        cities={weatherCities}
        onSelectWeatherCity={onSelectWeatherCity}
        onCloseBtn={onCloseBtn}
        onDeleteCard={onDeleteCard}
      />
      {isLoading && <Loader />}
    </WeatherBar>
  );
};
