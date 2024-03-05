import React, { useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';
import { SearchBar } from '../SearchBar/SearchBar';
import { WeatherBar, WeatherHead, Title, CloseBtn } from './WeatherCity.styled';
import { WeatherList } from '../WeatherList/WeatherList';
import { apiServiceSearchData } from '../../Api/apiService';
import { Loader } from '../Loader/Loader';

import { WeatherCityClose } from '../../icons/IconComponent';

export const WeatherCity = ({
  weather,
  weatherCity,
  setWeatherCity,
  isOpen,
  setIsOpen,
}) => {
  // const [weatherCity, setWeatherCity] = useState(
  //   JSON.parse(localStorage.getItem('weatherCity')) ?? []
  // );
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(-100);
  // console.log("first value: " + JSON.stringify(value))
  // console.log('weatherCity:', weatherCity);
  // console.log('WeatherCity- isOpen:', isOpen);
  // console.log('offset:', offset);

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
      console.log('WeatherCity-useEffect-isOpen:', isOpen);
      return setOffset(0);
    }
      // return setOffset(0)
  }, [isOpen]);

  useEffect(() => {
    localStorage.setItem('weatherCity', JSON.stringify(weatherCity));

    if (value.trim() === '') {
      return;
    }

    setIsLoading(true);

    apiServiceSearchData(value)
      .then(data => setWeatherCity([...weatherCity, { ...data }]))

      .catch(error => console.error(error))
      .finally(() => setIsLoading(false));

  }, [value, /* setWeatherCity, weatherCity*/]);

  return (
    <WeatherBar dataOffset={offset} /*handleClose={handleClose}*/>
      <WeatherHead>
        <Title>Weather</Title>
        <CloseBtn
          type="button"
          aria-label="close"
          title="Close"
          onClick={() => {
            setOffset(-100);
            setIsOpen(!isOpen)
          }}
        >
          <WeatherCityClose />
        </CloseBtn>
      </WeatherHead>

      <SearchBar
        onSubmit={handleSubmit}
        onAddCity={addCity}
        weather={weather}
      />
      <WeatherList cities={weatherCity} />
      {isLoading && <Loader />}
    </WeatherBar>
  );
};
